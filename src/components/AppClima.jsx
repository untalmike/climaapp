import Formulario from './Formulario'
import Resultado from "./Resultado"
import useClima from '../hooks/useClima'
import Loading from './Loading'

const AppClima = () => {

    const {resultado, cargando, unResult} = useClima()
    return(
        <>
            <main className="dos-columnas">
                <Formulario/>
                { 
                    cargando ? <Loading/> : resultado?.name ? <Resultado /> : unResult ? <p>{unResult}</p> : <p>Espacio para el clima</p>
                }
            </main>
        </>
    )
}

export default AppClima