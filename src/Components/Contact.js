import React from 'react'
import '../App.css'
import ContactCard from './ContactCard'

export default function Contact() {
    const info = [
        {
            id: '1',
            heading: 'Phone',
            icon: 'fa-solid fa-phone',
            info: '0317-2406597'
        }, {
            id: '2',
            heading: 'Mail',
            icon: 'fa-regular fa-envelope',
            info: 'mustafaahmedshaikh125@gmail.com'
        }, {
            id: '3',
            heading: 'Address',
            icon: 'fa-solid fa-location-dot',
            info: 'hyderabad Sindh, Pakistan'
        },
    ]
    const styles = {
        colorText: { color: '#be50f4' },
        icon: {
            paddingRight: '5px'
        },
        iconContainer: {
            color: 'white',
            fontSize: '30px'
        },
        mainContainer: { height: '90vh', marginTop: '10vh' },
        colorText: { color: '#be50f4', display: 'inline' },
        inlineText: { display: 'inline' },
        innerContainer: { height: '50vh' }
    }
    return (
        <div className='container' style={styles.mainContainer}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mx-auto d-flex justify-content-start align-items-center mt-4" style={styles.innerContainer}>
                        <div className='container'>
                            <h1 style={{ color: '#be50f4' }}>
                                Contact
                            </h1>
                            <h5>
                                If you have any questions or would like to discuss a project, I would love to hear from you. </h5>
                            <h5>
                                Please feel free to reach out to me
                                I strive to respond to all inquiries as soon as possible.Your message is important to me, and I look forward to connecting with you.
                            </h5>
                        </div>
                    </div>
                    <div className='row mb-4'>
                        {
                            info.map((items) => {
                                return (
                                    <div key={items.id} className='col-lg-3 mt-3 mx-auto'>
                                        <ContactCard icon={items.icon} heading={items.heading} info={items.info} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>




        // <div className="container">
        //     <div className="row">
        //         <div className="col-lg-12">
        //             <div className="mx-auto d-flex justify-content-start align-items-center" style={styles.mainContainer}>
        //                 <div className='container'>
        //                     <h1 style={{ color: '#be50f4' }}>
        //                         Contact
        //                     </h1>
        //                     <h5>
        //                         If you have any questions or would like to discuss a project, I would love to hear from you. </h5>
        //                     <h5>
        //                         Please feel free to reach out to me
        //                         I strive to respond to all inquiries as soon as possible.Your message is important to me, and I look forward to connecting with you.
        //                     </h5>
        // <div className="container">
        //     <div className="row">
        //         <div className="col-lg-12">
        //             <div className="d-flex mx-auto flex-column align-items-center justify-content-center" style={styles.mainContainer}>
        //                 <div className='container'>
        //                     <div>
        //                         <h1 style={styles.colorText}>
        //                             Contact Me
        //                         </h1>
        //                         <div className='my-4 text-wrap'>
        //                             <h5 style={styles.inlineText}>This is </h5>
        //                             <h5 style={styles.colorText}>Mustafa Shaikh</h5>
        //                             <h5 style={styles.inlineText}> from </h5>
        //                             <h5 style={styles.colorText}>Pakistan-Asia.</h5>
        //                             <h5 style={styles.inlineText}> I currently enrolled in BS-Software Engineering program under</h5>
        //                             <h5 style={styles.colorText}> University of Sindh, Jamshoro.</h5>
        //                             <div className='pt-3'>
        //                                 <h5 style={styles.inlineText}>
        //                                     I possess a strong foundation in building
        //                                 </h5>
        //                                 <h5 style={styles.colorText}> software solutions </h5>
        //                                 <h5 style={styles.inlineText} >for both</h5>
        //                                 <h5 style={styles.colorText} > web</h5>
        //                                 <h5 style={styles.inlineText} > and</h5>
        //                                 <h5 style={styles.colorText} > mobile </h5>
        //                                 <h5 style={styles.inlineText} > platforms. I have acquired specialized knowledge and practical skills in these areas.
        //                                 </h5>
        //                             </div>
        //                         </div>
        //                         <h4 className='text-center' style={styles.inlineText}>Apart from </h4>
        //                         <h4 className='text-center' style={styles.colorText}>coding</h4>
        //                         <h4 className='text-center' style={styles.inlineText}>. Some other activities I love to do.</h4>
        //                         <div className='pt-3'>
        //                             <ul>
        //                                 <li><h5>Gaming</h5></li>
        //                                 <li><h5>Cricket</h5></li>
        //                                 <li><h5>Socializing</h5></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='row my-4'>
        //                 {
        //                     info.map((items) => {
        //                         return (
        //                             <div key={items.id} className='col-lg-3 mt-4 mx-auto'>
        //                                 <ContactCard icon={items.icon} heading={items.heading} info={items.info} />
        //                             </div>
        //                         )
        //                     })
        //                 }
        //             </div>
        //         </div>
        //     </div >
        // </div >
    )
}

// const styles = {
//     iconContainer: {
//         color: 'white',
//         fontSize: '30px'
//     },
//     mainContainer: { height: '90vh', marginTop: '10vh' },
//     colorText: { color: '#be50f4', display: 'inline' },
//     inlineText: { display: 'inline' }
// }
// return (
//     <div className="container">
//         <div className="row flex-wrap-reverse">
//             <div className="col-lg-8">
//                 <div className="d-flex mx-auto flex-column align-items-center justify-content-center" style={styles.mainContainer}>
//                     <div className='container'>
//                         <div>
//                             <h1 style={styles.colorText}>
//                                 All About Me
//                             </h1>
//                             <div className='my-4 text-wrap'>
//                                 <h5 style={styles.inlineText}>This is </h5>
//                                 <h5 style={styles.colorText}>Mustafa Shaikh</h5>
//                                 <h5 style={styles.inlineText}> from </h5>
//                                 <h5 style={styles.colorText}>Pakistan-Asia.</h5>
//                                 <h5 style={styles.inlineText}> I currently enrolled in BS-Software Engineering program under</h5>
//                                 <h5 style={styles.colorText}> University of Sindh, Jamshoro.</h5>
//                                 <div className='pt-3'>
//                                     <h5 style={styles.inlineText}>
//                                         I possess a strong foundation in building
//                                     </h5>
//                                     <h5 style={styles.colorText}> software solutions </h5>
//                                     <h5 style={styles.inlineText} >for both</h5>
//                                     <h5 style={styles.colorText} > web</h5>
//                                     <h5 style={styles.inlineText} > and</h5>
//                                     <h5 style={styles.colorText} > mobile </h5>
//                                     <h5 style={styles.inlineText} > platforms. I have acquired specialized knowledge and practical skills in these areas.
//                                     </h5>
//                                 </div>
//                             </div>
//                             <h4 className='text-center' style={styles.inlineText}>Apart from </h4>
//                             <h4 className='text-center' style={styles.colorText}>coding</h4>
//                             <h4 className='text-center' style={styles.inlineText}>. Some other activities I love to do.</h4>
//                             <div className='pt-3'>
//                                 <ul>
//                                     <li><h5>Gaming</h5></li>
//                                     <li><h5>Cricket</h5></li>
//                                     <li><h5>Socializing</h5></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-lg-4">
//                 <div className="d-flex mx-auto flex-column align-items-center justify-content-center" style={styles.mainContainer}>
//                     <img className='mt-5' src={image} alt='my_picture' width={'70%'} height={'auto'} style={{ borderRadius: '8px', outlineWidth: '3px', outlineColor: '#be50f4', outlineStyle: 'solid' }} />
//                 </div>
//             </div>
//         </div >
//     </div >