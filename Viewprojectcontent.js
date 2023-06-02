import React from 'react'
import { useLocation } from 'react-router-dom';
import "./Viewprojectcontent.css"


const Viewprojectcontent = () => {
  const location = useLocation();
  const  project=location.state;
  return (
    <>
    <br /><br />
    <div className='Viewproject '>
    <div className="container name">
      <h2>Project Name:{location.state.project.projectName}</h2>
    </div>
    <br />
    <div className="container description ">
    <h5>
        {location.state.project.description}
    </h5>
      <br />
      <br />
      <br />
    </div>
    {/* <div className="container Project my-3">
      <div className='border border-dark p-1'>
      <a href="/" className='anchor border-bottom border-dark '>
        
        <div className='container file' >
            index.html
        </div>
        
      </a>
      </div>
      <div className='border border-dark p-1'>
      <a href="/">
        <div className='container file'>
          App.js
        </div>
      </a>
      </div>
      <div className='border border-dark p-1'>
      <a href="/">
        <div className='container file'>
          App.css
        </div>
      </a>
      </div>
    </div> */}
    <div className="container details">
      <div className="lead ">
        <h3>Author-details</h3>
        <h4>Name:{location.state.project.autherName}</h4>
        <br />
        <h4>College:</h4>
      </div>
    </div>
    </div>
    <br /><br /><br /><br />
    </>
  )
}

export default Viewprojectcontent
