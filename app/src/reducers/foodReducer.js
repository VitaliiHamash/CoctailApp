import {ADD_FOOD, DELETE_FOOD, ADD_LOCAL_STORED_FOOD_LIST} from '../actions/types';

const initialState = {
    foodList:[]
}

const foodReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FOOD:
        return {
            ...state,
        foodList: state.foodList.concat({
            key: Math.random(),
            name: action.data
           })
        };
        case DELETE_FOOD:
            return {
                ...state,
                foodList: state.foodList.filter((item) =>
                item.key !== action.key)
            };
        case ADD_LOCAL_STORED_FOOD_LIST:
            return {
                    ...state,
                    foodList:state.foodList.concat(action.list)
            }
        default:
            return state;
    }
}

export default foodReducer;