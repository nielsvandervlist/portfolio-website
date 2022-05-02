import WithTransition from '/components/transitions/WithTransition'
import Button from '/components/buttons/Button'
import Layout from '../components/layout/Layout'
import Figure from '../components/layout/Figure'
import WorkSwiper from '../components/swiper/WorkSwiper'
import * as Helpers from '../components/Helpers'

function Home() {

    return (
        <Layout>
            <div className={'home col-span-12'}>
                <div className={'hero grid grid-cols-12 my-20'}>
                    <div className={'hero__text col-span-5'}>
                        <h1>Hello, my name is <span>Niels.</span></h1>
                        <h2>I’m a developer and webdesigner</h2>
                        <Button className={'btn btn--primary'} link={'/'}>Show work</Button>
                    </div>
                    <div className={'hero__image col-span-6'}>
                        <Figure img={'hero.png'}/>
                    </div>
                </div>
                <div className={'work my-20'}>
                    <div className={'work__title'}>
                        <i className="fa-solid fa-briefcase"/>
                        <h2>Take a look at some of my work</h2>
                        <Figure img={'cat.png'}/>
                    </div>
                    <div className={'work__cards'}>
                        <WorkSwiper cards={Helpers.cards}/>
                    </div>
                </div>
                <div className={'about my-20 grid grid-cols-12'}>
                    <div className={'about__text text-center col-span-8 col-start-3'}>
                        <h2 className={'mb-8'}>What do i do?</h2>
                        <Figure className={'mb-8'} img={'faq.png'}/>
                        <h2 className={'mb-8'}>I’m a full-time <span>designer</span> and <span>wedeveloper</span>.</h2>
                        <p className={'mb-8'}>My favorite part of my job is creating the best solutions for specific problems. With my expertise in development and design i look at problems different than other developers</p>
                        <Figure className={'mb-8'} img={'roadmap.png'}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default WithTransition(Home)
