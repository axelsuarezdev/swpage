import React from 'react';
import Layout from '../../components/layout';
import { GetStaticProps, GetStaticPaths } from 'next';
import fs from "fs"
import path from "path"
// import Link from 'next/link';

export default function Character({character}){
    return (
        <Layout>
            <div className='flex flex-col md:flex-row items-center' style={{padding: "0 15%"}}>

                <img src="/character.jpg" className='rounded-s-xl md:w-1/2 object-cover' height={200} width={300}/>
                <div className='rounded-lg shadow-lg p-4 md:p-6 mt-4 md:mt-0 md:ml-4 md:flex-grow' style={{border: "2px solid white"}}>
                    <h1 className='text-center md:text-left text-2xl md:text-4xl lg:text-2xl font-medium text-amber-300' style={{borderBottom: "2px solid white"}}>{character.name}</h1>
                    <div className='grid grid-cols-2 gap-2 mt-4 items-start'>
                        {character.height !== 'n/a' && character.height !== 'unknown' && (
                            <p className='text-lg md:text-xl'>height <span className='text-amber-300'>{character.height}</span></p>
                        )}
                        {character.gender !== 'n/a' && character.gender !== 'unknown' && (
                            <p className='text-lg md:text-xl'>gender <span className='text-amber-300'>{character.gender}</span></p>
                        )}
                        {character.birth_year !== 'n/a' && character.birth_year !== 'unknown' && (
                            <p className='text-lg md:text-xl'>birthday <span className='text-amber-300'>{character.birth_year}</span></p>
                        )}
                        {character.eye_color !== 'n/a' && character.eye_color !== 'unknown' && (
                            <p className='text-lg md:text-xl'>eye color <span className='text-amber-300'>{character.eye_color}</span></p>
                        )}
                        {character.hair_color !== 'n/a' && character.hair_color !== 'unknown' && (
                            <p className='text-lg md:text-xl'>hair color <span className='text-amber-300'>{character.hair_color}</span></p>
                        )}
                        {character.skin_color !== 'n/a' && character.skin_color !== 'unknown' && (
                            <p className='text-lg md:text-xl'>skin color <span className='text-amber-300'>{character.skin_color}</span></p>
                        )}
                        {character.mass !== 'n/a' && character.mass !== 'unknown' && (
                            <p className='text-lg md:text-xl'>mass <span className='text-amber-300'>{character.mass}</span> kg</p>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async (context)=>{
    const {params} = context;
    const {name} = params;
    console.log("NAME: ", name)
    let character;
    // Búsqueda del archivo generado por 'characters/[id].tsx
    try {
        const filePath = path.join(process.cwd(),'public', 'characters.json');
        const fileContent = fs.readFileSync(filePath, "utf8");
        const characters = JSON.parse(fileContent);
        character = characters.find((char)=> char.name === name);
    } catch (err){
        console.error("Error leyendo el archivo characters")
    }
    return {
        props: {
            character,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    let paths = [];
    try {
        const filePath = path.join(process.cwd(),'public', 'characters.json');
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const characters = JSON.parse(fileContent);

        // Generar rutas dinámicas para cada personaje
        paths = characters.map((character) => ({
            params: { name: character.name },
        }));
    } catch (error) {
        console.error('Error leyendo el archivo characters:', error);
    }

    return {
        paths: paths,
        fallback: false,
    };
};