import {
    GET_ALL_MUSEUMS,
    SEARCH_MUSEUMS,
} from './actionTypes'
import * as ProductServices from '../../services/FetchProduct'
  
export function getAllMuseums() {
    return {
        type: GET_ALL_MUSEUMS,
    }
}

export function searchMuseum(searchString) {
    return {
        type: SEARCH_MUSEUMS,
        searchString
    }
}