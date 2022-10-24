import React from "react";
import '../stylessheets/Count.css';

function Count ({ numclicks }){
    return(
        <div className="count">
            {numclicks}
        </div>
    )
}

export default Count;