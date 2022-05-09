import WithTransition from '/components/transitions/WithTransition'
import Layout from '../components/layout/Layout'
import About from '../components/sections/About'
import Work from '../components/sections/Work'
import HomeHero from '../components/sections/HomeHero'
import Contact from '../components/sections/Contact'

function Home() {
    return (
        <Layout>
            <div className={'home col-span-12'}>
                <HomeHero/>
                <Work/>
                <About/>
                <Contact/>
            </div>
        </Layout>
    )
}

export default WithTransition(Home)
