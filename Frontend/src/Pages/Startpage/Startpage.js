import React from "react";
import axios from "axios";
import { useState } from "react";
function Startpage(){
    const baseURL = "http://127.0.0.1:5000/Mask";
    //const [post, setPost] = useState(null);
    const [img,setImage] = useState(null);
    const [fileName,setFileName] = useState("");
    function HandleClick(){
        axios.post(baseURL).then((response) => {
            
          });
    }
    function HandleChange(e){
        if (e.target.files && e.target.files[0]) {
            setImage((e.target.files[0]));
            console.log(e.target.value.split('\\')[2])
            setFileName(e.target.value.split('\\')[2])
          }
    }
    function HandleUpload(){
        const data = new FormData();
        data.append('file',img);
        axios.post(baseURL,data).then((response) => {
            console.log(response);
            GetImage();
        });
    }
    function GetImage(){
        axios.get(baseURL,{ params: { "fileName": fileName },responseType: 'blob' }).then((response)=>{
            console.log(response);
            setImage(URL.createObjectURL(response.data))
        })
    }
    return (
        <div>
            <div className="input-group">
                <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={HandleChange} />
                <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={HandleClick}>Button</button>
            </div>
            <img src={img}></img>
            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon05" onClick={HandleUpload}>Upload</button>
        </div>
    );
}

export default Startpage;