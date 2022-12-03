import React, { useEffect, useState } from "react";
import ListPatients from "./ListPatients";

function VetDashboard(props) {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLocalStorage =
        JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientsLocalStorage);
    };

    getLocalStorage();
  }, []);
  const deletePatient = (id) => {
    const patientsUpdate = patients.filter((patient) => patient.id !== id);
    setPatients(patientsUpdate);
  };
  return (
    <div>
      <ListPatients
        patients={patients}
        setPatient={setPatient}
        deletePatient={deletePatient}
      />
    </div>
  );
}

export default VetDashboard;
