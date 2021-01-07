import Profile from './Profile';
import Summary from './Summary';
import Experience from './Experience';
import Education from './Education';

const Preview = (props) => {
    const { profile, handleEditBtnClick } = props;

    return (
        <div>
            <Profile profile={profile} />
            <Summary profile={profile} />
            <Experience profile={profile} />
            <Education profile={profile} />
            <button onClick={handleEditBtnClick}>Edit</button>
        </div>
    )
}

export default Preview;
