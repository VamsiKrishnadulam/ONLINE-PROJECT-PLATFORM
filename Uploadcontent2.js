import React,{useState} from "react";
import "./Uploadcontent.css";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const Uploadcontent = (props) => {
  const [projectName,setprojectName]=useState('');
  const [autherName,setautherName]=useState('');
  const [description,setDescription]=useState('');
  const  handleSubmit= async(event)=>{
    // const formData=new FormData();
    // formData.append("file",files);
    const formData=new FormData();
    formData.append("files",files);
    formData.append("autherName",autherName);
    formData.append("projectName",projectName);
    formData.append("description",description);
    try {
         Axios.post("http://localhost:4000/newproject", formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
       // console.log("Successfully uploaded");
        props.showAlert("Successfully uploaded", "success");
        Navigate("/");
      } catch (error){
        console.log("vamsi")
        props.showAlert("Error uploading project", "error");
      }
  }

  const Navigate = useNavigate();

  const [files, setFiles] = useState([]);

  const onDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  

  return (
    <>
    <div className="container border border-primary rounded p-5 my-4 mb-6">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <label htmlFor="Project_name">
            <h3 className="text-primary">Project Name :</h3>
          </label>
          <input
            type="text"
            id="Project_name"
            name="Project_name"
            size="50"
            className="inputbox  rounded border-primary"
            onChange={(event)=>{
              setprojectName(event.target.value)
            }}
          />
          <br />
          <br />
          <label htmlFor="Author_Name">
            <h3 className="text-primary">Auther Name :</h3>
          </label>
          <input
            type="text"
            id="Author_Name"
            name="Author_Name"
            size="50"
            className="inputbox rounded  border-primary"
            onChange={(event)=>{
              setautherName(event.target.value)
            }}
          />
          <br />
          <br />
          <h3 className="description1 text-primary ">Description:</h3>
          <textarea  className="container description border-primary" onChange={(event)=>{
            setDescription(event.target.value)
          }}>
            
          </textarea>
          <br />
          <br />
          <h3 className="d-inline text-primary">Upload Your Code :</h3>
          
          <br />
      <div className="container my-5">
      <div
        className="text-center border border-primary rounded p-5"
        onDrop={onDrop}
        onDragOver={(e)=>{
          e.preventDefault();
        }}
      >
        <h3 className="text-primary">Drag and Drop Files</h3>
        <p className="text-primary">
          Drop files here or click to select files
        </p>
        <input type="file" className="text-white" multiple/> 
      </div>
      {files.length > 0 && (
        <div className="mt-3">
          <h4 className="text-primary">Dropped Files:</h4>
          <ul className="list-group">
            {Array.from(files).map((file) => (
              <li className="list-group-item" key={file.name}>
                {file.name} - {file.size} bytes
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
          
          <br />
          <br />
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Difficuty
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                EASY
              </a>
              <a className="dropdown-item" href="#">
                MEDIUM
              </a>
              <a className="dropdown-item" href="#">
                HARD
              </a>
            </div>
          </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-dark Publish" type='submit'
          
          >PUBLISH</button>
        </div>
        <br /><br /><br /><br />
        </form>
      </div>
      </div>
      <br /><br /><br /><br /><br /><br />
    </>
  );
};

export default Uploadcontent;
