import React, {useState,useEffect} from "react";
import "./Searchbar.css";

function Searchbar(props){
  const [searchVal, setSearchVal] = useState('');
  
  return (
    <>
    <form action="">
      <div className="d-flex justify-content-center mt-5">
        <input
          type="search"
          
          onChange={(event)=>{
            const searched=event.target.value;
            setSearchVal(searched);
          }}
          placeholder="Search Here"
          className="searchbar col-5"
          onKeyUp={()=>{
            props.onSearch(searchVal);
          }}
        />
        <div className="btn btn-dark"  type='submit' onClick={()=>{
          props.onSearch(searchVal);
        }}>Search</div>
      </div>
      <div className="container  d-flex inline-block my-3">
        <button className="tags btn  ml-5" onClick={(e)=>{
          e.preventDefault();
          props.onSearch('MachineLearning');
          
        }}>
          MachineLearning
        </button>
        <button className="tags btn mx-2"  onClick={(e)=>{
          e.preventDefault();
          props.onSearch("ComputerScience");
          
        }}>
          ComputerScience
        </button>
        <button className="tags btn mx-2"  onClick={(e)=>{
          e.preventDefault();
          props.onSearch("EEE");
          
        }}>
          EEE
        </button>
        <button className="tags btn mx-2"  onClick={(e)=>{
          e.preventDefault();
          props.onSearch("ECE");
        
        }}>
          ECE
        </button>
        <button className="tags btn mx-2"  onClick={(e)=>{
          e.preventDefault();
          props.onSearch("Python");
          
        }}>
          Python
        </button>
        <button className="tags btn mx-2"  onClick={(e)=>{
          e.preventDefault();
          props.onSearch("JAVA");
          
        }}>
          JAVA
        </button>

      </div>
    </form>
     
    </>
  );
}
export default Searchbar;
