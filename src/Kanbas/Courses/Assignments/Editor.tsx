import { useDispatch, useSelector } from "react-redux";
import { updateAssignment } from "./reducer";
import { useLocation, useNavigate, useParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as client from "./client";

export default function AssignmentEditor() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const assignmentId = pathname.split("/").pop();
    const dispatch = useDispatch();
    const router = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const CurrentAssignment = assignments.find((item: any) => item._id === assignmentId);

    const [assignment, setAssignment] = useState({
        ...CurrentAssignment
    });

    const saveAssignment = async (assignment: any) => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
        router(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleUpdateAssignment = () => {
        saveAssignment(assignment)
    }

    const handleChange = (event: any) => {
        const value = event.target.value;
        setAssignment({ ...assignment, [event.target.name]: value });
    };

    return (
        <div id="wd-assignments-editor">
            <div className="container">
                <div className="row mb-3">
                    <label htmlFor="assignment-name" className="form-label">Assignment Name</label>
                    <input id="assignment-name" className="form-control" name="title" value={assignment?.title}
                        onChange={handleChange} />
                </div>

                <div className="row input-group mb-2">
                    <textarea id="assignment-description" className="form-control" rows={5} cols={20} name="description"
                        onChange={handleChange}>
                        {assignment?.description}
                    </textarea>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6 text-end">
                        <label htmlFor="assignment-points" className="col-form-label float-end">Points</label>
                    </div>
                    <div className="col-md-6 text-end">
                        <input id="assignment-points" type="number" className="form-control" name="points"
                            onChange={handleChange} value={assignment?.points} />
                    </div>
                </div>
                <br />
                <div className="row mb-3">
                    <div className="col-md-6 text-end">
                        <label htmlFor="assignment-group" className="col-form-label">Assignment Group</label>
                    </div>
                    <div className="col-md-6">
                        <select id="assignment-group" className="form-control">
                            <option>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>EXAMS</option>
                            <option>PROJECT</option>
                        </select>
                    </div>
                </div>

                <br />

                <div className="row mb-3">
                    <div className="col-md-6 text-end">
                        <label htmlFor="grade-display" className="col-form-label">Display Grade as</label>
                    </div>
                    <div className="col-md-6">
                        <select id="grade-display" className="form-select">
                            <option>Percentage</option>
                            <option>Points</option>
                            <option>Complete/Incomplete</option>
                            <option>Letter Grade</option>
                        </select>
                    </div>
                </div>
                <br />

                <div className="row mb-3">
                    <div className="col-md-6 text-end">
                        <label htmlFor="submission-type" className="col-form-label">Submission Type</label>
                    </div>
                    <div className="col-md-6">
                        <div className="border p-2">
                            <select id="submission-type" className="form-select">
                                <option>Online</option>
                                <option>On Paper</option>
                                <option>No Submission</option>
                            </select>
                            <br />
                            <div>
                                <label><b>Online Entry Options</b></label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="online-option-text" />
                                    <label className="form-check-label" htmlFor="online-option-text">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="online-option-url" />
                                    <label className="form-check-label" htmlFor="online-option-url">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="online-option-media" />
                                    <label className="form-check-label" htmlFor="online-option-media">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="online-option-annotation" />
                                    <label className="form-check-label" htmlFor="online-option-annotation">Student Annotation</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="online-option-file" />
                                    <label className="form-check-label" htmlFor="online-option-file">File Uploads</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <br />

                <div className="row mb-3">
                    <div className="col-md-6 text-end">
                        <label htmlFor="assign-to" className="col-form-label">Assign</label>
                    </div>
                    <div className="col-md-6">
                        <div className="border p-3 mb-3">
                            <div className="p-3">
                                <div className="row">
                                    <label><b>Assign to</b></label>
                                    <br />
                                    <input id="assign-to" className="form-control" defaultValue="Everyone" />
                                    <br />

                                </div>
                                <div className="row">
                                    <label htmlFor="due-date"><b>Due</b></label>
                                    <input id="due-date" className="form-control" type="date"
                                        value={assignment?.due} onChange={handleChange} name="due" />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label><b>Available from</b></label>
                                        <input id="available-from" className="form-control" type="date"
                                            value={assignment?.available} onChange={handleChange} name="available" />
                                    </div>
                                    <div className="col-md-6">
                                        <label><b>Until</b></label>
                                        <input id="available-until" className="form-control" type="date"
                                            onChange={handleChange} name="until" value={assignment?.until} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="mb-2 text-end">
                    <input type="button" className="btn btn-danger ms-2 float-end" value="Save"
                        onClick={handleUpdateAssignment} />
                    <Link key={'cancel'} to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <input type="button" className="btn btn-secondary " value="Cancel" />
                    </Link>
                </div>

                <div className="row" style={{ height: '30px', width: '100%' }}></div>
            </div>
        </div>
    )
}