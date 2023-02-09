import useClima from "../hooks/useClima"

const Resultado = () => {

    const { resultado } = useClima()
    const {name, main} = resultado
    const {temp, temp_max, temp_min} = main

    // Temperatura Kelvin
    const kelvin = 273.15

    return (
        <div className="contenedor clima">
            <h2>El clima de {name} es:</h2>
            <p>{parseInt(temp - kelvin)}<span>&#x2103;</span></p>
            <div className="temp_min_max">
                <p>Mínima: {parseInt(temp_min - kelvin)}&#x2103;</p>
                <p>Máxima: {parseInt(temp_max - kelvin)}&#x2103;</p>
            </div>
        </div>
    )
}

export default Resultado