
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import '../styles/EducationInfo.css';

function EducationInfo ({schoolName, setSchoolName, titleOfStudy, setTitleOfStudy, dateOfStudy, setDateOfStudy}) {
    return (
        <div className='educationalExperience'>
            <h3>Educational experience</h3>
            <div className="input-group"> 
                <FaSchool className="input-icon"/>
                <input type='text' placeholder="School name" value={schoolName} onChange={(e => setSchoolName(e.target.value))} />
            </div>
            <div className="input-group">
                <IoSchool className="input-icon"/>
                <input type='text' placeholder="Title of study" list="titleOfStudy-suggestions" value={titleOfStudy} onChange={(e => setTitleOfStudy(e.target.value))} />
                <datalist id="titleOfStudy-suggestions">
                    <option value="Bachelor" />
                    <option value="Master/Magister" />
                    <option value="Engineer" />
                    <option value="Doctor" />
                </datalist>
            </div>
        </div>
    )
}

export default EducationInfo;