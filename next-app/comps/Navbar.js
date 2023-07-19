import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='logo'>
        <h1>Ninjas List</h1>
       <Link href="/">Home</Link> 
       <Link href="/about">About</Link> 
       <Link href="/ninjas">Ninja Listing</Link> 

    </div>
  )
}
