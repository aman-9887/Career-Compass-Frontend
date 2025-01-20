// import React, { useState } from "react";

// const CareerQuiz = () => {
//     const [currentStep, setCurrentStep] = useState(1);
//     const [selectedStream, setSelectedStream] = useState("");
//     const [selectedSubOption, setSelectedSubOption] = useState("");
//     const [selectedCareer, setSelectedCareer] = useState("");
  
//     const handleStreamSelect = (stream) => {
//       setSelectedStream(stream);
//       setCurrentStep(2);
//     };
  
//     const handleSubOptionSelect = (subOption) => {
//       setSelectedSubOption(subOption);
//       setCurrentStep(3);
//     };
  
//     const handleCareerSelect = (career) => {
//       setSelectedCareer(career);
//       setCurrentStep(4);
//     };
  
//     const renderStep = () => {
//       if (currentStep === 1) {
//         return (
//           <div>
//             <h2>Select a Stream</h2>
//             {Object.keys(quizData.streams).map((stream) => (
//               <button key={stream} onClick={() => handleStreamSelect(stream)}>
//                 {stream}
//               </button>
//             ))}
//           </div>
//         );
//       }
  
//       if (currentStep === 2) {
//         return (
//           <div>
//             <h2>Select a Sub-Option from {selectedStream}</h2>
//             {quizData.streams[selectedStream].map((subOption) => (
//               <button key={subOption} onClick={() => handleSubOptionSelect(subOption)}>
//                 {subOption}
//               </button>
//             ))}
//           </div>
//         );
//       }
  
//       if (currentStep === 3) {
//         return (
//           <div>
//             <h2>Select a Career Path from {selectedSubOption}</h2>
//             {quizData.subOptions[selectedSubOption]?.map((career) => (
//               <button key={career} onClick={() => handleCareerSelect(career)}>
//                 {career}
//               </button>
//             ))}
//           </div>
//         );
//       }
  
//       if (currentStep === 4) {
//         return (
//           <div>
//             <h2>Summary</h2>
//             <p>Stream: {selectedStream}</p>
//             <p>Sub-Option: {selectedSubOption}</p>
//             <p>Career Path: {selectedCareer}</p>
//             <button onClick={() => setCurrentStep(1)}>Restart</button>
//           </div>
//         );
//       }
//     };
  
//     return <div>{renderStep()}</div>;
//   };
  