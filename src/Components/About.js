import React from 'react'
import '../App.css'
import image from '../Assets/Images/About-picture.jpg'

export default function About() {
    const styles = {
        iconContainer: {
            color: 'white',
            fontSize: '30px'
        },
        mainContainer: { height: '90vh', marginTop: '10vh' },
        colorText: { color: '#be50f4', display: 'inline' },
        inlineText: { display: 'inline' }
    }
    return (
        <div className="container">
            <div className="row flex-wrap-reverse">
                <div className="col-lg-8">
                    <div className="d-flex mx-auto flex-column align-items-center justify-content-center" style={styles.mainContainer}>
                        <div className='container'>
                            <div>
                                <h1 style={styles.colorText}>
                                    All About Me
                                </h1>
                                <div className='my-4 text-wrap'>
                                    <h5 style={styles.inlineText}>This is </h5>
                                    <h5 style={styles.colorText}>Mustafa Shaikh</h5>
                                    <h5 style={styles.inlineText}> from </h5>
                                    <h5 style={styles.colorText}>Pakistan-Asia.</h5>
                                    <h5 style={styles.inlineText}> I currently enrolled in BS-Software Engineering program under</h5>
                                    <h5 style={styles.colorText}> University of Sindh, Jamshoro.</h5>
                                    <div className='pt-3'>
                                        <h5 style={styles.inlineText}>
                                            I possess a strong foundation in building
                                        </h5>
                                        <h5 style={styles.colorText}> software solutions </h5>
                                        <h5 style={styles.inlineText} >for both</h5>
                                        <h5 style={styles.colorText} > web</h5>
                                        <h5 style={styles.inlineText} > and</h5>
                                        <h5 style={styles.colorText} > mobile </h5>
                                        <h5 style={styles.inlineText} > platforms. I have acquired specialized knowledge and practical skills in these areas.
                                        </h5>
                                    </div>
                                </div>
                                <h4 className='text-center' style={styles.inlineText}>Apart from </h4>
                                <h4 className='text-center' style={styles.colorText}>coding</h4>
                                <h4 className='text-center' style={styles.inlineText}>. Some other activities I love to do.</h4>
                                <div className='pt-3'>
                                    <ul>
                                        <li><h5>Gaming</h5></li>
                                        <li><h5>Cricket</h5></li>
                                        <li><h5>Socializing</h5></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex mx-auto flex-column align-items-center justify-content-center" style={styles.mainContainer}>
                        <img className='mt-5' src={image} alt='my_picture' width={'70%'} height={'auto'} style={{ borderRadius: '8px', outlineWidth: '3px', outlineColor: '#be50f4', outlineStyle: 'solid' }}/>
                    </div>
                </div>
            </div >
        </div >
    )
}
