import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

const works = [
  { label: "SALES", value: 0 },
  { label: "SERVICE", value: 1 },
  { label: "PARTS", value: 2 },
];

const schedule = {
  Monday: ["8:00am-8:00pm", "8:00am-8:00pm", "Closed"],
  Tuesday: ["8:00am-8:00pm", "Closed", "8:00am-8:00pm"],
  Wednesday: ["Closed", "8:00am-8:00pm", "8:00am-8:00pm"],
  Thursday: ["8:00am-8:00pm", "8:00am-8:00pm", "8:00am-8:00pm"],
  Friday: ["8:00am-8:00pm", "Closed", "8:00am-8:00pm"],
  Saturday: ["8:00am-5:00pm", "8:00am-5:00pm", "Closed"],
  Sunday: ["Closed", "Closed", "Closed"],
};

const getSchedule = (workValue) =>
  Object.entries(schedule).map((day) => `${day[0]}: ${day[1][workValue]}`);

const WorkingHours = ({ work }) => {
  const workingHoursCopy = getSchedule(work.value);

  return (
    <div className="working-hours-schedule row">
      {workingHoursCopy.map((dayString) => (
        <div className="col-6">
          <span>{dayString}</span>
        </div>
      ))}
    </div>
  );
};

export const WorkingHoursSelector = (props) => {
  const [typeOfWork, setTypeOfWork] = useState(works[0]);

  return (
    <div {...props}>
      <Dropdown
        options={works}
        defaultOption={works[0]}
        onSelectOption={setTypeOfWork}
      />

      <WorkingHours work={typeOfWork} />
    </div>
  );
};
