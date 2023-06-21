
import React, { useState, useEffect } from "react";
import "./Content.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Content3(props) {
  const Navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [include, setInclude] = useState([]);
  const [Array1, setArray1] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchValue,setSearchValue]=useState("")
  useEffect(() => {
    Axios.get("http://localhost:4000")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    projects.map((project) => {
      setArray1((prev) => [...prev, project.projectName]);
    });
  }, [projects]);

  const handleAccordionClick = (projectName) => {
    setActiveAccordion(activeAccordion === projectName ? null : projectName);
  };

  return (
    <>
      <div className="container my-4">
        <form className="search-form my-4">
          <br />
          <div className="container my-4">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                  />
                  <button type="submit" className="btn btn-dark">
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {searchValue &&
          projects.map((project) => {
            if (project.projectName === searchValue) {
              return (
                <div className="accordion-item" key={project.projectName}>
                  <div className="accordion-header" id={`heading-${project.projectName}`}>
                    <div
                      className={`card card-wide p-2 ${activeAccordion === project.projectName ? 'active' : ''}`}
                      style={{
                        width: '100%',
                      }}
                    >
                      <div
                        className="accordion-button collapsed"
                        onClick={() => handleAccordionClick(project.projectName)}
                        aria-expanded={activeAccordion === project.projectName}
                        aria-controls={`collapse-${project.projectName}`}
                      >
                        <h2>{project.projectName}</h2>
                      </div>
                      <div
                        id={`collapse-${project.projectName}`}
                        className={`accordion-collapse collapse ${activeAccordion === project.projectName ? 'show' : ''}`}
                        aria-labelledby={`heading-${project.projectName}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <h3>Description</h3>
                          <div>
                            <h5 className="description">{project.description}</h5>
                          </div>
                          <div>
                            <p className="information">
                              <h4>Author-Name: {project.autherName}</h4>
                              <h4>College-Name:</h4>
                              <div className="d-flex justify-content-end">
                                <button
                                  className="viewproject btn btn-dark"
                                  onClick={() => {
                                    Navigate("/Viewprojectcontent", {
                                      state: { project: project },
                                    });
                                    props.showAlert("In to the ViewProject", "success");
                                  }}
                                >
                                  View project
                                </button>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        {!searchValue &&
          projects.map((project) => {
            return (
              <div className="accordion-item" key={project.projectName}>
                <div className="accordion-header" id={`heading-${project.projectName}`}>
                  <div
                    className={`card card-wide p-2 ${activeAccordion === project.projectName ? 'active' : ''}`}
                    style={{
                      width: '100%'
                    }}
                  >
                    <div
                      className="accordion-button collapsed"
                      onClick={() => handleAccordionClick(project.projectName)}
                      aria-expanded={activeAccordion === project.projectName}
                      aria-controls={`collapse-${project.projectName}`}
                    >
                      <h2>{project.projectName}</h2>
                    </div>
                    <div
                      id={`collapse-${project.projectName}`}
                      className={`accordion-collapse collapse ${activeAccordion === project.projectName ? 'show' : ''}`}
                      aria-labelledby={`heading-${project.projectName}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="">
                      
                          <h5 className="description">Description : {project.description}</h5>
                        </div>
                        <br />
                        <div>
                          <p className="information">
                            <h4>Author-Name : {project.authorName}</h4>
                           
                            <div className="d-flex justify-content-end">
                              <button
                                className="viewproject btn btn-dark"
                                onClick={() => {
                                  Navigate("/Viewprojectcontent", {
                                    state: { project: project },
                                  });
                                  props.showAlert("In to the ViewProject", "success");
                                }}
                              >
                                View project
                              </button>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Content3;
