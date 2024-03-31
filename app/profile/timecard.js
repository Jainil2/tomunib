// VaccineCard.js
import React from 'react';

function VaccineCard({ info }) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center px-4 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mr-2">{info.name}</h2>
          <span className="text-gray-500 text-sm">(Janssen Pharmaceuticals, Johnson & Johnson)</span>
        </div>
        <ul className="px-4 py-4 divide-y divide-gray-200">
          <li className="py-2 flex items-center">
            <span className="font-medium text-gray-700 w-24">Doses Required:</span>
            <span className="text-gray-500 ml-2">{info.doses}</span>
          </li>
          <li className="py-2 flex items-center">
            <span className="font-medium text-gray-700 w-24">Doses Taken:</span>
            <span className="text-gray-500 ml-2"> {info.status.dosesTaken}</span>
          </li>
          <li className="py-2 flex items-center">
            <span className="font-medium text-gray-700 w-24">Last Dose Date:</span>
            <span className="text-gray-500 ml-2">{info.status.lastDoseDate}</span>
          </li>
          <li className="py-2 flex items-center">
            <span className="font-medium text-gray-700 w-24">Next Dose Date:</span>
            <span className="text-gray-500 ml-2">{info.status.nextDoseDate}</span>
          </li>
          <li className="py-2 flex items-center">
            <span className="font-medium text-gray-700 w-24">Administering Doctor:</span>
            <span className="text-gray-500 ml-2">{info.status.administeringDoctor}</span>
          </li>
        </ul>
      </div>
  
  );
}

export default VaccineCard;
