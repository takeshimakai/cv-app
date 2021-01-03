const ExperienceInput = (props) => {
    const { inputValue, handleChange } = props;

    return (
        <div className='input-section'>
            <label>Company name:
                <input id='company' type='text' value={inputValue['company']} onChange={handleChange} />
            </label>
            <label>Position:
                <input id='position' type='text' value={inputValue['position']} onChange={handleChange} />
            </label>
            <label>Start date:
                <input id='startDate' type='date' value={inputValue['startDate']} onChange={handleChange} />
            </label>
            <label>End date:
                <input id='endDate' type='date' value={inputValue['endDate']} onChange={handleChange} />
            </label>
            <label>Work description:
                <textarea id='description' value={inputValue['endDate']} onChange={handleChange} />
            </label>
        </div>
    )
}

export default ExperienceInput;
