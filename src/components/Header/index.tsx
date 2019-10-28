import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Header(): JSX.Element {
    return (
        <header>
            <div>
                <nav>
                
                    <ul>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/addusers">Add Users</Link></li>
                        <li><Link to="/viewusers">View Users</Link></li>
                    </ul>
              
                </nav>

            </div>
        </header>
    )
}
