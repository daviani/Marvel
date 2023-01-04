import axios from 'axios';
import md5 from 'md5';
import {characters, marvelURL, privateKey, publicKey} from './global';

const ts = new Date().getTime();
const stringToHash = ts + privateKey + publicKey;
const hash = md5(stringToHash);

export const getAllCharacters = () => {
  return axios.get(
    `${marvelURL}${characters}?limit=10&ts=${ts}&apikey=${publicKey}&hash=${hash}`,
  );
};
