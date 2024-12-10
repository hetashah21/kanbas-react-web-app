import { IoEllipsisVerticalSharp } from "react-icons/io5";
import GreenCheckMark from "../Modules/GreenCheckmark";
import { BiSolidTrashAlt } from "react-icons/bi";
import DeleteAssignment from "./DeleteAssignment";

interface AssignmentControlButtonProps {
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
}

const AssignmentControlButtons: React.FC<AssignmentControlButtonProps> = ({ assignmentId, deleteAssignment }) => {
    return (
        <div className="float-end d-flex align-items-center">
            <GreenCheckMark />
            <BiSolidTrashAlt 
                className="text-danger mx-2 mb-1" 
                data-bs-toggle="modal" 
                data-bs-target={`#wd-delete-assignment-${assignmentId}-dialog`} 
            />
            <IoEllipsisVerticalSharp  className="fs-3" />
            <DeleteAssignment 
                assignmentId={assignmentId} 
                onDelete={deleteAssignment} 
            />
        </div>
    );
};

export default AssignmentControlButtons;