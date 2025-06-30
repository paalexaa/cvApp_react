function CVDisplay ({data, onEdit}) {
  const {
    name,
    email,
    phone,
    schoolName,
    titleOfStudy,
    companyName,
    positionTitle,
    responsibilities,
    date
  } = data;

  return (
      <div className='cvDisplay'>
        <h2>General Information</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone number:</strong> {phone}</p>

        <h2>Educational experience</h2>
        <p><strong>School name:</strong> {schoolName}</p>
        <p><strong>Title of study:</strong> {titleOfStudy}</p>

        <h2>Practical experience</h2>
        <p><strong>Company name:</strong> {companyName}</p>
        <p><strong>Position title:</strong> {positionTitle}</p>
        <p><strong>Main responsibilities:</strong> {responsibilities}</p>
        <p><strong>Date worked:</strong> {date}</p>

        <button type='button' onClick={onEdit}>Edit</button>
      </div>
  );
}

export default CVDisplay;