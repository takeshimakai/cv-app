const Education = (props) => {
    const { education } = props;

    const renderedInfo = [];

    Object.keys(education).forEach((key) => {
        switch (true) {
            case (key === 'institution'):
                renderedInfo.push(<h4 key={key}>{education.institution}</h4>);
                break;
            case (key === 'discipline' || key === 'graduationYear'):
                renderedInfo.push(<p key={key}>{education[key]}</p>);
                break;
            default:
                break;
        }
    })

    return (
        <div className='preview-section' id='education-section'>
            {renderedInfo}
        </div>
    )
}

export default Education;
