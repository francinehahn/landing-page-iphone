import Link from "next/link";
import style from "./style.module.scss";
import { motion } from 'framer-motion';

export function Header() {
    return (
        <motion.header 
            className={style.header}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1>TechProd</h1>
            <nav>
                <Link href="#">Home</Link>
                <Link href="#features">O produto</Link>
                <button>Comprar</button>
            </nav>
        </motion.header>
    )
}