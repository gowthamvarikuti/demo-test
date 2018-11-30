import {Reducer} from 'redux';

export const initialState: any = {
    result: {},
};

const reducer: Reducer<any> = (state: any = initialState, action) => {
    switch (action.type) {
        case 'GET_POKEMON':
            return {...state, result: [...action.payload.results]};
        default:
            return state;
    }
};

export default reducer;
