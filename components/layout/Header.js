import Link from 'next/link'

export default function Header({}){
    return <header>
        <i className="fa-solid fa-bolt"/>
        <nav className={'ml-auto'}>
            <ul>
                <li className={'active'}><Link href={'/'}>home</Link></li>
                <li><Link href={'/'}>work</Link></li>
                <li><Link href={'/'}>about</Link></li>
                <li><Link href={'/'}>contact</Link></li>
            </ul>
        </nav>
    </header>
}
