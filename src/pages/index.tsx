import React from 'react';
// import Link from 'next/link';
import Layout from '../components/layout';
import Link from 'next/link';

export default function Home() {
    return (
     <Layout>
       <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center content-center">
        <div className='space-y-6'>
         <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium'>Welcome to the intergalactic registry of the Force!</h1>
         <p className='text-lg md:text-xl'>Discover the Star Wars universe like never before. Explore the <Link href="/films" className="text-amber-300">movies</Link> and meet the most important <Link href="/characters" className="text-amber-300">characters</Link> of this epic saga.</p>
        </div>
        <img src="./deathstar.png" alt="thechosenimage" />
       </div>
     </Layout>
    );
  }
  
  