// // import React from 'react'
// // import Prescription from '../prescriptionfromate'

// // const PrescriptionPage = () => {
// //   return (
// //     <div>
// //         <Prescription />
// //     </div>
// //   )
// // }

// // export default PrescriptionPage
// // pages/prescription.js

// import React from 'react';
// import styles from './Prescription.module.css';

// const Prescription = () => {
//   const data = {
//     pat_priscription: [
//       {
//         _id: '1234567890abcdef',
//         patientID: [{ Patient_Name: 'John Doe' }],
//         Date: '2023-11-21T00:00:00.000Z',
//         Symptoms: ['Fever', 'Headache'],
//         Diagnosis: ['Common Cold'],
//         medication: [
//           {
//             name: 'Paracetamol',
//             dosage: '500mg',
//             instructions: 'Take every 4-6 hours as needed',
//             no_dose: '1-0-0',
//             no_of_Days: 3,
//             notes: 'Avoid alcohol while taking this medication.',
//           },
//           {
//             name: 'Saline Nasal Spray',
//             dosage: '2-3 sprays per nostril',
//             instructions: 'Use as needed',
//             no_dose: 'N/A',
//             no_of_Days: 5,
//             notes: '',
//           },
//         ],
//         Report: ['Blood Test'],
//         Follow_up_Date: '2023-11-28T00:00:00.000Z',
//       },
//     ],
//   };

//   const prescription = data.pat_priscription[0];

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.header}>Prescription</h1>
//       <div className={styles.details}>
//         <p>Patient Name: {prescription.patientID[0].Patient_Name}</p>
//         <p>Date: {new Date(prescription.Date).toLocaleDateString()}</p>
//       </div>
//       <div className={styles.section}>
//         <h2 className={styles.sectionHeader}>Symptoms:</h2>
//         <ul>
//           {prescription.Symptoms.map((symptom, index) => (
//             <li key={index}>{symptom}</li>
//           ))}
//         </ul>
//       </div>
//       <div className={styles.section}>
//         <h2 className={styles.sectionHeader}>Diagnosis:</h2>
//         <ul>
//           {prescription.Diagnosis.map((diagnosis, index) => (
//             <li key={index}>{diagnosis}</li>
//           ))}
//         </ul>
//       </div>
//       <div className={styles.section}>
//         <h2 className={styles.sectionHeader}>Medications:</h2>
//         <ul>
//           {prescription.medication.map((medication, index) => (
//             <li key={index}>
//               <p>{medication.name}</p>
//               <p>Dosage: {medication.dosage}</p>
//               {medication.instructions && (
//                 <p>Instructions: {medication.instructions}</p>
//               )}
//               <p>Schedule: {medication.no_dose}</p>
//               <p>Duration: {medication.no_of_Days} days</p>
//               {medication.notes && <p>Notes: {medication.notes}</p>}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className={styles.details}>
//         <p>Follow-up Date: {new Date(prescription.Follow_up_Date).toLocaleDateString()}</p>
//       </div>
//     </div>
//   );
// };

// export default Prescription;
// pages/prescription.js

import React from "react";
import styles from "./Prescription.module.css";

const Prescription = () => {
  const data = {
    pat_priscription: [
      {
        _id: "1234567890abcdef",
        patientID: [{ Patient_Name: "John Doe" }],
        Date: "2023-11-21T00:00:00.000Z",
        Symptoms: ["Fever", "Headache"],
        Diagnosis: ["Common Cold"],
        medication: [
          {
            name: "Paracetamol",
            dosage: "500mg",
            instructions: "Take every 4-6 hours as needed",
            no_dose: "1-0-0",
            no_of_Days: 3,
            notes: "Avoid alcohol while taking this medication.",
          },
          {
            name: "Saline Nasal Spray",
            dosage: "2-3 sprays per nostril",
            instructions: "Use as needed",
            no_dose: "N/A",
            no_of_Days: 5,
            notes: "",
          },
        ],
        Report: ["Blood Test"],
        Follow_up_Date: "2023-11-28T00:00:00.000Z",
      },
    ],
  };

  const prescription = data.pat_priscription[0];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Prescription</h1>
      <div className={styles.details}>
        <div className="grid grid-cols-2 text-lg">
          <p className="col-span-1">
            Patient Name: {prescription.patientID[0].Patient_Name}
          </p>
          <p className="items-end">
            Date: {new Date(prescription.Date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <span className="flex">
          <h2 className={styles.sectionHeader}>Symptoms :</h2>
          <ul className="pl-5 text-lg">
            {prescription.Symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </span>
      </div>
      <div className={styles.section}>
        <span className="flex">
          <h2 className={styles.sectionHeader}>Diagnosis :</h2>
          <ul className="pl-5 text-lg">
            {prescription.Diagnosis.map((diagnosis, index) => (
              <li key={index}>{diagnosis}</li>
            ))}
          </ul>
        </span>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>Medications:</h2>
        <table className={styles.medicationTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Dosage</th>
              <th>Instructions</th>
              <th>Schedule</th>
              <th>Duration</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {prescription.medication.map((medication, index) => (
              <tr key={index}>
                <td>{medication.name}</td>
                <td>{medication.dosage}</td>
                <td>{medication.instructions}</td>
                <td>{medication.no_dose}</td>
                <td>{medication.no_of_Days} days</td>
                <td>{medication.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.details}>
        <p>
          Follow-up Date:{" "}
          {new Date(prescription.Follow_up_Date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Prescription;
