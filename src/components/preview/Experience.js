const Experience = (props) => {
    const { profile } = props;

    const renderedInfo = [];

    Object.keys(profile).forEach((key) => {
        switch (true) {
            case (key === 'company'):
                renderedInfo.push(<h4 key={key}>{profile.company}</h4>);
                break;
            case (key === 'position' || key === 'description'):
                renderedInfo.push(<p key={key}>{profile[key]}</p>);
                break;
            case (key === 'startDate'):
                renderedInfo.push(<p key={key}>{profile.startDate} - {profile.endDate}</p>);
                break;
            default:
                break;
        }
    })

    return (
        <div className='preview-section' id='experience-section'>
            <h3>Work Experience</h3>
            {renderedInfo}
        </div>
    )
}

export default Experience;
