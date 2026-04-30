import { Link } from "react-router-dom";

function Home() {
    return (
        <main>
            <section>
                <h2>Lista de Exercícios</h2>
                <div>
                    <ul>
                        <li><Link to="/Ex01"><button>Exercício 01</button></Link></li>
                        <li><Link to="/Ex02"><button>Exercício 02</button></Link></li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Home