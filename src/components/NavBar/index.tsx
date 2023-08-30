import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="text-center">
      <ul className="p-0">
        <li className="inline-block mx-2">
          <Link href="/"> Home </Link>
        </li>
        <li className="inline-block mx-2">
          <Link href="/restaurantes"> Restaurantes </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
