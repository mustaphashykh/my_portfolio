import React from 'react'
import image from '../Assets/Images/NEWS-project.gif'

export default function ProjectsCard(props) {
    const { name, URL, des } = props
    return (
        <div className="card border-style" style={{ width: "100%", backgroundColor: '#1e1e1e' }}>
            <div style={{ backgroundColor: 'rgb(60 60 60)', height: '18px', width: '100%', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}>
            </div>
            < img src={image} className="card-img-top" alt="my_project" />
            <div className="card-body">
                <h3 className="card-title" style={{ color: 'white', fontWeight: '600px' }}>{name}</h3>
                <p className="card-text">
                    {
                        des.length > 100 ? des.slice(0, 100) + '.........' : des
                    }
                </p>
                <a href={URL} style={{ backgroundColor: '#be50f4', color: 'white', borderRadius: '50px' }} className="btn border-transition">Source Code</a>
            </div>
            <div style={{ backgroundColor: 'rgb(60 60 60)', height: '18px', width: '100%', borderBottomLeftRadius: 'inherit', borderBottomRightRadius: 'inherit' }}>
            </div>
        </div>
    )
}
