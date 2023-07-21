import Head from "next/head"
import styles from "./style.module.scss"
import Image from "next/image"

import iphoneCover from "../../assets/iphone-cover.png"

export default function Home() {
    return (
        <main className={styles.main}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            </Head>

            <div>
                <h1>Conheça o novo iPhone</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A qui nam quas, reiciendis debitis voluptas 
                    itaque ipsam laboriosam, quibusdam fuga saepe accusamus recusandae ut iusto rerum architecto natus ullam sint?
                </p>
            </div>

            <Image src={iphoneCover} alt=""/>
        </main>
    )
}