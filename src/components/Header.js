import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                    React Food
                </Link>
                <ul id='nav-mobile' className='right'>
                    <li>
                        <a
                            href='https://github.com/the-lensky/food'
                            target='_blank'
                            rel="noreferrer">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export {Header}
