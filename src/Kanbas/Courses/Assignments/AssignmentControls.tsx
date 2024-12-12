import {FaPlus} from "react-icons/fa6";
import {Link} from "react-router-dom";

export default function AssignmentControl({cid}: {cid: string}) {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <div className="row">
                <div className="col-md-6">
                    <div id="wd-search-assignment">
                    <input id = "wd-search-assignment-input"
                                    type="text"
                                    className="form-control border-start-0"
                                    placeholder="Search for Assignments"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <Link id="wd-add-assignment-button" to={`/Kanbas/Courses/${cid}/Assignments/add`} className="btn btn-danger me-1 float-end">
                        <FaPlus className=" me-1" style={{bottom: "1px"}}/>
                        Assignment
                    </Link>
                    <button id="wd-add-group-button" className="btn btn-light me-1 float-end">
                        <FaPlus className="me-1" style={{bottom: "1px"}}/>
                        Group
                    </button>
                </div>
            </div>
        </div>
    )
}