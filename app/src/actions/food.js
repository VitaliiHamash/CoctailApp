import {ADD_FOOD, DELETE_FOOD, ADD_LOCAL_STORED_FOOD_LIST} from './types';

export const addFood = (food) => (
    {
        type: ADD_FOOD,
        data: food
    }
);


export const  deleteFood = (key) => (
    {
        type: DELETE_FOOD,
        key: key
    }
);


export const  addAllFoods = (foodStore) => (
    {
         type: ADD_LOCAL_STORED_FOOD_LIST,
         list: foodStore
    }
 );