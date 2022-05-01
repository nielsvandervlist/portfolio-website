import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/buttons/Button'

export default function Home() {
  return (
    <div><h1>Test</h1><Button className={'btn btn--primary'} link={'/'}>Test</Button></div>
  )
}
