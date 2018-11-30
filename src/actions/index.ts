import axios from 'axios';
import {Dispatch} from "redux";

const API_ROOT = 'https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2';

const limit = (count: number, p: number) => `limit=${count}&offset=${p ? p * count : 1}`;
const Pokemon = {
    all: (page: number) => {
        axios.get(`${API_ROOT}/pokemon/?${limit(10, page)}`).then((response: any) => {
            return response;
        })
    }
};

export const Pock = () => (dispatch: Dispatch) => {
    axios.get(`${API_ROOT}/pokemon/?${limit(10, 0)}`).then((response: any) => {
        dispatch({
            payload: response.data,
            type: 'GET_POKEMON',
        });
    })
};

export default Pokemon;
