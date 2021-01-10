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
        handleSubmit
    } = props;

    return (
        <form onSubmit={handleSubmit} >
            <ProfileInput
                profileInput={profileInput}
                handleProfileChange={handleProfileChange}
            />
            <h3>Work Experience</h3>
            {experienceInput.map((obj) => {
                return (
                    <ExperienceInput
                        key={obj.id}
                        experienceInput={obj}
                        handleExperienceChange={handleExperienceChange}
                    />
                )
            })}
            <h3>Education</h3>
            {educationInput.map((obj) => {
                return (
                    <EducationInput
                        key={obj.id}
                        educationInput={obj}
                        handleEducationChange={handleEducationChange}
                    />
                )
            })}
            <button type='submit'>Save</button>
        </form>
    )
}

export default Form;
