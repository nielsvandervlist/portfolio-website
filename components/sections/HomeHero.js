import Button from '../buttons/Button'
import Figure from '../layout/Figure'
import {motion} from 'framer-motion'

export default function HomeHero({}) {
    return <div className={'hero grid grid-cols-12 my-8 lg:my-20'}>
        <div className={'hero__text col-span-12 lg:col-span-5'}>
            <motion.div
                initial={{x: '100%', opacity: '0%'}}
                animate={{x: '0%', opacity: '100%'}}
                transition={{duration: 1, delay: 0.5}}
            >
                <h1>Hello, my name is <span>Niels.</span></h1>
                <h2>I’m a developer and webdesigner</h2>
                <Button className={'btn btn--black'} link={'/'}>Show work</Button>
            </motion.div>
        </div>

        <div className={'hero__image col-span-12 lg:col-span-6 ml-auto'}>
            <motion.div
                initial={{x: '100%', opacity: '0%'}}
                animate={{x: '0%', opacity: '100%'}}
                transition={{duration: 1, delay: 0.75}}
            >
            <Figure img={'hero.png'}/>
            </motion.div>
        </div>

    </div>

}
