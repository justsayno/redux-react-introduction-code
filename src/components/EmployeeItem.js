// PropTypes
import React, { PropTypes } from 'react'
import { Employee } from '../constants/PropTypes'

const EmployeeItem = ({employee: {firstName, lastName, role, team, keySkills, biography, recentProjects}) =>(
    <div>
        <div className="col s12 m4">
                <div className="row">
                    <div className="profile">
                        <div className="col s12 m6 profile-picture">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="col s12 m6 profile-details">
                            <h5 className="profile-name">{firstName} {lastName}</h5>
                            <label>Role</label>
                            <span className="profile-role">{role}</span>
                            <label>Team</label>
                            <span className="profile-team">{team}</span>
                        </div>
                    </div>           
                </div>
                <div className="row">
                    <div className="profile">
                        <div className="col s12 m12 profile-details">
                            <h5 className="profile-name">Key Skills and Technologies</h5>
                            <ul className="collection">
                                {keySkills.map((skill) => (
                                    <li key={skill.name} className="collection-item">{skill.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>           
                </div>
        </div>
        <div className="col s12 m8">
            <h5>Biography</h5>
            <p>
                {biography}
            </p>
            <h5>Recent Projects</h5>
            <ul className="collection">
                {recentProjects.map((project) => (
                    <li key={project.name} className="collection-item">{project.name}</li>
                ))}
            </ul>
        </div>
    </div>
)

EmployeeItem.propTypes = {
    employee: PropTypes.shape(Employee)
}