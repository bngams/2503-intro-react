import { mainNavItems } from "@/routes";
import { Link } from "react-router";

function Header() {
    return (
      <header>
        <nav>
            <ul>
                {mainNavItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
      </header>
    )
}

export default Header;