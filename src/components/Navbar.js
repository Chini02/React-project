import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <div>
            <nav className="nav">
                <Link to="/" className="title-logo">X-Service</Link>
                <ul>
                    <li>
                        <Link to="/about">Affiche</Link>
                    </li>
                    <li>
                        <Link to="/detaile">AddServeice</Link>
                    </li>
                    <li>
                        <Link to="/affiche">AddEmploye</Link>
                    </li>
                    <li>
                        <Link to="/code">Code</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}
