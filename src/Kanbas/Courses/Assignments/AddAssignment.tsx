import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { addAssignment } from "./reducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function AddAssignment() {

    const dispatch = useDispatch();
    const router = useNavigate();
    const { cid } = useParams();

    const [assignment, setAssignment] = useState({
        course: cid,
        title: '',
        description: '',
        points: '',
        due: '',
        available: '',
        until: ''
    });

    const handleChange = (event: any) => {
        const value = event.target.value;
        setAssignment({ ...assignment, [event.target.name]: value });
    };

    const createAssignment = async (assignment: any) => {
        const newAssignment = await client.createAssignment(cid as string, assignment);
        dispatch(addAssignment(newAssignment));
        router(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleAddAssignment = () => {
        createAssignment(assignment);
    }
    return (
        <div id="wd-assignments-editor">
            <div className="container">
                <div className="row mb-3">
                    <label htmlFor="assignment-name" className="form-label">Assignment Name</label>
                    <input id="assignment-name"
                        className="form-control"
                        name="title"
                        value={assignment?.title}
                        onChange={handleChange} />
                </div>
                <div className="row input-group mb-2">
                    <textarea id="assignment-description" className="form-control" rows={5} cols={20} name="description"
                        onChange={handleChange}>
                        {assignment?.description}
                    </textarea>
                </div><br/>
                <div className="row mb-3">
                    <div className="col-md-6 text-end">
                        <label htmlFor="assignment-points" className="col-form-label float-end">Points</label>
                    </div>
                    <div className="col-md-6 text-end">
                        <input id="assignment-points" type="number" className="form-control" name="points"
                            onChange={handleChange} value={assignment?.points} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6 text-end">
                        <label htmlFor="assign-to" className="col-form-label">Assign</label>
                    </div>
                    <div className="col-md-6">
                        <div className="border p-3 mb-3">
                            <div className="p-3">
                                <div className="row">
                                    <label><b>Assign to</b></label>
                                    <input id="assign-to" className="form-control" defaultValue="Everyone" />
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
                    <input type="button" className="btn btn-danger ms-2 float-end " value="Save"
                        onClick={handleAddAssignment} />
                    <Link key={'cancel'} to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <input type="button" className="btn btn-secondary" value="Cancel" />
                    </Link>
                </div>
                <div className="row" style={{ height: '30px', width: '100%' }}></div>
            </div>
        </div>
    )
}