import {BsInstagram, BsFacebook, BsWhatsapp} from "react-icons/bs"
import styles from "./style.module.scss"
import Link from "next/link"

export function SocialMedia() {
    return (
        <div className={styles.socialMedia}>
            <BsWhatsapp/>
            <Link href="https://www.instagram.com/">
                <BsInstagram/>
            </Link>
            <Link href="https://www.facebook.com/">
                <BsFacebook/>
            </Link>
        </div>
    )
}