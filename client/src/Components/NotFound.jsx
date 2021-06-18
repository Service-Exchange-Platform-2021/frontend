// IT'S NOT RESPONSIVE

import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Image from '../assets/images/work-in.png';

const NotFound = () => {
    return (
        <div id="notfound">
<div className="notfound-img">
    <img className="work-in" src={Image} alt="work-in-progress"/>
</div>
<div className="info">
           <h2>404</h2>
           <h4>Page not Found</h4> 
           <h6>We are coming soon!!!</h6>

           <div className="btn go-back">
           <Link to="/search">
           <Button variant="outline-danger" size="lg"  block>Back</Button>
           </Link>
           </div>
           </div>

        </div>
    )
}

export default NotFound
