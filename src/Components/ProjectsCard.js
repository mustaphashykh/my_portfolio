import React from 'react'
import image from '../Assets/Images/main-background.jpg'

export default function ProjectsCard() {
    return (
        <div className="card border-style" style={{ width: "100%", backgroundColor: '#1e1e1e' }}>
            <div style={{ backgroundColor: 'rgb(60 60 60)', height: '18px', width: '100%', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}>
            </div>
            < img src={image} className="card-img-top" alt="my_project" />
            <div className="card-body">
                <h5 className="card-title" style={{ color: 'white' }}>project</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" style={{ backgroundColor: '#be50f4', color: 'white', borderRadius: '50px' }} className="btn border-transition">Go somewhere</a>
            </div>
            <div style={{ backgroundColor: 'rgb(60 60 60)', height: '18px', width: '100%', borderBottomLeftRadius: 'inherit', borderBottomRightRadius: 'inherit' }}>
            </div>
        </div>
    )
}
