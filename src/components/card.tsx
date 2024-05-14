import Link from "next/link";
import Image from "next/image";

export default function Card({index, episode_id, title, image}){
    return (<div className="group">
        <Link key={index} href={`/film/${episode_id}`} className='group'> 
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
            <h1 className='text-center text-2xl md:text-4xl lg:text-2xl font-medium'>{title}</h1>
            <h3 className='text-center text-lg md:text-xl'>EPISODE <span className='text-amber-300'>{episode_id}</span></h3>
        </Link>
    </div>)
}