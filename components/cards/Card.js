import Link from 'next/link'

export default function Card({children}){
    return <Link href={'/'}>
        <a href={''} className={'block'}>
            <div className={'card card--purple'}>{children}</div>
        </a>
    </Link>
}
