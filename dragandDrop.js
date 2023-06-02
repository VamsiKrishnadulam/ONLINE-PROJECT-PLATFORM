import React, { useState } from "react";

const DragAndDrop = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container my-5">
      <div
        className="text-center border border-primary rounded p-5"
        onDrop={onDrop}
        onDragOver={(e)=>{
          e.preventDefault();
        }}
      >
        <h3 className="text-primary">Drag and Drop Files</h3>
        <p className="text-white">
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
  );
};
export default DragAndDrop;