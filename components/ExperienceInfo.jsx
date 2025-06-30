import { MdWork } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import '../styles/ExperienceInfo.css';

function ExperienceInfo ({companyName, setCompanyName, positionTitle, setPositionTitle, responsibilities, setResponsibilities, date, setDate}) {
    return (
        <div className='practicalExperience'>
            <h3>Practical  experience</h3>
            <div className="input-group">
                <MdWork className="input-icon"/>
                <input type='text' placeholder="Company name" value={companyName} onChange={(e => setCompanyName(e.target.value))} />
            </div>
            <div className="input-group">
                <IoIosMenu className="input-icon"/>
                <input type='text' placeholder="Position title" value={positionTitle} onChange={(e => setPositionTitle(e.target.value))} />
            </div>
            <div className="input-group">
                <IoIosMenu className="input-icon"/>
                <input type='text' placeholder="Main responsibilities" value={responsibilities} onChange={(e => setResponsibilities(e.target.value))} />
            </div>
            <div className="input-group">
                <CiCalendarDate className="input-icon"/>
                <input type='text' placeholder="Date" value={date} onChange={(e => setDate(e.target.value))} />
            </div>
        </div>
    )
}

export default ExperienceInfo;