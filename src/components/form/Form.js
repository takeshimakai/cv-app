import ProfileInput from './ProfileInput';
import ExperienceInput from './ExperienceInput';
import EducationInput from './EducationInput';

const Form = (props) => {
    const {
        profileInput,
        experienceInput,
        educationInput,
        handleProfileChange,
        handleExperienceChange,
        handleEducationChange,
        handleSubmit,
        addExperience,
        addEducation,
        removeExperience,
        removeEducation
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-section'>
                <ProfileInput
                    profileInput={profileInput}
                    handleProfileChange={handleProfileChange}
                />
            </div>
            <div className='separation' />
            <div className='input-section'>
                <h3>Work Experience</h3>
                {experienceInput.map((obj) => {
                    return (
                        <div key={obj.id} className='experience-input'>
                            <ExperienceInput
                                experienceInput={obj}
                                handleExperienceChange={handleExperienceChange}
                            />
                            {experienceInput.length > 1 &&
                                <button type='button' data-id={obj.id} onClick={removeExperience}>Remove Experience</button>
                            }
                        </div>
                    )
                })}
                <button type='button' onClick={addExperience}>Add Experience</button>
            </div>
            <div className='separation' />
            <div className='input-section'>
                <h3>Education</h3>
                {educationInput.map((obj) => {
                    return (
                        <div key={obj.id} className='education-input'>
                            <EducationInput
                                educationInput={obj}
                                handleEducationChange={handleEducationChange}
                            />
                            {educationInput.length > 1 &&
                                <button type='button' data-id={obj.id} onClick={removeEducation}>Remove Education</button>
                            }
                        </div>
                    )
                })}
                <button type='button' onClick={addEducation}>Add Education</button>
            </div>
            <button type='submit'>Save</button>
        </form>
    )
}

export default Form;
