import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';

const Preview = (props) => {
    const { profile, experience, education, handleEditBtnClick } = props;

    return (
        <div>
            <Profile profile={profile} />
            {experience.map((obj) => {
                return (
                    <Experience key={obj.id} experience={obj} />
                )
            })}
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
