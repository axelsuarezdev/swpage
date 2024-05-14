import React from 'react';
import Layout from '../components/layout';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Card from '../components/card';


export default function Films({films}){
  
    return (
       <Layout>
        <h1 className='text-4xl md:text-3xl lg:text-4xl font-medium text-medium text-center'>Explore the <span className='text-amber-300'>Star Wars</span> Filmography</h1>
        <p className='text-gray-600 mt-2 md:mt-4 text-center' style={{margin: "20px"}}>Embark on an intergalactic journey through the Star Wars universe! Explore the iconic films and meet their legendary characters. From the epic battles of the Jedi to the rise of the Sith, immerse yourself in the rich storytelling and unforgettable adventures of a galaxy far, far away</p>
        
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>

        {films.map((film, index) => (
        <Card image={"/movie.jpg"}index={index} title={film.title} episode_id={film.episode_id}></Card>
        ))}

</div>
       </Layout>
    )
}
export const getStaticProps: GetStaticProps = async ()=>{
    const res = await fetch("https://swapi.dev/api/films/");
    const data = await res.json();
    const films = data.results;
    console.log(films)
    return {
        props: {
            films,
        },
    };
};