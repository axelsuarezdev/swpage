import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

import Link from "next/link";

export function Footer(){
    return <div className='text-white flex flex-col justify-center items-center' style={{height: "20vh"}}>
        <div className="gap-3 flex flex-col">
            <Link className="hover:text-amber-300 flex flex-row items-center gap-3" href={"https://github.com/axelsuarezdev"}>
                <FaGithub style={{height: "24px", width: "24px"}}/> @axelsuarezdev
            </Link>
            <Link className="hover:text-amber-300 flex flex-row items-center gap-3" href={"https://www.linkedin.com/in/axeljuliansuarez/"}>
                <FaLinkedin style={{height: "24px", width: "24px"}} />@axeljuliansuarez
            </Link>
            <div className="flex flex-row items-center gap-3 cursor-default">
            <RiNextjsFill style={{height: "24px", width: "24px"}} /> Created with Nextjs
            </div>
        </div>
    </div>
}