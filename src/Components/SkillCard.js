import React from 'react'
import '../App.css'

export default function SkillCard(props) {
    const { skill, icon } = props
    return (
        <div className="card border-style" style={{ height: '175px', border: 'none', backgroundColor: '#1e1e1e' }}>
            <div style={{ backgroundColor: 'rgb(60 60 60)', height: '18px', width: '100%', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%', width: '100%', backgroundColor: 'inherit' }}>
                <i className={`${icon} fs-1 py-3`} style={{ color: '#be50f4' }} aria-hidden="true"></i>
                <h5>
                    {skill}
                </h5>
            </div>
            <div style={{ backgroundColor: '#317ac6', height: '10px', width: '100%', borderBottomLeftRadius: 'inherit', borderBottomRightRadius: 'inherit' }}>
            </div>
        </div >
    )
}
