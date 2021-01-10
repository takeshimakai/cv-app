const ProfileInput = (props) => {
    const { profileInput, handleProfileChange } = props;

    return (
        <div className='input-section'>
            <label>First name:
                <input
                    name='firstName'
                    type='text'
                    value={profileInput['firstName']}
                    onChange={handleProfileChange}
                />
            </label>
            <label>Last name:
                <input
                    name='lastName'
                    type='text'
                    value={profileInput['lastName']}
                    onChange={handleProfileChange}
                />
            </label>
            <label>Phone number:
                <input
                    name='phoneNum'
                    type='tel'
                    value={profileInput['phoneNum']}
                    onChange={handleProfileChange}
                />
            </label>
            <label>Email:
                <input
                    name='email'
                    type='email'
                    value={profileInput['email']}
                    onChange={handleProfileChange}
                />
            </label>
            <label>Address:
                <input
                    name='address'
                    type='text'
                    value={profileInput['address']}
                    onChange={handleProfileChange}
                />
            </label>
            <label>Summary:
                <textarea
                    name='summary'
                    value={profileInput['summary']}
                    onChange={handleProfileChange}
                />
            </label>
        </div>
    )
}

export default ProfileInput;
