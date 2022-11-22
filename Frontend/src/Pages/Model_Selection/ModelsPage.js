import React from "react";
import { useState } from "react";
import './ModelsPage.css';
import RadioButtons from "../../Components/RadioButtons/RadioButtons";
import InputFiles from "../../Components/InputFiles/InputFiles";
import CompareImages from "../../Components/CompareImages/CompareImages";
import ImageInfo from "../../Components/ImageInfo/ImageInfo";
function ModelsPage(){
    const [SubmitClicked, setSubmitClicked]=useState(false);
    const [imageFile, setImageFile]=useState();
    const [resultImage,setResultImage] = useState({});
    
    return(
        <div  className="Area">
            <div>
                <div className="headings"><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/60/000000/external-features-copywriting-flaticons-lineal-color-flat-icons.png"/> Select Features </div>
                <hr></hr>
                <RadioButtons/>
            </div >
            <div >
                <div className="headings"><img src="https://img.icons8.com/clouds/90/000000/image.png"/> Select Input Image </div>
                <hr></hr>
            </div>
            <InputFiles setSubmitClicked={setSubmitClicked} setResultImage={setResultImage} imageFile={imageFile} setImageFile={setImageFile} />
            {
                SubmitClicked&&
                <div >
                    <div >
                        <div className="headings"><img src="https://img.icons8.com/dusk/60/000000/compare.png"/> Compare Images</div>
                        <hr></hr>
                        <CompareImages imageFile={imageFile} resultImage={resultImage} />
                    </div>
                    <div>
                        <div className="headings"><img src="https://img.icons8.com/bubbles/80/000000/information.png"/> Image Information</div>
                        <hr></hr>
                        <ImageInfo/>
                    </div>
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
            }
        </div>
    );
}
export default ModelsPage;