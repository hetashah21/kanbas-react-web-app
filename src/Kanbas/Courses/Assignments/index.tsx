import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { PiNotePencilLight } from "react-icons/pi";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControls from "./AssignmentControls";
import { deleteAssignment, setAssignments } from "./reducer";
import { useState, useEffect } from "react";
import * as client from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const {assignments} = useSelector((state: any) => state.assignmentReducer);

  const assignmentCid = assignments.filter((assignment: any) => assignment.course === cid);
  const dispatch = useDispatch();

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="assignments">
      <AssignmentsControls cid={cid!} />
<br/>
<br/>
      <div className="list-group mb-5 fs-5 border-gray">
        <div className="list-group-item p-3 ps-2 bg-light">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="mb-0">
                <BsGripVertical className="fs-2 me-3 " />
                <BiSolidDownArrow className="fs-4 me-3 " />
                <b>ASSIGNMENTS</b>
              </h4> 
            <div className=" d-flex align-items-center">
              <div style={{
                border: "1px solid #c7cdd158",
                borderRadius: "25px",
                padding: "5px 10px",
                marginRight: "10px"
              }}>
                  40% of Total
              </div>
              <BsPlus className="me-2 fs-2 " />
              <IoEllipsisVertical className="fs-3" />
            </div>
          </div>
        </div>
        {
          assignmentCid && assignmentCid.map((item: any) => (
            <li className="wd-assignment-list-item list-group-item p-3" style={{ borderLeft: "5px solid green" }}>
              <div className="row align-items-center">
                <div className="col-auto">
                  <BsGripVertical className="fs-4" />
                </div>
                <div className="col-auto">
                  <a className="wd-assignment-link link-underline"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                    <PiNotePencilLight className="text-success fs-4" />
                  </a>

                </div>
                <div className="col">
                  <a className="wd-assignment-link link-underline link-underline-opacity-0 text-dark"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                    <h5><b>{item.title}</b></h5>
                  </a>
                  <p className="mb-0">
                  <span className="text-danger">Multiple Modules</span> | 
                  <b> Not available until </b> {item.available} | 
                  <b> Due </b> {item.due} | 
                  {item.points} pts
                </p>
                </div>
                <div className="col">
                  <AssignmentControlButtons assignmentId={item._id} deleteAssignment={(assignmentId) => {
                      removeAssignment(assignmentId); 
                    }} />
                </div>
              </div>
            </li>
          ))
        }
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}