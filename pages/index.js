import WithTransition from '/components/transitions/WithTransition'
import Layout from '../components/layout/Layout'
import About from '../components/sections/About'
import Work from '../components/sections/Work'
import HomeHero from '../components/sections/HomeHero'
import Contact from '../components/sections/Contact'
import SlideIn from '../components/transitions/SlideIn'

function Home() {
    return (
        <Layout>
            <div className={'home col-span-12'}>

                <HomeHero/>
                <SlideIn>
                    <Work/>
                </SlideIn>
                <SlideIn>
                    <About/>
                </SlideIn>
                <SlideIn>
                    <Contact/>
                </SlideIn>
            </div>
        </Layout>
    )
}

export default WithTransition(Home)
