import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const Prescription = ({ dat }) => {
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

  const formattedData = {
    patientName: data.pat_priscription[0].patientID[0].Patient_Name,
    symptoms: data.pat_priscription[0].Symptoms.join(", "),
    diagnosis: data.pat_priscription[0].Diagnosis.join(", "),
    medications: data.pat_priscription[0].medication.map((medication) => (
      <View key={medication._id}>
        <Text>{medication.name}</Text>
        <Text>Dosage: {medication.dosage}</Text>
        {medication.instructions && (
          <Text>Instructions: {medication.instructions}</Text>
        )}
        <Text>Schedule: {medication.no_dose}</Text>
        <Text>Duration: {medication.no_of_Days} days</Text>
        {medication.notes && <Text>Notes: {medication.notes}</Text>}
      </View>
    )),
  };

  return (
    <Document>
      <Page size="A4">
        <div className="p-5 text-xl">
          <Text>Prescription</Text>
        </div>
        <div className="grid grid-cols-2 p-5">
          <View>
            <div className="col-span-1">
              <Text>Name: {formattedData.patientName}</Text>
            </div>
            <div className="col-span-1">
              <Text>
                Date: {data.pat_priscription[0].Date.substring(0, 10)}
              </Text>
            </div>
          </View>
        </div>
        <div>
          <div className="text-lg pl-5">
            <Text>Symptoms</Text>
          </div>
          <div className="pl-5 pb-5">
            <Text>{formattedData.symptoms}</Text>
          </div>
        </div>

        <Text>Diagnosis:</Text>
        <Text>{formattedData.diagnosis}</Text>
        <Text>Medications:</Text>
        {formattedData.medications}
      </Page>
    </Document>
  );
};

// const styles = StyleSheet.create({
//   page: {
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   details: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   medication: {
//     marginBottom: 10,
//     padding: 5,
//     border: "1 solid #000",
//   },
// });

export default Prescription;

// Dummy data
