import React from "react";
import { Nav } from "./StyledComponents/Nav";

export default function Navbar() {
  return (
    <Nav>
      <div>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="term">Term </label>
        <select name="term" id="term">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>

      <div>
        <label htmlFor="year">Year </label>

        <select name="year" id="year">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div>
        <label htmlFor="eventDate">Events </label>

        <select name="eventDate" id="eventDate" value="upcoming">
          <option value="upcoming">upcoming</option>
          <option value="ongoing">ongoing</option>
          <option value="completed">completed</option>
        </select>
      </div>

      <div>
        <button>Register Event</button>
      </div>
    </Nav>
  );
}
