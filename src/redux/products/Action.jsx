export const All_PRODUCTS = "ALL_PRODUCTS";
export const NEXT_PAGE = "NEXT_PAGE"
export const ALL_CATEGORIES = "ALL_CATEGORIES"
export const SET_CATEGORIES = "SET_CATEGORIES"


export function allProducts(data){
    return {
        type:All_PRODUCTS,
        payload:data
    }
}

export function allCategories(data){
    return {
        type:ALL_CATEGORIES,
        payload:data
    }
}

export function filterCategories(slug){
    return {
        type:SET_CATEGORIES,
        payload:slug
    }
}

export function nextPage(){
    return {
        type:NEXT_PAGE
    }
}