interface DeleteAssignmentProps {
    assignmentId: string;
    onDelete: (assignmentId: string) => void;
}

const DeleteAssignment: React.FC<DeleteAssignmentProps> = ({ assignmentId, onDelete }) => {
    const handleDelete = () => {
        onDelete(assignmentId);
    };

    return (
        <div
            id={`wd-delete-assignment-${assignmentId}-dialog`}
            className="modal fade"
            data-bs-backdrop="static"
            data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Assignment</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this assignment?
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={handleDelete}>
                            Delete
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteAssignment;