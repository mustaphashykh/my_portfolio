import React from 'react'
import '../App.css'

export default function ContactCard(props) {
    const { icon, heading, info } = props
    const styles = {
        mainContainer: { height: '100vh' },
        colorText: { color: '#be50f4' },
        icon: {
            paddingRight: '5px',
            color: '#be50f4'
        }
    }
    return (
        <div className="card border-style" style={{ height: '175px', border: 'none', backgroundColor: '#1e1e1e' }}>
            <div style={{ backgroundColor: 'rgb(60 60 60)', height: '18px', width: '100%', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%', width: '100%', backgroundColor: 'inherit' }}>
                <div className='d-flex'>
                    <i className={`${icon} fs-3`} style={styles.icon} aria-hidden="true"></i>
                    <h4>{heading}</h4>
                </div>
            </div>
            <p className='text-wrap mx-1 text-center'>
                {info}
            </p>
            <div style={{ backgroundColor: 'rgb(60 60 60)', height: '18px', width: '100%', borderBottomLeftRadius: 'inherit', borderBottomRightRadius: 'inherit' }}>
            </div>
        </div >
    )
}
