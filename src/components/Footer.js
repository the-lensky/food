import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer green lighten-1">
            <div className="footer-copyright green lighten-1 center">
                <div className="container">
                    © {new Date().getFullYear()} Have a nice day!😼
                </div>
            </div>
        </footer>
    )
}

export {Footer}
