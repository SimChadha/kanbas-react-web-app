import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const params = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="ms-5">
      <h2>Assignment Name</h2>
      <pre>
        <code>{JSON.stringify(params, null, 2)}</code>
      </pre>
      <input defaultValue={assignment.title} className="form-control mb-2" />
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-secondary s-button me-2"
      >
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger p-button me-2">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
