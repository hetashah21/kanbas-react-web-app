import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
  const [module, setModule] = useState({
         id : 1, name: "Node JS Homework",
         description: "Create a NodeJS server with ExpressJS",
         course: "CS 5610 Web Development",
  });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />
      <h4>Modifying Name</h4>
      <a id="wd-update-module-name" className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Name
      </a>
      <input className="form-control w-75" id="wd-module-name"
        defaultValue={module.name} onChange={(e) =>
            setModule({  ...module, name: e.target.value})}/>
      <hr/>
      <h4>Modifying Score</h4>
        <a id="wd-update-score" className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
            Update Score
        </a>
        <input type = "number" defaultValue = {assignment.score} placeholder="Enter New Score"
        onChange={(e) => setAssignment({  ...assignment, score: e.target.value ? parseFloat(e.target.value) : 0})}/>
        <hr/>
        <h4>Completed Properties</h4>
        <a id="wd-update-property" className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
            Completed Properties
        </a>
        <input type = "checkbox" checked={assignment.completed} 
        onChange={(e) => setAssignment({...assignment, completed: !assignment.completed})}/>
        <hr/>
    </div>
);}
