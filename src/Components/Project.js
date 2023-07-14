import React from 'react'
import ProjectsCard from './ProjectsCard'

export default function Project() {
    const styles = {
        mainContainer: { height: '90vh', marginTop: '10vh' },
        colorText: { color: '#be50f4' }
    }
    const myProjects = [
        {
            id: '1',
            projectName: 'NEWS App',
            projectURL: 'https://github.com/mustaphashykh/NEWS-App',
            projectDescription: 'The NEWS App is react base utility using NEWS API for NEWS material. It is designed for those having fond of being up to date by reading authenticate NEWS.'
        }, {
            id: '2',
            projectName: 'iNoteBook',
            projectURL: 'https://github.com/mustaphashykh/inotebook',
            projectDescription: 'The iNteBook App is full stack utility. It is designed for those having fond of taking important notes down.'
        },
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="mx-auto" style={styles.mainContainer}>
                        <div className='text-center'>
                            <h1 className='py-4' style={styles.colorText}>My Projects</h1>
                        </div>
                        <div className='row pb-5 mx-auto'>
                            {
                                myProjects.map((items) => {
                                    return (
                                        <div key={items.id} className='col-lg-4 mx-auto pt-3'><ProjectsCard name={items.projectName} URL={items.projectURL} des={items.projectDescription} /></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
