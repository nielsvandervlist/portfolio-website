import * as Helpers from '../Helpers'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

export default function Figure({img, className, position}) {

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

    return <>
        <figure className={Helpers.classNames('figure', className)}>
            <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{duration: 1, ease: 'easeOut'}}
                ref={ref}
            >
                <img alt={'image'} src={`/images/${img}`}/>
            </motion.div>
        </figure>
    </>
}
