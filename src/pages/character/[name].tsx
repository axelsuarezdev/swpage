import React from 'react';
import Layout from '../../components/layout';
import { GetStaticProps } from 'next';
// import Link from 'next/link';

export default function Character(){
    return (
        <Layout>
            <h1>Hello Character!</h1>
        </Layout>

    )
}
// export const getStaticProps: GetStaticProps = async (context)=>{
//     const {params} = context;
//     const {name} = params;
//     let character;
//     return {
//         props: {
//             character,
           
//         },
//     };
// };