import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <div class="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item course-link"
          >
            <div class="card">
              <div class="card-img-top bg-info w-100 color-div"></div>
              <div class="card-body">
                <h5 class="card-text text-truncate card-course">{course.number} {course._id} {course.name}</h5>
                <p class="card-text grey-text text-truncate">
                  {course.number}.12631.202410
                </p>
                <p class="card-text grey-text text-truncate text-xs">
                  202410_1 Fall 2023 Semester Full Term
                </p>
                <i class="fa-regular fa-pen-to-square grey-text"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
