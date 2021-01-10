const EducationInput = (props) => {
    const { educationInput, handleEducationChange } = props;

    return (
        <div>
            <div className='input-box'>
                <label>Institution name:</label>
                <input
                    data-id={educationInput.id}
                    name='institution'
                    type='text'
                    value={educationInput['institution']}
                    onChange={handleEducationChange}
                />
            </div>
            <div className='input-box'>
                <label>Discipline:</label>
                <input
                    data-id={educationInput.id}
                    name='discipline'
                    type='text'
                    value={educationInput['discipline']}
                    onChange={handleEducationChange}
                />
            </div>
            <div className='input-box'>
                <label>Graduation year:</label>
                <input
                    data-id={educationInput.id}
                    name='graduationYear'
                    type='date'
                    value={educationInput['graduationYear']}
                    onChange={handleEducationChange}
                />
            </div>
        </div>
    )
}

export default EducationInput;
