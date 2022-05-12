import {useState} from 'react'
import Figure from '../layout/Figure'

export default function Contact({}) {

    const [form, setForm] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        }).then(response => response.json())
            .then(data => {
                setSubmitted(true)
            })
            .catch((error) => {
                setError(true)
            })
    }

    return <div className={'contact my-8 col-span-12 lg:my-20 grid grid-cols-12 flex items-center'}>
        <div className={'contact__form col-span-12 lg:col-span-5'}>
            <h2 className={'mb-8'}>Get in touch <i className="fa-solid fa-paper-plane ml-4"/></h2>
            <p className={'mb-16'}>I’m free for any conversations whatsoever.</p>
            <form action={'/mail.php'} className={'form'} method={'post'}>
                <fieldset className={'flex mb-10'}>
                    <div className={'form__field mr-8'}>
                        <label htmlFor={'name'}>First name</label>
                        <input
                            type={'text'}
                            onChange={(e) => setForm({...form, name: e.target.value})}
                            value={form.name || ''}
                            placeholder={'John'}
                        />
                    </div>
                    <div className={'form__field'}>
                        <label htmlFor={'email'}>Email</label>
                        <input
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            type={'email'}
                            value={form.email || ''}
                            placeholder={'John@email.com'}
                        />
                    </div>
                </fieldset>
                <fieldset className={'mb-10'}>
                    <div className={'form__field mr-8'}>
                        <label htmlFor={'message'}>Message</label>
                        <textarea
                            value={form.message || ''}
                            placeholder={'Write your message here'}
                            onChange={(e) => setForm({...form, message: e.target.value})}
                        />
                    </div>
                </fieldset>
                <button onClick={(e) => {
                    submit(e)
                }} type={'submit'} className={'btn btn--primary'}>Send email
                </button>

                {submitted && <span className={'message message--good'}>Thanks for the message</span>}
                {error && <span className={'message message--error'}>Something went wrong</span>}

            </form>
        </div>
        <div className={'contact__image col-span-12 lg:col-span-7 flex'}>
            <Figure className={'ml-auto'} img={'contact.png'}/>
        </div>
    </div>
}
