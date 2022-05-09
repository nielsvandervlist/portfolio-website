import Button from '../buttons/Button'
import Figure from '../layout/Figure'
import WorkSwiper from '../swiper/WorkSwiper'
import * as Helpers from '../Helpers'

export default function HomeHero({}) {
    return <div className={'hero grid grid-cols-12 my-8 lg:my-20'}>
        <div className={'hero__text col-span-12 lg:col-span-5'}>
            <h1>Hello, my name is <span>Niels.</span></h1>
            <h2>I’m a developer and webdesigner</h2>
            <Button className={'btn btn--primary'} link={'/'}>Show work</Button>
        </div>
        <div className={'hero__image col-span-12 lg:col-span-6 ml-auto'}>
            <Figure img={'hero.png'}/>
        </div>
    </div>
}
