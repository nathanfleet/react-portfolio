import React from 'react';

// button to be implemented when resume is complete
const ResumeButton = () => {
  const openResume = () => {
    const url = "/resume.pdf";
    window.open(url, "_blank");
  };

  return (
    <button onClick={openResume} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Resume
    </button>
  );
};

export default ResumeButton;
