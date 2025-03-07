import { Link } from "react-router";
import { Button } from "./ui/button";

function Header() {
  return(
    <header className="flex justify-between bg-gray-800 text-white p-4">
      <h1 className="text-xl">My super App!</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Button asChild variant="destructive">
              <Link to='/home'>Home</Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link to='/about'>About</Link>
            </Button>
          </li>
        </ul> 
      </nav>
    </header>
  )
}

export default Header;