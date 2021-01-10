const ProfileInput = (props) => {
    const { profileInput, handleProfileChange } = props;

    return (
        <div>
            <div className='input-box'>
                <label>Name:</label>
                <input
                    name='firstName'
                    type='text'
                    value={profileInput['firstName']}
                    placeholder='First name'
                    onChange={handleProfileChange}
                />
                <input
                    name='lastName'
                    type='text'
                    value={profileInput['lastName']}
                    placeholder='Last name'
                    onChange={handleProfileChange}
                />
            </div>
            <div className='input-box'>
                <label>Phone number:</label>
                <input
                    name='phoneNum'
                    type='tel'
                    value={profileInput['phoneNum']}
                    onChange={handleProfileChange}
                />
            </div>
            <div className='input-box'>
                <label>Email:</label>
                <input
                    name='email'
                    type='email'
                    value={profileInput['email']}
                    onChange={handleProfileChange}
                />
            </div>
            <div className='input-box'>
                <label>Address:</label>
                <input
                    id='address-input'
                    name='address'
                    type='text'
                    value={profileInput['address']}
                    onChange={handleProfileChange}
                />
            </div>
            <div className='input-box'>
                <label>Summary:</label>
                <textarea
                    name='summary'
                    value={profileInput['summary']}
                    onChange={handleProfileChange}
                />
            </div>
        </div>
    )
}

export default ProfileInput;
