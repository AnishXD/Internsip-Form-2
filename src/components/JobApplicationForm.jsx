import React, { useState } from 'react';
import useForm from '../Hooks/useForm';
import useValidation from '../Hooks/useValidation';
import Summary from './summary';

const JobApplicationForm = () => {
  const [formData, handleChange] = useForm({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    experience: '',
    portfolioUrl: '',
    managementExperience: '',
    additionalSkills: [],
    interviewTime: '',
  });

  const [errors, validate] = useValidation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formData)) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <Summary formData={formData} />;
  }

  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-custom-pink">
      <div className="bg-white p-6 shadow-md rounded-md w-2/3 h-full overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Job Application Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber}</span>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Applying for Position</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select Position</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
              </select>
              {errors.position && <span className="text-red-500 text-xs">{errors.position}</span>}
            </div>
          </div>
          {(formData.position === 'Developer' || formData.position === 'Designer') && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Relevant Experience (years)</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.experience && <span className="text-red-500 text-xs">{errors.experience}</span>}
            </div>
          )}
          {formData.position === 'Designer' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Portfolio URL</label>
              <input
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.portfolioUrl && <span className="text-red-500 text-xs">{errors.portfolioUrl}</span>}
            </div>
          )}
          {formData.position === 'Manager' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Management Experience</label>
              <textarea
                name="managementExperience"
                value={formData.managementExperience}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.managementExperience && <span className="text-red-500 text-xs">{errors.managementExperience}</span>}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Preferred Interview Time</label>
              <input
                type="datetime-local"
                name="interviewTime"
                value={formData.interviewTime}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.interviewTime && <span className="text-red-500 text-xs">{errors.interviewTime}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Additional Skills</label>
              <div className="mt-1 space-y-2">
                {['JavaScript', 'CSS', 'Python', 'React', 'Node.js'].map((skill) => (
                  <label key={skill} className="flex items-center">
                    <input
                      type="checkbox"
                      name="additionalSkills"
                      value={skill}
                      checked={formData.additionalSkills.includes(skill)}
                      onChange={handleChange}
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 text-sm text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
              {errors.additionalSkills && <span className="text-red-500 text-xs">{errors.additionalSkills}</span>}
            </div>
          </div>
          <button type="submit" className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-400 transition duration-300 ease-in-out">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
