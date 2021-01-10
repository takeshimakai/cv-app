import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';

const Preview = (props) => {
    const { profile, experience, education, handleEditBtnClick } = props;

    return (
        <div id='preview'>
            <Profile profile={profile} />
            <h3>Work Experience</h3>
            {experience.map((obj) => {
                return (
                    <Experience key={obj.id} experience={obj} />
                )
            })}
            <h3>Education</h3>
            {education.map((obj) => {
                return (
                    <Education key={obj.id} education={obj} />
                )
            })}
            <button onClick={handleEditBtnClick}>Edit</button>
        </div>
    )
}

export default Preview;
