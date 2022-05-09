import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Header({}){

    const Router = useRouter()
    const path = Router.pathname

    return <header>
        <Link href={'/'}><a><i className="fa-solid fa-bolt"/></a></Link>
        <nav className={'ml-auto'}>
            <ul>
                <li className={`${path === '/' ? 'active' : ''}`}><Link href={'/'}>home</Link></li>
                <li className={`${path === '/work' ? 'active' : ''}`}><Link href={'/work'}>work</Link></li>
                <li className={`${path === '/about' ? 'active' : ''}`}><Link href={'/'}>about</Link></li>
                <li className={`${path === '/contact' ? 'active' : ''}`}><Link href={'/'}>contact</Link></li>
            </ul>
        </nav>
    </header>
}
