import React from 'react';
import Layout from '../../components/layout';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import CharacterCard from '../../components/characterCard';
import fs from "fs"
import path from 'path';

export default function CharactersPage({characters, pageNumber}){
    const nextEnabled = pageNumber <9;
    const prevEnabled = pageNumber >1
    return (
        <Layout>
           <h1 className='text-4xl md:text-3xl lg:text-4xl font-medium text-medium text-center'>Discover the <span className='text-amber-300'>Star Wars</span> Characters</h1>
            <p className='text-gray-600 mt-2 md:mt-4 text-center' style={{margin: "20px"}}>Embark on an intergalactic journey through the Star Wars universe! Meet the iconic characters from the epic saga. From brave Jedi warriors to powerful Sith lords, explore the rich diversity and captivating stories of the characters that inhabit a galaxy far, far away.</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
            {characters.map((character, index) => (
            <CharacterCard image={"/character.jpg"} 
                key={index} 
                eyecolor={character.eye_color} 
                gender={character.gender} 
                name={character.name}
            />
            ))}
        </div>

        <div className="flex justify-center gap-4 m-14">
        {prevEnabled && (
          <Link href={`/characters/${pageNumber - 1}`}  className="bg-black hover:bg-amber-300 hover:text-black text-amber-300 font-bold py-2 px-4 rounded">
              Previous
          </Link>
        )}

        {nextEnabled && (
          <Link href={`/characters/${pageNumber + 1}`} className="bg-black hover:bg-amber-300 hover:text-black text-amber-300 font-bold py-2 px-4 rounded">
              Next
          </Link>
        )}
      </div>
        </Layout>

    )
}
export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    const { id } = params;
    const res = await fetch(`https://swapi.dev/api/people/?page=${id}`);
    const data = await res.json();
    const characters = data.results;
    const pageNumber = parseInt(id as string, 10)

    // Guardar la data de cada personaje
    let allCharacters = [];
    const fileName = 'characters.json';
    const fileDirectory = path.join(process.cwd(), 'public');
    const filePath = path.join(fileDirectory, fileName);

    // Verificar si el archivo ya existe
    if (fs.existsSync(filePath)) {
        // Leer el archivo existente
        const fileData = fs.readFileSync(filePath, 'utf8');
        allCharacters = JSON.parse(fileData);
    }

    // Filtrar personajes nuevos que no están en el archivo existente
    const newUniqueCharacters = characters.filter(newCharacter =>
        !allCharacters.some(existingCharacter => existingCharacter.name === newCharacter.name)
    );

    if (newUniqueCharacters.length > 0) {
        // Agregar los nuevos personajes únicos a la lista existente
        allCharacters = allCharacters.concat(newUniqueCharacters);

        // Escribir la lista actualizada en el archivo
        await fs.promises.mkdir(fileDirectory, { recursive: true }); // Asegurarse de que el directorio exista
        await fs.promises.writeFile(filePath, JSON.stringify(allCharacters, null, 2));
    }

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