import { ALL_CATEGORIES, All_PRODUCTS, NEXT_PAGE, SET_CATEGORIES } from "./Action";

export const productReducer = (state = { 
                                        product: [],
                                        page: { no: 1, skip: 0 },
                                        categories:[],
                                        filterCategories:""
                                       },
                                        action
    ) => {

    switch (action.type) {
        case All_PRODUCTS:
            state.product = action.payload.products
            break;
        case ALL_CATEGORIES:
            state.categories = action.payload
            break
        case SET_CATEGORIES:
            state.filterCategories = action.payload
            break
        case NEXT_PAGE:
            state.page.no = state.page.no + 1;
            state.page.skip = state.page.skip + 8;
            break
        default: state
    }

    return { ...state }
}