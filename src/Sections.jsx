import React, { useState } from "react";
import "./section.css";

const Sections = (props)=>{
    const [readmore, setReadmore] = useState(false);
    const {id, image, info, price, name} = props.data;
    return(
        <div id="section-grid">
            <img src={image}></img>
            <div className="textBox">
                <div className="flex-line">
                    <div><h4>{name}</h4></div>
                    <div className="cost"><h4>{price}</h4></div>
                </div>
                <div className="info">
                    <p>{readmore ? info : info.substring(0, 200) + '....'}
                    <button className="readbtn" onClick={()=>{setReadmore(!readmore)}}>{readmore ? "read less" : "read more"}</button>
                    </p>
                    
                </div>
                
            </div>           
            <button className="btn">Book Now</button>
        </div>

        
        
    )
}

export default Sections;