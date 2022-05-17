import * as Helpers from '../Helpers'
import SlideIn from '../transitions/SlideIn'

export default function Figure({img, className}) {

    return <>
        <figure className={Helpers.classNames('figure', className)}>
            <SlideIn>
                <img alt={'image'} src={`/images/${img}`}/>
            </SlideIn>
        </figure>
    </>
}
