const Profile = (props) => {
    const { profile } = props;

    const renderedInfo = [];
    
    Object.keys(profile).forEach((key) => {
        switch (true) {
            case (key === 'firstName'):
                renderedInfo.push(<h2 key={key} id='name-preview'>{profile.firstName} {profile.lastName}</h2>);
                break;
            case (key === 'phoneNum' || key === 'email' || key === 'address' || key === 'summary'):
                renderedInfo.push(<p key={key} id={`${key}-preview`}>{profile[key]}</p>);
                break;
            default:
                break;
        }
    })

    return (
        <div className='preview-section' id='profile-section'>
            {renderedInfo}
        </div>
    )
}

export default Profile;
