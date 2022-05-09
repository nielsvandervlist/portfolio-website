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
                <div className={'hero grid grid-cols-12 my-8 lg:my-20'}>
                    <div className={'hero__text col-span-12 lg:col-span-5'}>
                        <h1>Hello, my name is <span>Niels.</span></h1>
                        <h2>I’m a developer and webdesigner</h2>
                        <Button className={'btn btn--primary'} link={'/'}>Show work</Button>
                    </div>
                    <div className={'hero__image col-span-12 lg:col-span-6 ml-auto'}>
                        <Figure img={'hero.png'}/>
                    </div>
                </div>
                <div className={'work my-20'}>
                    <div className={'work__title'}>
                        <i className="fa-solid fa-briefcase"/>
                        <h2 className={'mb-8 lg:mb-0'}>Take a look at some of my work</h2>
                        <Figure img={'cat.png'}/>
                    </div>
                    <div className={'work__cards'}>
                        <WorkSwiper cards={Helpers.cards}/>
                    </div>
                </div>
                <div className={'about my-20 grid grid-cols-12'}>
                    <div className={'about__text text-center col-span-12 lg:col-span-8 lg:col-start-3'}>
                        <h2 className={'mb-8'}>What do i do?</h2>
                        <Figure className={'mb-8'} img={'faq.png'}/>
                        <h2 className={'mb-8'}>I’m a full-time <span>designer</span> and <span>wedeveloper</span>.</h2>
                        <p className={'mb-8'}>My favorite part of my job is creating the best solutions for specific
                            problems. With my expertise in development and design i look at problems different than
                            other developers</p>
                        <Figure className={'mb-8'} img={'roadmap.png'}/>
                    </div>
                    <div className={'about__software col-span-12 lg:col-span-8 lg:col-start-3 text-center'}>
                        <div className={'about__icons'}>
                            <i className="fa-brands fa-react"/>
                            <i className="fa-brands fa-laravel"/>
                            <i className="fa-brands fa-sketch"/>
                        </div>
                        <p className={'block'}>I work with React, Sketch and Laravel</p>
                        <div className={'about__icons'}>
                            <i className="fa-solid fa-mobile"/>
                            <i className="fa-solid fa-tablet"/>
                            <i className="fa-brands fa-desktop"/>
                        </div>
                        <p>I create websites, applications and API’s</p>
                    </div>
                </div>
                <div className={'contact my-8 col-span-12 lg:my-20 grid grid-cols-12 flex items-center'}>
                    <div className={'contact__form col-span-12 lg:col-span-5'}>
                        <h2 className={'mb-8'}>Get in touch <i className="fa-solid fa-paper-plane ml-4"/></h2>
                        <p className={'mb-16'}>I’m free for any conversations whatsoever.</p>
                        <form action={'../../php/mail.php'} className={'form'} method={'post'}>
                            <fieldset className={'flex mb-10'}>
                                <div className={'form__field mr-8'}>
                                    <label htmlFor={'name'}>First name</label>
                                    <input type={'text'} placeholder={'John'} id={'name'} name={'name'}/>
                                </div>
                                <div className={'form__field'}>
                                    <label htmlFor={'email'}>First name</label>
                                    <input type={'email'} placeholder={'John@email.com'} id={'email'} name={'email'}/>
                                </div>
                            </fieldset>
                            <fieldset className={'mb-10'}>
                                <div className={'form__field mr-8'}>
                                    <label htmlFor={'message'}>First name</label>
                                    <textarea placeholder={'Write your message here'} name={'message'} id={'message'}/>
                                </div>
                            </fieldset>
                            <button type={'submit'} className={'btn btn--primary'}>Send email</button>
                        </form>
                    </div>
                    <div className={'contact__image col-span-12 lg:col-span-7 flex'}>
                        <Figure className={'ml-auto'} img={'contact.png'}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default WithTransition(Home)
