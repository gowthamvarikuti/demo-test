import * as React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">

                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/list" className="nav-link">
                            List Data
                        </Link>
                    </li>

                </div>
            </nav>
        );
    }
}
