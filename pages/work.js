import WithTransition from '/components/transitions/WithTransition'
import Layout from '../components/layout/Layout'
import Card from '../components/cards/Card'
import Figure from '../components/layout/Figure'

function Work({}){
    return <Layout>
        <div className={'work col-span-12 my-20'}>
            <h1 className={'mb-10'}>Take a look at my <span>work.</span></h1>
            <div className={'work__cards grid grid-cols-12 gap-10'}>
                <Card className={'col-span-4'}/>
                <Card className={'col-span-4'}/>
                <Card className={'col-span-4'}/>
                <Card className={'col-span-4'}/>
                <Card className={'col-span-4'}/>
                <Card className={'col-span-4'}/>
            </div>
        </div>
        <div className={'work col-span-12 mt-20 flex justify-center'}>
            <Figure img={'work.png'}/>
        </div>
    </Layout>
}

export default WithTransition(Work)
