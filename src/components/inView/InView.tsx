import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

import styles from "./style.module.scss"

interface InViewProps {
    children: React.ReactNode,
    className: string
}

export function InView({children, className}: InViewProps) {
    const [isVisible, setIsVisible] = useState(false)
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

    useEffect(() => {
        if (inView) {
            setIsVisible(true)
        }
    }, [inView])

    return (
        <div ref={ref} className={styles[`${className}`]}>
            {isVisible && (
                <motion.div
                    className={styles.line}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 5 }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    )
}