import { useState } from 'react';
import uniqid from 'uniqid';
import Form from './components/form/Form';
import Preview from './components/preview/Preview';

const App = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    phoneNum: '',
    email: '',
    address: '',
    summary: ''
  });

  const [experience, setExperience] = useState([
    {
      id: uniqid(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    }
  ]);

  const [education, setEducation] = useState([
    {
      id: uniqid(),
      institution: '',
      discipline: '',
      graduationYear: '',
    },
  ]);

  const [profileInput, setProfileInput] = useState(profile);
  const [experienceInput, setExperienceInput] = useState(experience);
  const [educationInput, setEducationInput] = useState(education);

  const [edit, setEdit] = useState(true);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleExperienceChange = (e) => {
    const { dataset:{id}, name, value } = e.target;
    setExperienceInput((prevInput) =>
      prevInput.map((obj) => obj.id === id ? {...obj, [name]: value} : obj));
  };

  const handleEducationChange = (e) => {
    const { dataset:{id}, name, value } = e.target;
    setEducationInput((prevInput) =>
      prevInput.map((obj) => obj.id === id ? {...obj, [name]: value} : obj));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(profileInput);
    setExperience(experienceInput);
    setEducation(educationInput);
    setEdit(false);
  }

  const handleEditBtnClick = () => setEdit(true);

  const addExperience = () => {
    setExperienceInput((prevInput) => [
      ...prevInput,
      {
        id: uniqid(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      }
    ])
  }

  const addEducation = () => {
    setEducationInput((prevInput) => [
      ...prevInput,
      {
        id: uniqid(),
        institution: '',
        discipline: '',
        graduationYear: '',
      }
    ])
  }

  const removeExperience = (e) => {
    const { dataset:{id} } = e.target;
    setExperienceInput((prevInput) => prevInput.filter((obj) => obj.id !== id));
  }

  const removeEducation = (e) => {
    const { dataset:{id} } = e.target;
    setEducationInput((prevInput) => prevInput.filter((obj) => obj.id !== id));
  }

  return (
    <div>
      {edit
        ? <Form
            profileInput={profileInput}
            experienceInput={experienceInput}
            educationInput={educationInput}
            handleProfileChange={handleProfileChange}
            handleExperienceChange={handleExperienceChange}
            handleEducationChange={handleEducationChange}
            handleSubmit={handleSubmit}
            addExperience={addExperience}
            addEducation={addEducation}
            removeExperience={removeExperience}
            removeEducation={removeEducation}
          />
        : <Preview
            profile={profile}
            experience={experience}
            education={education}
            handleEditBtnClick={handleEditBtnClick}
          />
      }
    </div>
  );
}

export default App;
