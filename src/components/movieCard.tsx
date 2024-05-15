import Link from "next/link";

export default function MovieCard({ episode_id, title, image, id}){
    // /${episode_id}
    return (<div className="group items-center flex flex-col p1.5">
        <Link href={`/film/${id}`}> 
            <img 
            className='rounded-2xl sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300' 
            src={image}
            alt="Film poster" 
            height={200} 
            width={300}
            style={{margin: "0 auto"}}
            />
            <h1 className='text-center text-2xl md:text-3xl lg:text-2xl font-medium'>{title}</h1>
            <h3 className='text-center text-lg md:text-xl'>EPISODE <span className='text-amber-300'>{episode_id}</span></h3>
        </Link>
    </div>)
}