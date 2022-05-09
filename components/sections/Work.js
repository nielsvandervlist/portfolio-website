import Figure from '../layout/Figure'
import WorkSwiper from '../swiper/WorkSwiper'
import * as Helpers from '../Helpers'

export default function Work({}){
    return <div className={'work my-20'}>
        <div className={'work__title'}>
            <i className="fa-solid fa-briefcase"/>
            <h2 className={'mb-8 lg:mb-0'}>Take a look at some of my work</h2>
            <Figure img={'cat.png'}/>
        </div>
        <div className={'work__cards'}>
            <WorkSwiper cards={Helpers.cards}/>
        </div>
    </div>
}
