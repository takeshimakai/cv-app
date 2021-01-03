const ProfileInput = (props) => {
    const { inputValue, handleChange } = props;

    return (
        <div className='input-section'>
            <label>First name:
                <input id='firstName' type='text' value={inputValue['firstName']} onChange={handleChange} />
            </label>
            <label>Last name:
                <input id='lastName' type='text' value={inputValue['lastName']} onChange={handleChange} />
            </label>
            <label>Phone number:
                <input id='phoneNum' type='tel' value={inputValue['phoneNum']} onChange={handleChange} />
            </label>
            <label>Email:
                <input id='email' type='email' value={inputValue['email']} onChange={handleChange} />
            </label>
            <label>Address:
                <input id='address' type='text' value={inputValue['address']} onChange={handleChange} />
            </label>
        </div>
    )
}

export default ProfileInput;
