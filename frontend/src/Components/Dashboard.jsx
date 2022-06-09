import axios from "axios";
import React, { useEffect, useState } from "react";
import Events from "./DashboardComponents/Events";
import Navbar from "./DashboardComponents/Navbar";
import Students from "./DashboardComponents/Students";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const token = sessionStorage.getItem("token");

    axios
      .get("http://localhost:7000/admin/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response:", response.data);
        setStudents(response.data.student);
        setEvents(response.data.event);
      })
      .catch((error) => {
        console.log("err", error.message);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <Students data={students}></Students>
      <Events data={events}></Events>
    </div>
  );
};

export default Dashboard;
