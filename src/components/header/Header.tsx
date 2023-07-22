import Link from "next/link";
import style from "./style.module.scss";

export function Header() {
    return (
        <header className={style.header}>
            <h1>TechProd</h1>
            <nav>
                <Link href="#">Home</Link>
                <Link href="#features">O produto</Link>
                <button>Comprar</button>
            </nav>
        </header>
    )
}