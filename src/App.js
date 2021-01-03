import { useState } from 'react';
import Form from './components/form/Form';

const App = () => {
  const [inputValue, setInputValue] = useState([]);

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    phoneNum: '',
    email: '',
    address: '',
  });

  const [summary, setSummary] = useState({summary: ''});

  const [experience, setExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const [education, setEducation] = useState({
    institution: '',
    discipline: '',
    graduationYear: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const prevInputValue = inputValue;
    prevInputValue[id] = value;
    setInputValue(prevInputValue);
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <div id='main'>
      <Form inputValue={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
