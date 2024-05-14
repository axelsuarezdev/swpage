import Link from "next/link";

export function MenuIcon({title, address, Icon}) {
    return (
      <Link href={address} className="hover:text-amber-300 hover:scale-110 ">
        <Icon className="text-2xl sm:hidden hover:text-amber-300"/>
        <p className="uppercase hidden sm:inline text-sm text-white hover:text-amber-300">{title}</p>
      </Link>
    )
  }