import Figure from '../layout/Figure'

export default function({}){
    return <div className={'about my-20 grid grid-cols-12'}>
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
}
