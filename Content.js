import React from "react";
import "./Content.css";
import {useNavigate} from "react-router-dom";


function Content(props) {
  const Navigate=useNavigate();
  const viewproject=()=>{
    Navigate("/Viewprojectcontent");
    props.showAlert("In to the ViewProject","success");
  }
  
  return (
    <>
      
      
      <div className="container mt-5">
        <div className="accordion" id="accordionExample">
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
                  <h2>Visualizing and Forecasting stocks Using Dash</h2>
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
                        In this project you will be creating a single-page web
                        applications using Dash(a python framework) and also
                        machine learning models which will show company
                        information(logo,registered name and description )
                      </h5>
                    </div>
                    <div>
                      <p className="information">
                        <h4>Author-Name:</h4>
                        <h4>College-Name:</h4>
                        <div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="viewproject  btn btn-dark"
                              onClick={viewproject}
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
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <div className="card">
                <div
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h2>Prediction Bird Species</h2>
                </div>

                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div>
                      <h5 className=" description">
                        Manual classification of birds can be done by topic
                        experts, but it has become a hard and time-consuming
                        process due to the vast accumulation of data. Artificial
                        intelligence-based categorization becomes critical in
                        this situation. This classification-based AI project can
                        be approached in two ways.
                      </h5>
                    </div>
                    <div>
                      <p className="information">
                        <h4>Author-Name:</h4>
                        <h4>College-Name:</h4>
                        <div>
                          <div className="d-flex justify-content-end">
                            <button className="viewproject  btn btn-dark">
                              View project
                            </button>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </h2>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <div className="card">
                <div
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h2>Next Word Prediction</h2>
                </div>

                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div>
                      <h5 className="description ">
                      Its never easy to write rapidly and without making spelling
                  mistakes. It is not difficult to type correctly and quickly
                  while using a keyboard on a desktop computer, but typing on
                  small devices such as mobile phones is a different story, and
                  it can be frustrating for many of us.
                      </h5>
                    </div>
                    <div>
                      <p className="information">
                        <h4>Author-Name:</h4>
                        <h4>College-Name:</h4>
                        <div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="viewproject  btn btn-dark"
                              onclick="openproject()"
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
            </h2>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="headingFour">
              <div className="card">
                <div
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <h2>Heart Disease Prediction</h2>
                </div>

                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div>
                      <h5 className="description ">
                      From a medical standpoint, this project is advantageous
                  because it is designed to provide online medical advice and
                  guidance to individuals suffering from cardiac disorders. The
                  application will be taught and fed information about a variety
                  of various cardiac diseases.
                      </h5>
                    </div>
                    <div>
                      <p className="information">
                        <h4>Author-Name:</h4>
                        <h4>College-Name:</h4>
                        <div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="viewproject  btn btn-dark"
                              onclick="openproject()"
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
          <div className="accordion-item">
            <div className="accordion-header" id="headingFive">
              <div className="card">
                <div
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <h2>Automated Attendance System</h2>
                </div>

                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div>
                      <h5 className="description ">
                      An automatic attendance system is one that keeps track of
                  individuals’ attendance at a school. Unlike a traditional
                  attendance system, automatic attendance software allows staff
                  to record, store, and monitor students’ attendance history
                  while also efficiently managing the classroom.
                      </h5>
                    </div>
                    <div>
                      <p className="information">
                        <h4>Author-Name:</h4>
                        <h4>College-Name:</h4>
                        <div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="viewproject  btn btn-dark"
                              onclick="openproject()"
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
        </div>
      </div>
    </>
  );
}
export default Content;
