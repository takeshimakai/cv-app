const ExperienceInput = (props) => {
    const { experienceInput, handleExperienceChange } = props;

    return (
        <div className='input-section'>
            <label>Company name:
                <input
                    data-id={experienceInput.id}
                    name='company'
                    type='text'
                    value={experienceInput['company']}
                    onChange={handleExperienceChange}
                />
            </label>
            <label>Position:
                <input
                    data-id={experienceInput.id}
                    name='position'
                    type='text'
                    value={experienceInput['position']}
                    onChange={handleExperienceChange}
                />
            </label>
            <label>Start date:
                <input
                    data-id={experienceInput.id}
                    name='startDate'
                    type='date'
                    value={experienceInput['startDate']}
                    onChange={handleExperienceChange}
                />
            </label>
            <label>End date:
                <input
                    data-id={experienceInput.id}
                    name='endDate'
                    type='date'
                    value={experienceInput['endDate']}
                    onChange={handleExperienceChange}
                />
            </label>
            <label>Work description:
                <textarea
                    data-id={experienceInput.id}
                    name='description'
                    value={experienceInput['description']}
                    onChange={handleExperienceChange}
                />
            </label>
        </div>
    )
}

export default ExperienceInput;
