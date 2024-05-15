import React, { useState } from "react"
import Link from "next/link";
import { MenuIcon} from "./ui/menuIcon";
import { RiFilmFill } from "react-icons/ri";
import { FaPerson } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa";


export function Header(){
    return <header className="flex justify-between items-center p-3 px-8 min-h-14" style={{height: "15vh"}}>
        <Link href="/">
            <h1 className="text-xl hover:text-amber-300 text-white">STAR WARS</h1>
        </Link>
        <div className="flex gap-4">
            <MenuIcon Icon={FaPerson} title={"CHARACTERS"} address="/characters/1"/>
            <MenuIcon Icon={RiFilmFill} title={"FILMS"} address="/films"/>
        </div>
  </header>
}