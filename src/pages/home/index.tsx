import Head from "next/head"
import styles from "./style.module.scss"
import Image from "next/image"

import { Header } from "@/components/header/Header"

import iphoneCover from "../../assets/iphone-cover.png"
import iphoneCamera from "../../assets/iphone-camera.png"
import iphoneScreen from "../../assets/iphone-screen.png"
import iphoneWaterProof from "../../assets/iphone-water-proof.jpg"
import iphoneColors from "../../assets/iphone-colors.png"

import { motion } from 'framer-motion'
import { InView } from "@/components/inView/InView"
import { SocialMedia } from "@/components/socialMedia/SocialMedia"

export default function Home() {
    return (
        <>
            <Head>
                <title>iPhone | Lançamento</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <meta name="description" content="Página de vendas do novo iPhone da Apple"/>
                <meta name="keywords" content="iPhone, apple, celular, tecnologia"/>
            </Head>

            <Header/>

            <main className={styles.main}>
                <section className={styles.firstSection}>
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h2>Conheça o novo iPhone</h2>
                        <p>
                            Câmera grande-angular inovadora de 48 MP. Tela duas vezes mais brilhante 
                            sob a luz do sol. Tudo com a potência do chip para smartphone que é o máximo.
                        </p>
                        <button>Comprar agora</button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <Image src={iphoneCover} alt="Imagem do novo iPhone" priority/>
                    </motion.div>
                </section>
                
                <section className={styles.secondSection}>
                    <h3 id="features">Características do produto</h3>

                    <InView className="camera">
                        <Image src={iphoneCamera} alt="Imagem da câmera do iPhone"/>
                        <p>
                            Câmera grande-angular inovadora de 48 MP. 
                            Tenha a qualidade de Hollywood na palma da sua mão!
                        </p>
                    </InView>

                    <InView className="screen">
                        <p>
                            Aço inoxidável de qualidade cirúrgica.Tela mais resistente e duas vezes 
                            mais brilhante sob a luz do sol.
                        </p>
                        <Image src={iphoneScreen} alt="Imagem da tela de um iPhone"/>
                    </InView>

                    <InView className="waterProof">
                        <Image src={iphoneWaterProof} alt="Imagem da tela de um iPhone molhada"/>
                        <p>
                            Ainda mais resistente à água. O novo iPhone pode sobreviver sendo submerso 
                            em águas profundas de até seis metros por 30 minutos.
                        </p>
                    </InView>

                    <InView className="colors">
                        <p>
                            Disponível em cinco cores diferentes: azul, roxo, cinza escuro, dourado claro e vermelho.
                        </p>
                        <Image src={iphoneColors} alt="Imagem de dois iPhones coloridos"/>
                    </InView>
                </section>

                <SocialMedia/>
            </main>
        </>
    )
}