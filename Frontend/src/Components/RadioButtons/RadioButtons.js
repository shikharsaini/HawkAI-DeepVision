import React from "react";
import './RadioButtons.css';
function RadioButtons(){
    return(
        <div >
            <div className="radio" >
            <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label RadioButtons" htmlFor="flexCheckDefault">
                    Mask Detection
                </label>
                </div>
                <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label RadioButtons" htmlFor="flexCheckDefault">
                      Tshirt Detection
                </label>
                </div>
                <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label RadioButtons" htmlFor="flexCheckDefault">
                      Emotion Detection
                </label>
                </div>
                <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label RadioButtons" htmlFor="flexCheckDefault">
                      Spectacles Detection
                </label>
                </div>
                <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label RadioButtons" htmlFor="flexCheckDefault">
                      Object Detection
                </label>
                </div>
            </div>
        </div>
    );
}
export default RadioButtons;