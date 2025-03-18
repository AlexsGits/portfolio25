
function Navbar() {

    return (
      <>
        <nav className="m-8 flex flex-row justify-between opacity-100">
            <h2 className="text-lg font-semibold cursor-pointer">ALEXANDER J.</h2>
            <ul className="flex flex-row justify-evenly w-3xs text-base">
                <li className="hover:text-sky-400 cursor-pointer">Projects</li>
                <li className="hover:text-sky-400 cursor-pointer">Contact</li>
            </ul>
        </nav>
      </>
    )
  }
  
  export default Navbar