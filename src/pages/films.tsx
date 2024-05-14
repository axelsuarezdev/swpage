import React from 'react';
import Layout from '../components/layout';
import { GetStaticProps } from 'next';
// import Link from 'next/link';


export default function Films({films}){
  
    return (
       <Layout>
        <h1 className='text-4xl md:text-3xl lg:text-4xl font-medium text-medium text-center'>Explore the <span className='text-amber-300'>Star Wars</span> Filmography</h1>
        <p className='text-gray-600 mt-2 md:mt-4 text-center'>Embark on an intergalactic journey through the Star Wars universe! Explore the iconic films and meet their legendary characters. From the epic battles of the Jedi to the rise of the Sith, immerse yourself in the rich storytelling and unforgettable adventures of a galaxy far, far away</p>
        
        <h2>Films</h2>
        <ul>
            {films.map((film, index)=>{
                return <li key={index}>
                    <h1>{film.title}</h1>
                    <h3>EPISODIO {film.episode_id}</h3>
                </li>
            })}
        </ul>
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