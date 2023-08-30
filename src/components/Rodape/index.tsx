import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTelegram
} from 'react-icons/fa'

const NavBar = () => {
  return (
    <footer className="mt-10 bg-blue-700 text-white flex justify-evenly flex-wrap items-center">
      <div>
        <p></p>
      </div>
      <div>
        <ul className="p-0">
          <li className="inline-block mx-2">
            <FaFacebookF className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-700 transition duration-500 transform hover:bg-blue-700 hover:text-white" />
          </li>
          <li className="inline-block mx-2">
            <FaInstagram className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-700 transition duration-500 transform hover:bg-blue-700 hover:text-white" />
          </li>
          <li className="inline-block mx-2">
            <FaTwitter className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-700 transition duration-500 transform hover:bg-blue-700 hover:text-white" />
          </li>
          <li className="inline-block mx-2">
            <FaLinkedin className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-700 transition duration-500 transform hover:bg-blue-700 hover:text-white" />
          </li>
          <li className="inline-block mx-2">
            <FaTelegram className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-700 transition duration-500 transform hover:bg-blue-700 hover:text-white" />
          </li>
        </ul>
      </div>
      <div></div>
    </footer>
  )
}
export default NavBar
