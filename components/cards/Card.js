import Link from 'next/link'
import * as Helpers from '../Helpers'
import Figure from '../layout/Figure'

export default function Card({children, className}){
    return <Link href={'/'}>
        <a href={''} className={Helpers.classNames('figure', className)}>
            <div className={'card card--purple'}>
                {children ? children : <Figure className={'w-full'} img={'placeholder.png'}/>}
                <span className={'btn btn--secondary'}>Show project</span>
            </div>
        </a>
    </Link>
}
