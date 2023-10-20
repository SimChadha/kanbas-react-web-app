import ModuleList from "../Modules/ModuleList";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";
import { useParams } from "react-router-dom";
import db from "../../Database";

function Home() {
  const { courseId } = useParams();
  const assignment = db.assignments.find((as) => as.course === courseId);

  return (
    <div className="row">
      <div className="col-10">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col-2">
        <div>
          <button type="button"
            class="btn btn-sm btn-secondary gray-button mt-4 mb-1 w-100 text-start">
            <i class="fa-solid fa-file-import"></i>
            Import Existing Content
          </button>
          <button type="button"
            class="btn btn-sm btn-secondary gray-button mb-1 w-100 text-start">
            <i class="fa fa-solid fa-c"></i>
            Import from Commons
          </button>
          <button type="button"
            class="btn btn-sm btn-secondary gray-button mb-1 w-100 text-start">
            <i class="fa-solid fa-location-crosshairs"></i>
            Choose Home Page
          </button>
          <button type="button"
            class="btn btn-sm btn-secondary gray-button mb-1 w-100 text-start">
            <i class="fa-solid fa-chart-simple"></i>
            View Course Stream
          </button>
          <button type="button"
            class="btn btn-sm btn-secondary gray-button mb-1 w-100 text-start">
            <i class="fa-solid fa-bullhorn"></i>
            New Announcement
          </button>
          <button type="button"
            class="btn btn-sm btn-secondary gray-button mb-1 w-100 text-start">
            <i class="fa-solid fa-chart-simple"></i>
            New Analytics
          </button>
          <button type="button"
            class="btn btn-sm btn-secondary gray-button mb-1 w-100 text-start">
            <i class="fa-regular fa-bell"></i>
            View Course Notifications
          </button>
        </div>

        <div class="bold-text mt-4">
          To Do
        </div>
        <hr />
        <div class="container mx-0">
          <div class="row justify-content-start">
            <div class="col-1 xs-text">
              <FaCircle style={{color: "red"}}/>
            </div>
            <div class="col xs-text text-start">
              <div>

                <Link className="acc-link"> {assignment.title}</Link>
              </div>
              100 points &#183 Sep 18 at 11:59PM
            </div>
            <div class="col-1 text-end">
              <i class="fa-solid fa-xmark fa-xs"></i>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <div class="container">
            <div class="row">
              <div class="col">
                <span class="bold-text float-start">
                  Coming Up
                </span>
              </div>
              <div class="col">
                <span class="float-end sm-text">
                  <i class="fa-regular fa-calendar"></i>
                  <Link class="acc-link">View Calendar</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
