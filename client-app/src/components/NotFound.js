import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return(
        <div>
            {/* <img src={PageNotFound}  /> */}
            <p style={{textAlign:"center"}}>
                <h2>NOTHING! EMPTY!</h2>
              <Link to="/">Go to Home </Link>
            </p>
        </div>
    )
    }

export default NotFound;