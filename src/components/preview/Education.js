const Education = (props) => {
    const { profile } = props;

    const renderedInfo = [];

    Object.keys(profile).forEach((key) => {
        switch (true) {
            case (key === 'institution'):
                renderedInfo.push(<h4 key={key}>{profile.institution}</h4>);
                break;
            case (key === 'discipline' || key === 'graduationYear'):
                renderedInfo.push(<p key={key}>{profile[key]}</p>);
                break;
            default:
                break;
        }
    })

    return (
        <div className='preview-section' id='education-section'>
            <h3>Education</h3>
            {renderedInfo}
        </div>
    )
}

export default Education;
