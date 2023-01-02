import React from 'react';
import {AuthContext} from '../../context/AuthContext';

const Home = () => {
  return (<>
      
      <AuthContext.Consumer>
        {({authorize}) => (<>
            {authorize ? <div>you have been logged</div> : <div> you are not
              logger</div>
              
            }
          </>)}
      </AuthContext.Consumer>
      <div>Home</div>
    </>);
};
export default Home;
