
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
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
            <div className="input-group phone-input-wrapper">
                <PhoneInput
                    country={'sk'}
                    value={phone}
                    onChange={setPhone}
                    enableSearch
                    inputStyle={{
                        backgroundColor: '#2a2d4d',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        width: '100%',
                        paddingLeft: '44px'
                    }}
                    buttonStyle={{
                        backgroundColor: '#2a2d4d',
                        border: 'none'
                    }}
                    containerStyle={{ width: '100%' }}
                    />
                </div>
        </div>
    )
}

export default GeneralInfo;