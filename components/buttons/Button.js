import Link from 'next/link'

export default function Button({link, children, className}){
    return <Link href={link}><a className={className}>{children}</a></Link>
}
