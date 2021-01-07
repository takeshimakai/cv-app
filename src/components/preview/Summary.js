const Summary = (props) => {
    const { summary } = props.profile;

    return (
        <div className='preview-section' id='summary-section'>
            <h3>Summary</h3>
            <p>{summary}</p>
        </div>
    );
}

export default Summary;
