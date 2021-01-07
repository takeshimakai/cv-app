import { useState } from 'react';
import Form from './components/form/Form';
import Preview from './components/preview/Preview';

const App = () => {
  const [inputValue, setInputValue] = useState({});

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    phoneNum: '',
    email: '',
    address: '',
    summary: '',
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    institution: '',
    discipline: '',
    graduationYear: '',
  });

  const [edit, setEdit] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const prevInputValue = inputValue;
    prevInputValue[id] = value;
    setInputValue(prevInputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prevProfile = profile;
    Object.keys(inputValue).forEach((key) => {
      prevProfile[key] = inputValue[key];
    })
    setProfile(prevProfile);
    setEdit(false);
  }

  const handleEditBtnClick = () => setEdit(true);

  return (
    <div id='main'>
      {edit
        ? <Form inputValue={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />
        : <Preview profile={profile} handleEditBtnClick={handleEditBtnClick} />
      }
    </div>
  );
}

export default App;
