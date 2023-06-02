import React, { useState, useEffect } from "react";
import "./Content.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Content2(props) {
  const Navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [include,setInclude]=useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:4000`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const Array1 = [];
  console.log(Array1);
  


  return (
    <>
    <div>
      {projects.map((project) => {
        Array1.push(project.projectName);
      })}

      {Array1.includes(props.searchedFor)===true &&
        <div className="container mt-5">
        <div className="accordion" id="accordionExample"> 
          {projects.map((project) => {
            //console.log( props.searchedFor)
            if (project.projectName === props.searchedFor) {
              console.log(props.searchedFor);
              console.log("vamsi")
              console.log(Array1.includes(props.searchedFor));
              
                <div className="accordion-item">
                  <div className="accordion-header" id="headingOne">
                    <div className="card">
                      <div
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <h2>{project.projectName}</h2>
                      </div>

                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div>
                            <h5 className="description ">
                              {project.description}
                            </h5>
                          </div>
                          <div>
                            <p className="information">
                              <h4>Author-Name:{project.autherName}</h4>
                              <h4>College-Name:</h4>
                              <div>
                                <div className="d-flex justify-content-end">
                                  <button
                                    className="viewproject  btn btn-dark"
                                    onClick={() => {
                                      Navigate("/Viewprojectcontent", {
                                        state: { project: project },
                                      });
                                      props.showAlert(
                                        "In to the ViewProject",
                                        "success"
                                      );
                                    }}
                                  >
                                    View project
                                  </button>
                                </div>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            } 
            
        
          })}
        </div>
      </div>
      }
      {Array1.includes(props.searchedFor)===false   && 
        <div className="container mt-5">
        <div className="accordion" id="accordionExample"> 
          {projects.map((project) => {
            
            if (project.projectName !== props.searchedFor) {
              
                <div className="accordion-item">
                  <div className="accordion-header" id="headingOne">
                    <div className="card">
                      <div
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <h2>{project.projectName}</h2>
                      </div>

                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div>
                            <h5 className="description ">
                              {project.description}
                            </h5>
                          </div>
                          <div>
                            <p className="information">
                              <h4>Author-Name:{project.autherName}</h4>
                              <h4>College-Name:</h4>
                              <div>
                                <div className="d-flex justify-content-end">
                                  <button
                                    className="viewproject  btn btn-dark"
                                    onClick={() => {
                                      Navigate("/Viewprojectcontent", {
                                        state: { project: project },
                                      });
                                      props.showAlert(
                                        "In to the ViewProject",
                                        "success"
                                      );
                                    }}
                                  >
                                    View project
                                  </button>
                                </div>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            } 
          
        
          })}
        </div>
      </div>
}


      <br />
      <br />
      <br />
      <br /> <br />
      <br />
    </div>
    </>
  );
}
export default Content2;
