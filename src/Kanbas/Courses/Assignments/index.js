import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaCaretDown, FaPlus, FaEllipsisV, FaCheckCircle, FaPenSquare, } from "react-icons/fa";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        <li class="list-group-item list-group-item-secondary ps-2">
          <FaGripVertical />
          <FaCaretDown />
          Assignments
          <div class="float-end">
            <span class="border border-dark rounded-circle p-2">40% of grade</span>
            <FaPlus />
            <FaEllipsisV />
          </div>
          <div class="float-none"></div>
        </li>
        {courseAssignments.map((assignment, index) => (
          <div class="container">
            <div class="row">
              <div class="col-1">
                <FaGripVertical />
                <FaPenSquare style={{ color: "green" }} />
              </div>

              <div class="col-3 px-1">
                <div class="bold-text">
                  <Link
                    className="no-change-link"
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </Link>
                </div>
                <div class="sm-text">
                  Week {index}
                  <br />
                  <span class="bold-text">Due</span> Sep 18 at 11:59PM | 100 pts
                </div>
              </div>
              <div class="col-1 offset-7">
                <div class="float-end">
                  <FaCheckCircle style={{ color: "green" }} />
                  <FaEllipsisV />
                </div>
              </div>
              <div class="float-none"></div>
            </div>
          </div>
          // <Link
          //   key={assignment._id}
          //   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          //   className="list-group-item"
          // >
          //   {assignment.title}
          // </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
