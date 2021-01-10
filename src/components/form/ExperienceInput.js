const ExperienceInput = (props) => {
    const { experienceInput, handleExperienceChange } = props;

    return (
        <div>
            <div className='input-box'>
                <label>Company name:</label>
                <input
                    data-id={experienceInput.id}
                    name='company'
                    type='text'
                    value={experienceInput['company']}
                    onChange={handleExperienceChange}
                />
            </div>
            <div className='input-box'>
            <label>Position:</label>
            <input
                data-id={experienceInput.id}
                name='position'
                type='text'
                value={experienceInput['position']}
                onChange={handleExperienceChange}
            />
            </div>
            <div className='input-box'>
                <label>Start date:</label>
                <input
                    data-id={experienceInput.id}
                    name='startDate'
                    type='date'
                    value={experienceInput['startDate']}
                    onChange={handleExperienceChange}
                />
            </div>
            <div className='input-box'>
                <label>End date:</label>
                <input
                    data-id={experienceInput.id}
                    name='endDate'
                    type='date'
                    value={experienceInput['endDate']}
                    onChange={handleExperienceChange}
                />
            </div>
            <div className='input-box'>
                <label>Work description:</label>
                <textarea
                    data-id={experienceInput.id}
                    name='description'
                    value={experienceInput['description']}
                    onChange={handleExperienceChange}
                />
            </div>
        </div>
    )
}

export default ExperienceInput;
