import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const changeHandler = () => {
        setOpen(!open)
    }
    const styles = {
        icon: {
            paddingRight: '7px'
        }
    }
    return (
        <nav className="navbar navbar-expand-lg nav-bar-background
         fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand element" to={"/"} style={{ color: 'white', paddingLeft: '2%' }}>
                    <i className="fa-solid fa-code-branch fs-1" aria-hidden="true"></i></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} style={{ borderColor: '#be50f4', fontSize: '20px' }} aria-hidden="true" onClick={changeHandler}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav inner-elements text-center">
                        <li className="nav-item">
                            <Link style={{ color: 'white' }} className="nav-link element" aria-current="page" to={'/'}>
                                <i className="fa-solid fa-house fs-5" style={styles.icon}></i>Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ color: 'white' }} className="nav-link element" to={'/about_me'}>
                                <i className="fa-solid fa-user fs-5" style={styles.icon} aria-hidden="true"></i>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ color: 'white' }} className="nav-link element" to={'/my_skills '}>
                                <i className="fa-solid fa-code fs-5" style={styles.icon} aria-hidden="true"></i>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ color: 'white' }} className="nav-link element" to={'/my_projects'}>
                                <i className="fa-solid fa-diagram-project fs-5" style={styles.icon} aria-hidden="true"></i>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ color: 'white' }} className="nav-link element" to={'/contact_me'}>
                                <i className="fa-solid fa-phone fs-5" style={styles.icon} aria-hidden="true"></i>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div >
        </nav >
    )
}
