const SummaryInput = (props) => {
    const { inputValue, handleChange } = props;

    return (
        <div className='input-section'>
            <label>Summary:
                <textarea id='summary' value={inputValue['summary']} onChange={handleChange} />
            </label>
        </div>
    )
}

export default SummaryInput;
