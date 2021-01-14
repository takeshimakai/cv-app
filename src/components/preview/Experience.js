const Experience = (props) => {
    const { experience } = props;

    const renderedInfo = [];

    Object.keys(experience).forEach((key) => {
        switch (true) {
            case (key === 'company'):
                renderedInfo.push(<h4 key={key}>{experience.company}</h4>);
                break;
            case (key === 'position' || key === 'description'):
                renderedInfo.push(<p key={key}>{experience[key]}</p>);
                break;
            case (key === 'startDate'):
                renderedInfo.push(<p key={key}>{experience.startDate} - {experience.endDate}</p>);
                break;
            default:
                break;
        }
    })

    return (
        <div className='experience-section'>
            {renderedInfo}
        </div>
    )
}

export default Experience;
