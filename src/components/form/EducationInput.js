const EducationInput = (props) => {
    const { inputValue, handleChange } = props;

    return (
        <div className='input-section'>
            <label>Institution name:
                <input id='institution' type='text' value={inputValue['institution']} onChange={handleChange} />
            </label>
            <label>Discipline:
                <input id='discipline' type='text' value={inputValue['discipline']} onChange={handleChange} />
            </label>
            <label>Graduation year:
                <input id='graduationYear' type='date' value={inputValue['graduationYear']} onChange={handleChange} />
            </label>
        </div>
    )
}

export default EducationInput;
