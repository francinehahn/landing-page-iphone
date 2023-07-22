import Head from "next/head"
import styles from "./style.module.scss"
import Image from "next/image"

import { Header } from "@/components/header/Header"

import iphoneCover from "../../assets/iphone-cover.png"
import iphoneCamera from "../../assets/iphone-camera.png"
import iphoneScreen from "../../assets/iphone-screen.png"
import iphoneWaterProof from "../../assets/iphone-water-proof.jpg"
import iphoneColors from "../../assets/iphone-colors.png"

export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            </Head>

            <Header/>

            <main className={styles.main}>
                <section className={styles.firstSection}>
                    <div>
                        <h2>Conheça o novo iPhone</h2>
                        <p>
                            Câmera grande-angular inovadora de 48 MP. Tela duas vezes mais brilhante 
                            sob a luz do sol. Tudo com a potência do chip para smartphone que é o máximo.
                        </p>
                        <button>Comprar agora</button>
                    </div>

                    <Image src={iphoneCover} alt="Imagem do novo iPhone"/>
                </section>
                
                <section className={styles.secondSection}>
                    <h3 id="features">Características do produto</h3>
                    
                    <div className={styles.camera}>
                        <Image src={iphoneCamera} alt="Imagem da câmera do iPhone"/>
                        <p>
                            Câmera grande-angular inovadora de 48 MP. 
                            Tenha a qualidade de Hollywood na palma da sua mão!
                        </p>
                    </div>

                    <div className={styles.screen}>
                        <p>
                            Aço inoxidável de qualidade cirúrgica.Tela mais resistente e duas vezes 
                            mais brilhante sob a luz do sol.
                        </p>
                        <Image src={iphoneScreen} alt="Imagem da tela de um iPhone"/>
                    </div>

                    <div className={styles.waterProof}>
                        <Image src={iphoneWaterProof} alt="Imagem da tela de um iPhone molhada"/>
                        <p>
                            Ainda mais resistente à água. O novo iPhone pode sobreviver sendo submerso 
                            em águas profundas de até seis metros por 30 minutos.
                        </p>
                    </div>

                    <div className={styles.colors}>
                        <p>
                            Disponível em cinco cores diferentes: azul, roxo, cinza escuro, dourado claro e vermelho.
                        </p>
                        <Image src={iphoneColors} alt="Imagem de dois iPhones coloridos"/>
                    </div>
                </section>
            </main>
        </>
    )
}