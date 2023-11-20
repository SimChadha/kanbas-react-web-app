import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
function Dashboard(
  { courses, currentCourse, setCurrentCourse, addNewCourse,
    deleteCourse, updateCourse }
) {

  return (
    <div>
      <h1 className="ms-2">Dashboard</h1>
      <Form className="ms-4">
        <Row>
          <Col>
            <Form.Control value={currentCourse.name} type="text" placeholder="New Course Name"
              onChange={(e) => setCurrentCourse({ ...currentCourse, name: e.target.value })} />
          </Col>
          <Col>
            <Form.Control value={currentCourse.number} type="text" placeholder="Course Number (ex: CS1200)" onChange={(e) => setCurrentCourse({ ...currentCourse, number: e.target.value })} />
          </Col>
          <Col>
            <Form.Control value={currentCourse.startDate} type="date" placeholder="Start Date" onChange={(e) => setCurrentCourse({ ...currentCourse, startDate: e.target.value })} />
          </Col>
          <Col>
            <Form.Control value={currentCourse.endDate} type="date" placeholder="End Date" onChange={(e) => setCurrentCourse({ ...currentCourse, endDate: e.target.value })} />
          </Col>
          <Col>
            <Button variant='primary' onClick={() => updateCourse(currentCourse)}>Update</Button>
          </Col>
          <Col>
            <Button variant='success' onClick={addNewCourse}>+ Add Course</Button>
          </Col>
        </Row>
      </Form>
      <div class="d-flex flex-row flex-wrap">
        {courses && courses.map((course) => (
          <Link
            key={course._id.$oid}
            to={`/Kanbas/Courses/${course._id.$oid}`}
            className="list-group-item course-link"
          >
            <div class="card">
              <div class="card-img-top bg-info w-100 color-div"></div>
              <div class="card-body">
                <h5 class="card-text text-truncate card-course">
                    {course.number} 
                    {course.name}
                </h5>
                <p class="card-text grey-text text-truncate">
                  {course.number}.12631.202410
                </p>
                <p class="card-text grey-text text-truncate text-xs">
                  202410_1 Fall 2023 Semester Full Term
                </p>
                <div class="d-flex flex-row flex-wrap">
                  <Button
                    variant="light"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentCourse(course);
                    }}
                  >
                    <FaPenSquare />
                  </Button>
                  <Button
                    variant="light"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteCourse(course._id.$oid);
                    }}
                  >
                    <FaTrash />
                  </Button>
                </div>
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
