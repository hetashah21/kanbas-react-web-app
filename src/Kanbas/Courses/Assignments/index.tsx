import React from "react";
import { BsGripVertical } from "react-icons/bs";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment"
             placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
            <BsGripVertical className="me-2 fs-3" /> 
            <div> 
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A1 - ENV + HTML
              </a><br />
              Multiple Modules | <b>Not available until</b> May 6 at 12:00 am | <br />
              <b>Due</b> May 13 at 11:59 pm | 100 pts
            </div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
            <BsGripVertical className="me-2 fs-3" /> 
            <div> 
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A2 - CSS + BOOTSTRAP
              </a><br />
              Multiple Modules | <b>Not available until</b> May 13 at 12:00 am | <br />
              <b>Due</b> May 20 at 11:59 pm | 100 pts
            </div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
            <BsGripVertical className="me-2 fs-3" /> 
            <div> 
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A3 - JAVASCRIPT + REACT
              </a><br />
              Multiple Modules | <b>Not available until</b> May 20 at 12:00 am | <br />
              <b>Due</b> May 27 at 11:59 pm | 100 pts
            </div>
        </li>
      </ul>
    </div>
);}
