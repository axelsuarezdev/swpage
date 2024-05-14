import React from 'react';
// import Link from 'next/link';

export default function MoviePage({params}){
    return (
        <div>
            <h1>Hello {params.id}!</h1>
        </div>
    )
}