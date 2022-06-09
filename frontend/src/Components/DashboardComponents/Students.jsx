import React from "react";
import { List } from "./StyledComponents/List";

const Students = ({ data }) => {
  console.log("data:", data);
  return (
    <div
      style={{
        overflow: "scroll",
        height: "600px",
      }}
    >
      <List>
        <div className="left-align">
          <p>Name</p>
        </div>

        <div className="center-align">
          <p>Roll No.</p>
        </div>
        <div className="center-align">
          <p>Term</p>
        </div>
        <div className="center-align">
          <p>Year</p>
        </div>
        <div className="center-align">
          <p>Phone No.</p>
        </div>
      </List>

      {data.map((el) => (
        <List key={el._id}>
          <div className="left-align">
            <p>{el.name}</p>
          </div>
          <div className="center-align">
            <p>{el.roll_number}</p>
          </div>
          <div className="center-align">
            <p>{el.term}</p>
          </div>
          <div className="center-align">
            <p>{el.current_year}</p>
          </div>
          <div className="center-align">
            <p>{el.contact_number}</p>
          </div>
        </List>
      ))}
    </div>
  );
};

export default Students;

// contact_number: 4432370300;
// createdAt: "2022-06-08T02:29:13.797Z";
// current_year: 4;
// name: "Bary Goodhew";
// roll_number: 1;
// term: 8;
// updatedAt: "2022-06-08T02:29:13.797Z";
// _id: "62a009794ac27978e42a94ba";
