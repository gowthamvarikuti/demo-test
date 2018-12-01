import {Reducer} from 'redux';

export const initialState: any = {
    result: {},
};

const reducer: Reducer<any> = (state: any = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_POKEMON':
            return {...state, result: [...action.payload.results]};
            break;
        case 'GET_POKEMON':
            return {...state, pokemonData: {...action.payload}};
            break;
        default:
            return state;
            break;
    }
};

export default reducer;
