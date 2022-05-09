import Figure from '../layout/Figure'

export default function Contact({}){
    return <div className={'contact my-8 col-span-12 lg:my-20 grid grid-cols-12 flex items-center'}>
        <div className={'contact__form col-span-12 lg:col-span-5'}>
            <h2 className={'mb-8'}>Get in touch <i className="fa-solid fa-paper-plane ml-4"/></h2>
            <p className={'mb-16'}>I’m free for any conversations whatsoever.</p>
            <form action={'../../php/mail.php'} className={'form'} method={'post'}>
                <fieldset className={'flex mb-10'}>
                    <div className={'form__field mr-8'}>
                        <label htmlFor={'name'}>First name</label>
                        <input type={'text'} placeholder={'John'} id={'name'} name={'name'}/>
                    </div>
                    <div className={'form__field'}>
                        <label htmlFor={'email'}>First name</label>
                        <input type={'email'} placeholder={'John@email.com'} id={'email'} name={'email'}/>
                    </div>
                </fieldset>
                <fieldset className={'mb-10'}>
                    <div className={'form__field mr-8'}>
                        <label htmlFor={'message'}>First name</label>
                        <textarea placeholder={'Write your message here'} name={'message'} id={'message'}/>
                    </div>
                </fieldset>
                <button type={'submit'} className={'btn btn--primary'}>Send email</button>
            </form>
        </div>
        <div className={'contact__image col-span-12 lg:col-span-7 flex'}>
            <Figure className={'ml-auto'} img={'contact.png'}/>
        </div>
    </div>
}
