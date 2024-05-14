import Link from "next/link";

export function MenuIcon({title, address, Icon}) {
    return (
      <Link href={address} className="hover:text-amber-300 text-white">
        <Icon className="text-2xl sm:hidden"/>
        <p className="uppercase hidden sm:inline text-sm text-white hover:text-amber-300">{title}</p>
      </Link>
    )
  }