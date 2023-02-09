import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState(false)
    const [unResult, setUnResult] = useState(false)

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async datos => {
        setCargando(true)
        setUnResult(false)
        try {
            const {ciudad, pais} = datos

            const appId = import.meta.env.VITE_API_KEY

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&limit=1&appid=${appId}`

            const { data } = await axios(url)
            setResultado(data)

        } catch(error) {
            setUnResult('Sin resultados')
        } finally {
            setCargando(false)
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                cargando,
                unResult
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export { ClimaProvider }
export default ClimaContext