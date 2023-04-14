import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData();
    // console.log(tShirts)
    return (
        <div>
            <h1>{tShirts.length}</h1>
          {
              tShirts.map(tShirt => 
                <div key={tShirt._id}>
                    
                    <img src={tShirt.picture} alt="" />
                </div>
                )
          }

        </div>
    );
};

export default Home; 