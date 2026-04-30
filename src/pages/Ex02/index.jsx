import { useState } from "react";

function Ex02() {
    const [numero, setNumero] = useState("Número")
    const [resultado, setResultado] = useState("Resultado")

    function handleSubmit(event) {
        event.preventDefault()
        const num = Number(numero)
        setResultado(`Antecessor = ${num - 1} e Sucessor = ${num + 1}`)
    }

    return (
        <>
            <h2>Exercício 2</h2>
            <p>7. Peça um número e mostre: Seu antecessor Seu sucessor</p>
            <section>
                <form onSubmit={handleSubmit}>

                    <label>Número</label>
                    <input 
                    type="number" 
                    value={numero} 
                    onChange={(event) => setNumero(event.target.value)} />
                    <button type="submit">Enviar</button>
                    <p>{resultado}</p>

                </form>
            </section>
        </>
    )
}

export default Ex02