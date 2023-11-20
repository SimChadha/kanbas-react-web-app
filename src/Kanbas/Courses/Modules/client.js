import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";
const MODULES_URL = "http://localhost:4000/api/modules";

export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const findModulesForCourse = async (courseNum) => {
    const response = await axios
        .get(`${COURSES_URL}/${courseNum}/modules`);
    return response.data;
};

export const createModule = async (courseId, module) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/modules`,
      module
    );
    return response.data;
  };  

export const findCourseById = async (courseId) => {
    const response = await axios.get(
        `${COURSES_URL}/${courseId}`
    );
    return response.data;
};

export const updateModule = async (module) => {
    const response = await axios.
      put(`${MODULES_URL}/${module._id.$oid}`, module);
    return response.data;
  };
  
