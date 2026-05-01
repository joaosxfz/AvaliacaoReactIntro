import { useState } from "react";
import { Link } from "react-router-dom";

function Ex01() {
    const [maior, setMaior] = useState("Base maior")
    const [menor, setMenor] = useState("Base menor")
    const [altura, setAltura] = useState("Altura")
    const [resultado, setResultado] = useState("Resultado")

    function handleSubmit(event) {
        event.preventDefault()
        setResultado(`A área é: ${(Number(maior) + Number(menor)) * (Number(altura) / 2)}`)
    }

    return (
        <>
            <Link to="/"><button>Home</button></Link>
            <h2>Exercício 1</h2>
            <p>15. Peça a base maior, base menor e altura de um trapézio. Calcule a área.</p>
            <form onSubmit={handleSubmit}>
                <label>Base maior</label>
                <input type="number" value={maior} onChange={(event) => setMaior(event.target.value)} />
                <label>Base menor</label>
                <input type="number" value={menor} onChange={(event) => setMenor(event.target.value)} />
                <label>Altura</label>
                <input type="number" value={altura} onChange={(event) => setAltura(event.target.value)} />
                <button type="submit">Enviar</button>
                <p>{resultado}</p>
            </form>
        </>
    )
}

export default Ex01