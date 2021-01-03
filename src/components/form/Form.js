import ProfileInput from './ProfileInput';
import SummaryInput from './SummaryInput';
import ExperienceInput from './ExperienceInput';
import EducationInput from './EducationInput';

const Form = (props) => {
    const { inputValue, handleChange, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} >
            <ProfileInput inputValue={inputValue} handleChange={handleChange} />
            <SummaryInput inputValue={inputValue} handleChange={handleChange} />
            <h3>Work Experience</h3>
            <ExperienceInput inputValue={inputValue} handleChange={handleChange} />
            <h3>Education</h3>
            <EducationInput inputValue={inputValue} handleChange={handleChange} />
            <button type='submit'>Save</button>
        </form>
    )
}

export default Form;
