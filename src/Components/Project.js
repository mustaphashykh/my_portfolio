import React from 'react'
import ProjectsCard from './ProjectsCard'

export default function Project() {
    const styles = {
        mainContainer: { height: '90vh', marginTop: '10vh' },
        colorText: { color: '#be50f4' }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="mx-auto" style={styles.mainContainer}>
                        <div className='text-center'>
                            <h1 className='py-4' style={styles.colorText}>My Projects</h1>
                        </div>
                        <div className='row pb-5 mx-auto'>
                            <div className='col-lg-4 mx-auto pt-3'><ProjectsCard /></div>
                            <div className='col-lg-4 mx-auto pt-3'><ProjectsCard /></div>
                            <div className='col-lg-4 mx-auto pt-3'><ProjectsCard /></div>
                            <div className='col-lg-4 mx-auto pt-3'><ProjectsCard /></div>
                            <div className='col-lg-4 mx-auto pt-3'><ProjectsCard /></div>
                            <div className='col-lg-4 mx-auto pt-3'><ProjectsCard /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
