import React, {useState} from 'react';
import {getAllCharacters} from '../../api/marvel/request';

const Characters = () => {
  const [state, setState] = useState();
  getAllCharacters().then(r => {
    setState(r.data);
  });
  
  return (<div>Characters</div>);
};
export default Characters;
