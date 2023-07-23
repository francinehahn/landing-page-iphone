import Link from "next/link"
import {BsInstagram, BsFacebook, BsWhatsapp} from "react-icons/bs"
import { motion } from 'framer-motion'
import styles from "./style.module.scss"

export function SocialMedia() {
    return (
        <motion.div 
            className={styles.socialMedia}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
        >
            <BsWhatsapp/>
            <Link href="https://www.instagram.com/">
                <BsInstagram/>
            </Link>
            <Link href="https://www.facebook.com/">
                <BsFacebook/>
            </Link>
        </motion.div>
    )
}