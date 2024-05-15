import Link from "next/link";
import Image from "next/image";

export default function CharacterCard({ eyecolor, gender,  name, image}){
    // /${episode_id}
    const isValidToShow = (value)=> value !== "n/a" && value !=="unknown";
    return (<div className="group">
        <Link href={`/character/${name}`} className='group items-center flex flex-col'> 
            <Image 
            className='rounded-2xl sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300' 
            src={image}
            alt="Film poster" 
            height={200} 
            width={300}
            style={{
                margin: "20px"
            }}
            />
            <h1 className='text-center text-2xl md:text-4xl lg:text-2xl font-medium'>{name}</h1>
            {isValidToShow(eyecolor) && (
          <h3 className="text-center text-lg md:text-xl">
            Eye color: <span className="text-amber-300">{eyecolor}</span>
          </h3>
        )}
        {isValidToShow(gender) && (
          <h3 className="text-center text-lg md:text-xl">
            gender: <span className="text-amber-300">{gender}</span>
          </h3>
        )}
        </Link>
    </div>)
}