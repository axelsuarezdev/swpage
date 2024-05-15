import React from 'react';
import Layout from '../components/layout';
import CharacterCard from '../components/characterCard';
// import Link from 'next/link';
import { GetStaticProps } from 'next';
export default function Characters({characters}){
    return (
       <Layout>
        <h1 className='text-4xl md:text-3xl lg:text-4xl font-medium text-medium text-center'>Explore the <span className='text-amber-300'>Star Wars</span> Filmography</h1>
        <p className='text-gray-600 mt-2 md:mt-4 text-center' style={{margin: "20px"}}>Embark on an intergalactic journey through the Star Wars universe! Explore the iconic films and meet their legendary characters. From the epic battles of the Jedi to the rise of the Sith, immerse yourself in the rich storytelling and unforgettable adventures of a galaxy far, far away</p>
        
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>

        {characters.map((character, index) => (
        <CharacterCard image={"/character.jpg"} 
            index={index} 
            eyecolor={character.eye_color} 
            gender={character.gender} 
            name={character.name}
        />
        ))}

</div>
       </Layout>
    )
}
export const getStaticProps: GetStaticProps = async ()=>{
    const res = await fetch("https://swapi.dev/api/people/");
    const data = await res.json();
    const characters = data.results;
    const nextUrl = data.next;
    console.log(characters)
    return {
        props: {
            characters,
        },
    };
};