import React from 'react'
import SkillCard from './SkillCard'

export default function Skills() {
    const mySkills = [
        {
            id: '1',
            skill: 'HTML',
            icon: 'fa fa-html5'
        }, {
            id: '2',
            skill: 'CSS',
            icon: 'fa fa-css3'
        }, {
            id: '3',
            skill: 'Bootstrape',
            icon: 'fa-brands fa-bootstrap'
        }, {
            id: '4',
            skill: 'JavaScript',
            icon: 'fa-brands fa-js'
        }, {
            id: '13',
            skill: 'Git/Github',
            icon: 'fa-brands fa-github'
        }, {
            id: '5',
            skill: 'React js',
            icon: 'fa-brands fa-react'
        }, {
            id: '12',
            skill: 'React Native',
            icon: 'fa-brands fa-react'
        }, {
            id: '6',
            skill: 'Node js',
            icon: 'fa-brands fa-node'
        }, {
            id: '7',
            skill: 'Express js',
            icon: 'fa-brands fa-node-js'
        }, {
            id: '16',
            skill: 'Server Design & Dev',
            icon: 'fa-solid fa-server'
        }, {
            id: '8',
            skill: 'API Development',
            icon: 'fa-solid fa-code'
        }, {
            id: '9',
            skill: 'MongoDB',
            icon: 'fa-solid fa-database'
        }, {
            id: '10',
            skill: 'mySql',
            icon: 'fa-solid fa-database'
        }, {
            id: '11',
            skill: 'DataBase Design',
            icon: 'fa-solid fa-folder-tree'
        }, {
            id: '15',
            skill: 'DS & Algorithms',
            icon: 'fa-solid fa-cubes'
        }, {
            id: '14',
            skill: 'Problem Soving',
            icon: 'fa-solid fa-triangle-exclamation'
        },
    ]
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
                            <h1 className='py-4' style={styles.colorText}>My Skill Set</h1>
                        </div>
                        <div className='row pb-5 mx-auto'>
                            {
                                mySkills.map((items) => {
                                    return (<div key={items.id} className='col-lg-3 mx-auto pt-3'>
                                        <SkillCard skill={items.skill} icon={items.icon} />
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
