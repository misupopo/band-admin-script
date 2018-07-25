import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="d-flex">
                    <div className="logoBox mr-auto">
                        <Link to="/" className="logo">
                            {this.props.appName.toLowerCase()}
                        </Link>
                    </div>
                    <div className="headerNavBox">
                        <nav>
                            <ul>
                                <li></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
