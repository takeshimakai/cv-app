const EducationInput = (props) => {
    const { educationInput, handleEducationChange } = props;

    return (
        <div className='input-section'>
            <label>Institution name:
                <input
                    data-id={educationInput.id}
                    name='institution'
                    type='text'
                    value={educationInput['institution']}
                    onChange={handleEducationChange}
                />
            </label>
            <label>Discipline:
                <input
                    data-id={educationInput.id}
                    name='discipline'
                    type='text'
                    value={educationInput['discipline']}
                    onChange={handleEducationChange}
                />
            </label>
            <label>Graduation year:
                <input
                    data-id={educationInput.id}
                    name='graduationYear'
                    type='date'
                    value={educationInput['graduationYear']}
                    onChange={handleEducationChange}
                />
            </label>
        </div>
    )
}

export default EducationInput;
