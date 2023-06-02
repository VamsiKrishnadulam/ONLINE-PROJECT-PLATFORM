import React, { useState, useEffect } from "react";
import "./Content.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Content2(props) {
  const Navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [Searchtext,setSearchtext]=useState([]);
  const [Array,setArray]=useState([]);

  useEffect(() => {
    
    


    // setArray(Array1);
    console.log(Array);
    if(props.searchedFor ){
      setSearchtext('Search results:')
    }

    
  }, [props.searchedFor]);
  
  useEffect(() => {
     Axios.get(`http://localhost:4000`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <>
      {/* {projects.map((project) => {
        Array1.push(project.projectName);
      })} */}
      <br />
      <div className="container">
      <h3>{Searchtext}</h3>
      </div>
      <div className="container mt-5">
        <div className="accordion" id="accordionExample">



          {projects.map((project) => {
           
            if (project.projectName !== props.searchedFor) {
                
                // <div className="accordion-item">
                //   <div className="accordion-header" id="headingOne">
                //     <div className="card">
                //       <div
                //         className="accordion-button collapsed"
                //         data-bs-toggle="collapse"
                //         data-bs-target="#collapseOne"
                //         aria-expanded="false"
                //         aria-controls="collapseOne"
                //       >
                //         <h2>{project.projectName}</h2>
                //       </div>

                //       <div
                //         id="collapseOne"
                //         className="accordion-collapse collapse"
                //         aria-labelledby="headingOne"
                //         data-bs-parent="#accordionExample"
                //       >
                //         <div className="card-body">
                //           <div>
                //             <h5 className="description ">
                //               {project.description}
                //             </h5>
                //           </div>
                //           <div>
                //             <p className="information">
                //               <h4>Author-Name:{project.autherName}</h4>
                //               <h4>College-Name:</h4>
                //               <div>
                //                 <div className="d-flex justify-content-end">
                //                   <button
                //                     className="viewproject  btn btn-dark"
                //                     onClick={() => {
                //                       Navigate("/Viewprojectcontent", {
                //                         state: { project: project },
                //                       });
                //                       props.showAlert(
                //                         "In to the ViewProject",
                //                         "success"
                //                       );
                //                     }}
                //                   >
                //                     View project
                //                   </button>
                //                 </div>
                //               </div>
                //             </p>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // </div>

               
            } 
          
        else{
              return (
                
                <li className="list-group-item" key={project.projectName}>
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
                </li>
              );
            }
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
    </>
  );
}
export default Content2;
