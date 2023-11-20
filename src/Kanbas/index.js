import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState();
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [currentCourse, setCurrentCourse] = useState({
    name: "New Course", number: "CS0000",
    startDate: "2023-09-10", endDate: "2023-12-15",
    id: 0
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, currentCourse);
    setCourses([response.data,
      ...courses
    ]);
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${courseId}`
    );
    setCourses(courses.filter((course) => course._id.$oid !== courseId));
  };

  const updateCourse = async (course) => {
    console.log("COURSE: ", JSON.stringify(course));
    const response = await axios.put(
      `${URL}/${course._id.$oid}`,
      course
    );

    setCourses(
      courses.map((c) => {
        if (c._id === currentCourse._id) {
          return currentCourse;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard courses={courses} currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse} />
            } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
