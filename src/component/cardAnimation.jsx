import React from 'react';
import "./cardAnimation.scss";
import ImgCard from './imgCard';

const cardAnimation=(props) => {
    return (<>
        <div className="bg-blur"></div>
        <div className="cardAnimation">
             <img className="imgCard" src="./image/emp-1.jpg" alt="img" />
             <img className="imgCard" src="./image/emp-2.jpg" alt="img" />
             <img className="imgCard" src="./image/emp-3.jpg" alt="img" />
             <img className="imgCard" src="./image/emp-4.jpg" alt="img" />
            <img className="imgCard" src="./image/emp-5.jpg" alt="img" />
            <ImgCard className="ImgCard" />
        </div>
</>
    );  
}

export default cardAnimation;