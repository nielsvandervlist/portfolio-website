import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

export default function SlideIn({children}) {

    const [ref, inView, entry] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    const variants = {
        visible: {opacity: 1, scale: 1, y: 0},
        hidden: {
            opacity: 0,
            scale: 0.90,
        },
    }

    return <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{duration: 1, ease: 'easeOut'}}
        ref={ref}
    >
        {children}
    </motion.div>
}
