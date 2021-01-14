import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';

const Preview = (props) => {
    const { profile, experience, education, handleEditBtnClick } = props;

    return (
        <div className='outer'>
            <button id='edit-btn' onClick={handleEditBtnClick}>Edit</button>
            <div className='main'>
                <div className='preview-section'>
                    <Profile profile={profile} />
                </div>
                <div className='separation' />
                <div className='preview-section'>
                    <h3>Work Experience</h3>
                    {experience.map((obj) => {
                        return (
                            <Experience key={obj.id} experience={obj} />
                        )
                    })}
                </div>
                <div className='separation' />
                <div className='preview-section'>
                    <h3>Education</h3>
                    {education.map((obj) => {
                        return (
                            <Education key={obj.id} education={obj} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Preview;
