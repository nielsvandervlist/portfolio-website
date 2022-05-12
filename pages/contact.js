import WithTransition from '/components/transitions/WithTransition'
import Layout from '../components/layout/Layout'
import Contact from '../components/sections/Contact'

function ContactPage({}) {
    return <Layout>
        <div className={'col-span-12 my-20'}>
            <div className={'contact-info'}>
                <h2>Contact information</h2>
                <ul>
                    <li><span>mail:</span> niels.vder.vlist@gmail.com</li>
                    <li><span>tel:</span> 0681366671</li>
                </ul>
            </div>
            <Contact/>
        </div>
    </Layout>
}

export default WithTransition(ContactPage)
