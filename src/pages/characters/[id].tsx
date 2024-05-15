import React from 'react';
import Layout from '../../components/layout';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import CharacterCard from '../../components/characterCard';

export default function CharactersPage({characters, pageNumber}){
    const nextEnabled = pageNumber <9;
    const prevEnabled = pageNumber >1
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

        <div className="flex justify-center mt-4 gap-4">
        {prevEnabled && (
          <Link href={`/characters/${pageNumber - 1}`}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Previous
          </Link>
        )}

        {nextEnabled && (
          <Link href={`/characters/${pageNumber + 1}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Next
          </Link>
        )}
      </div>
        </Layout>

    )
}
export const getStaticProps: GetStaticProps = async (context)=>{
    const {params} = context;
    const {id} = params;
    const res = await fetch(`https://swapi.dev/api/people/?page=${id}`);
    const data = await res.json();
    const characters = data.results;
    const pageNumber = parseInt(id as string, 10)
    console.log(characters)
    return {
        props: {
            characters,
            pageNumber,
        },
    };
};
export const getStaticPaths: GetStaticPaths = async () => {
    // Definir las páginas estáticas de personajes de antemano
    const paths = Array.from({ length: 9 }).map((_, index) => ({
      params: { id: (index + 1).toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  };