import WithTransition from '/components/transitions/WithTransition'
import Layout from '../components/layout/Layout'
import About from '../components/sections/About'

function AboutPage({}){
    return <Layout>
        <div className={'col-span-12 my-20'}>
            <About/>
        </div>
    </Layout>
}

export default WithTransition(AboutPage)
