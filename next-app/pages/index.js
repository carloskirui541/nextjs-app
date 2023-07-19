import Footer from '@/comps/Footer'
import Navbar from '@/comps/Navbar'
import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <Link href="/ninjas">See ninja Listing</Link>
    </>
  )
}
