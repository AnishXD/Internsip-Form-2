import { useState } from 'react';

const useValidation = () => {
    const [errors, setErrors] = useState({});
  
    const validate = (formData) => {
      const newErrors = {};
  
      if (!formData.fullName) newErrors.fullName = 'Full Name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = 'Phone Number is required';
      } else if (isNaN(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Phone Number must be a number';
      }
      if (['Developer', 'Designer'].includes(formData.position) && (!formData.experience || isNaN(formData.experience) || formData.experience <= 0)) {
        newErrors.experience = 'Relevant Experience is required and must be a positive number';
      }
      if (formData.position === 'Designer' && !formData.portfolioUrl) {
        newErrors.portfolioUrl = 'Portfolio URL is required';
      }
      if (formData.position === 'Manager' && !formData.managementExperience) {
        newErrors.managementExperience = 'Management Experience is required';
      }
      if (formData.additionalSkills.length === 0) {
        newErrors.additionalSkills = 'At least one skill must be selected';
      }
      if (!formData.interviewTime) {
        newErrors.interviewTime = 'Preferred Interview Time is required';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    return [errors, validate];
  };
  
  export default useValidation;
  