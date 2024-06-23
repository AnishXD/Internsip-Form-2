// summary.jsx
import React from 'react';

const Summary = ({ formData }) => {
  const handleNewResponse = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-custom-pink">
      <div className="bg-white p-6 shadow-md rounded-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Application Summary</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-700"><strong>Full Name:</strong> {formData.fullName}</p>
          <p className="text-sm text-gray-700"><strong>Email:</strong> {formData.email}</p>
          <p className="text-sm text-gray-700"><strong>Phone Number:</strong> {formData.phoneNumber}</p>
          <p className="text-sm text-gray-700"><strong>Position:</strong> {formData.position}</p>
          {['Developer', 'Designer'].includes(formData.position) && (
            <p className="text-sm text-gray-700"><strong>Relevant Experience:</strong> {formData.experience} years</p>
          )}
          {formData.position === 'Designer' && (
            <p className="text-sm text-gray-700"><strong>Portfolio URL:</strong> <a href={formData.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{formData.portfolioUrl}</a></p>
          )}
          {formData.position === 'Manager' && (
            <p className="text-sm text-gray-700"><strong>Management Experience:</strong> {formData.managementExperience}</p>
          )}
          <p className="text-sm text-gray-700"><strong>Additional Skills:</strong> {formData.additionalSkills.join(', ')}</p>
          <p className="text-sm text-gray-700"><strong>Preferred Interview Time:</strong> {formData.interviewTime}</p>
        </div>
        <button
          onClick={handleNewResponse}
          className="w-full mt-6 bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-400 transition duration-300 ease-in-out"
        >
          Submit Another Response
        </button>
      </div>
    </div>
  );
};

export default Summary;
