import React from 'react'
import '../App.css'
import TypingEffect from './TypingEffect'
import profile from '../Assets/Images/profile-picture.jpg'
import resume from '../Assets/Document/resume.pdf'

export default function Home() {
    const styles = {
        iconContainer: {
            color: 'white',
            fontSize: '30px'
        },
        mainContainer: { height: '90vh', marginTop: '10vh' },
    }
    return (
        <div className="container">
            <div className="row flex-wrap-reverse">
                <div className="col-lg-8 d-flex mx-auto flex-column align-items-center justify-content-center" style={styles.mainContainer}>
                    <div>
                        <div className='text-center'>
                            <h5 style={{ paddingRight: '5px', color: '#be50f4', display: 'inline' }}>Hello,</h5>
                            <h5 style={{ display: 'inline' }} > I'm Mustafa Shaikh</h5>
                        </div>
                        <div className='text-center'>
                            <TypingEffect />
                        </div>
                        <div className='text-center'>
                            <h5 style={{ paddingRight: '20px', paddingLeft: '20px', }}>I'm a Software Engineer based in Pakistan-Asia, having expertise in Web app and Mobile App development.</h5>
                        </div>
                        <div className='d-flex justify-content-center my-4' style={styles.iconContainer}>
                            <a href="https://www.instagram.com/mustaphahahahaha/" target='_blank'>
                                <i className="fa-brands fa-instagram icons" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/mustaphashykh" target='_blank'>
                                <i className="fa-brands fa-github icons" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mustafa-shaikh-mern-stack-developer/" target='_blank'>
                                <i className="fa-brands fa-linkedin icons" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex mx-auto flex-column align-items-center justify-content-center" style={styles.mainContainer}>
                    <img src={profile} alt='my_profile_picture' width={'70%'} height={'auto'} style={{ borderRadius: '50%', outlineWidth: '8px', outlineColor: '#be50f4', outlineStyle: 'solid' }} />
                    <a href={resume} download="resume.pdf">
                        <button type="button" style={{ backgroundColor: '#be50f4', color: 'white', borderRadius: '50px' }} className="btn btn-lg mt-5 border-transition">Download my CV</button>
                    </a>
                </div>
            </div>
        </div >
    )
}
