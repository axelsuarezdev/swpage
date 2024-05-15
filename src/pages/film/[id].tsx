import React from 'react';
import Layout from '../../components/layout';
import { GetStaticProps, GetStaticPaths } from 'next';
import fs from "fs"
import path from "path"
import Link from 'next/link';

export default function Character({film, characters}){
    return (
        <Layout>
            <div className='flex flex-col items-center' style={{padding: "0 15%"}}>
                <h1 className='text-center text-5xl md:text-4xl font-medium text-amber-300'>{film.title}</h1>
                <h3 className='text-center text-2xl md:text-xl'>EPISODE <span className='text-amber-300'>{film.episode_id}</span></h3>
                <h3 className='text-center text-2xl md:text-xl'><span className='text-amber-300'>{film.director}</span></h3>
                <img 
                    className='rounded-2xl sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300' 
                    src={"/movie.jpg"}
                    alt="Film poster" 
                    height={200} 
                    width={300}
                    style={{ margin: "20px" }}
                />
                <h1 className='text-center text-5xl md:text-4xl font-medium text-amber-300 m-14'>CHARACTERS</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
                {characters.map((character, index) => (
                    <Link key={index} href={`/character/${character.name}`}>
                    <div className='flex flex-col items-center shadow-lg h-full w-full hover:scale-110' key={index}>
                        <img src="/character.jpg" className='md:w-1/2 object-cover' height={200} width={300} style={{borderRadius: "15px"}}/>
                        <div className='rounded-lg  p-4 md:p-6 mt-4 md:mt-0 md:ml-4 md:flex-grow'>
                            <h1 className='text-center text-2xl md:text-4xl lg:text-2xl font-medium text-amber-300'>{character.name}</h1>
                        </div>
                    </div>
                    </Link>
                ))}
                </div>
                <div className='grid grid-cols-2 gap-2 mt-4 items-start'></div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context)=>{
    const {params} = context;
    const {id} = params;
    let characters;
    let fetchPath = `https://swapi.dev/api/films/${id}/`;
    // Archivo
    const filePath = path.join(process.cwd(),'public', 'characters.json');
    const fileContent = fs.readFileSync(filePath, "utf8");
    const charactersList = JSON.parse(fileContent);
    characters = charactersList.filter((character) => character.films.includes(fetchPath));
    //
    const res = await fetch(fetchPath);
    const data = await res.json();
    const film = data;
    return {
        props: {
            film,
            characters,
        },
    };
};
export const getStaticPaths: GetStaticPaths = async () => {
    // Definir las páginas estáticas de películas de antemano
    const paths = Array.from({ length: 6 }).map((_, index) => ({
      params: { id: (index + 1).toString() },
    }));
  
    return {
      paths: paths.map(path => `/film/${path.params.id}`),
      fallback: false,
    };
};