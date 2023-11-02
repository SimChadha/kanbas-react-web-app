import { useParams } from "react-router-dom";
import db from "../../Database";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div>
      <Form className="ms-4">
        <Row>
          <Col>
            <Form.Control value={module.name} type="text" placeholder="New Course Name"
              onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
          </Col>
          <Col>
            <Form.Control value={module.description} type="text" placeholder="Course Number (ex: CS1200)" onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
          </Col>
          <Col>
            <Button variant='primary' onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</Button>
          </Col>
          <Col>
            <Button variant='success' onClick={() => dispatch(updateModule(module))}>Update</Button>
          </Col>
        </Row>
      </Form>
      <ul className="list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              {module.lessons &&
                module.lessons.map((lesson, index) => (
                  <div key={index}>
                    <h4>{lesson.name}</h4>
                    <p>{lesson.description}</p>
                  </div>
                ))}
                <div class="d-flex flex-row flex-wrap">
                  <Button
                    variant="light"
                    onClick={(e) => {
                      dispatch(setModule(module));
                    }}
                  >
                    <FaPenSquare />
                  </Button>
                  <Button
                    variant="light"
                    onClick={(e) => {
                      dispatch(deleteModule(module._id));
                    }}
                  >
                    <FaTrash />
                  </Button>
                </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
