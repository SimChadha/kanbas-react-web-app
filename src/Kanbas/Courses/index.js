import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaBars } from "react-icons/fa";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb" style={{ '--bs-breadcrumb-divider': '>' }}>
          <ol className="breadcrumb">
            <FaBars style={{ color: "red" }} />
            <li className="breadcrumb-item">
              <Link to={`/Kanbas/Courses/${courseId}`} className="acc-link">
                {course.name}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Routes>
                <Route path="/" element={'Home'} />
                <Route path="Home" element={'Home'} />
                <Route path="Modules" element={'Modules'} />
                <Route path="Assignments" element={'Assignments'} />
                <Route
                  path="Assignments/:assignmentId"
                  element={'Assignment Editor'}
                />
                <Route path="Grades" element={'Grades'} />
              </Routes>
            </li>
          </ol>
        </nav>
      </div>
      <div className="row justify-content-between">
        <div className="col-2">
          <CourseNavigation />
        </div>
        <div className="col ms-5">
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;
