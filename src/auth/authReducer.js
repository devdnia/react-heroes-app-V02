import { types } from '../types/types';

/*
Idea de state:
const state = {
    name: 'Ivan',
    logged: true,
}
*/

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.logged:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }

         default:
             return state;
                
    }
}