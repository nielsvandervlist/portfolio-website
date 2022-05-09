import Header from './Header'

export default function Layout({children}){
    return <div className={'layout main grid grid-cols-12 px-8 lg:px-20'}>
        <Header/>
        {children}
    </div>
}
