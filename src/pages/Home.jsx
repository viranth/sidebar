import React from 'react';

import HomeBackround from "../Assets/BG.png"

const Home = () => {
    return (
        <div className='Home-backgroud' style={{ backgroundImage: `url(${HomeBackround})`}}>
            <h1>
                <div>WHERE</div>
                <div>TECHNOLOGY</div>
                <div>MEETS TOMMORROW</div>
            </h1>
        </div>
    );
};

export default Home;