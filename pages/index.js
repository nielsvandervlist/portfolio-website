import Image from 'next/image'
import WithTransition from '/components/transitions/WithTransition'
import Button from '/components/buttons/Button'
import Header from '../components/layout/Header'
import Layout from '../components/layout/Layout'
import Figure from '../components/layout/Figure'

function Home() {
    return (
        <Layout>
            <div className={'home col-span-12'}>
                <div className={'hero grid grid-cols-12'}>
                    <div className={'hero__text col-span-5'}>
                        <h1>Hello, my name is <span>Niels.</span></h1>
                        <Button className={'btn btn--primary'} link={'/'}>Test</Button>
                    </div>
                    <div className={'hero__image col-span-6'}>
                        <Figure img={'hero.png'}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default WithTransition(Home)
