import WithTransition from '/components/transitions/WithTransition'
import Layout from '../components/layout/Layout'
import Contact from '../components/sections/Contact'

function ContactPage({}){
    return <Layout>
        <div className={'col-span-12 my-20'}>
            <Contact/>
        </div>
    </Layout>
}

export default WithTransition(ContactPage)
