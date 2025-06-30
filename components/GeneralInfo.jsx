
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import '../styles/GeneralInfo.css';

function GeneralInfo ({name, setName, email, setEmail, phone, setPhone}) {
    return (
        <div className='generalInfo'>
            <h3>General Information</h3>
            <div className="input-group">
                <CgProfile className="input-icon"/>
                <input type='text' placeholder="Name" value={name} onChange={(e => setName(e.target.value))} />
            </div>
            <div className="input-group">
                <MdOutlineEmail className="input-icon"/>
                <input type='text' placeholder="Email" value={email} onChange={(e => setEmail(e.target.value))} />
            </div>
            <div className="input-group">
                <FaPhoneAlt className="input-icon"/>
                <input type='text' placeholder="Phone number" value={phone} onChange={(e => setPhone(e.target.value))} />
            </div>
        </div>
    )
}

export default GeneralInfo;