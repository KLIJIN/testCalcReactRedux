import {ADD, SUB, MULTIP, ADD_NUMBER, ADD2, SUB2} from "./actionTypes"

export function add() {
    return {
        type: ADD
    }
};

export const sub = () => {
    return {type: SUB} 
}

export function multip() {
    return {
        type: MULTIP
    }
};

export function add_number(number) {
    return {
        type: ADD_NUMBER,
        payload: number
    }
};

export function add2(number) {
    return {
        type: ADD2,
        payload: number
    }
};

export function sub2(number) {
    return {
        type: SUB2,
        payload: number
    }
};