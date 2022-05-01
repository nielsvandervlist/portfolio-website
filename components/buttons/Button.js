import Link from 'next/link'

export default function Button({link, children, className}){
    return <Link className={className} href={link}>{children}</Link>
}
