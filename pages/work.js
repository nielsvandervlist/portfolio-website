import WithTransition from '/components/transitions/WithTransition'
import Layout from '../components/layout/Layout'

function Work({}){
    return <Layout>
        <div className={'work col-span-12'}>
            <h1>Work</h1>
        </div>
    </Layout>
}

export default WithTransition(Work)
