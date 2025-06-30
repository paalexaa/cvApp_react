import { useState } from 'react'
import './App.css'
import GeneralInfo from '../components/GeneralInfo';
import EducationInfo from '../components/EducationInfo';
import ExperienceInfo from '../components/ExperienceInfo';
import CVDisplay from '../components/CVDisplay';

function App() {
  const [isEditing, setIsEditing] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');

  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [date, setDate] = useState('');

  const userData = {
    name, email, phone,
    schoolName, titleOfStudy,
    companyName, positionTitle, responsibilities, date
  };

  function handleSubmit(e) {
    e.preventDefault(); 
    setIsEditing(false);
    alert('Data was successfully saved!'); 
  }

  function handleEdit() {
    setIsEditing(true); 
  }

  return (
    <div className='App'>
      <h1>CV Generator</h1>
      <p id='textUnderCV'>Create your professional resume in seconds</p>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <GeneralInfo {...{name, setName, email, setEmail, phone, setPhone}} />
          <EducationInfo {...{schoolName, setSchoolName, titleOfStudy, setTitleOfStudy}} />         
          <ExperienceInfo {...{companyName, setCompanyName, positionTitle, setPositionTitle, responsibilities, setResponsibilities, date, setDate}} />
          <button type='submit'>Submit</button>
        </form>
        ) : (
          <CVDisplay data={userData} onEdit={handleEdit} />
      )}
    </div>
  );
}

export default App
