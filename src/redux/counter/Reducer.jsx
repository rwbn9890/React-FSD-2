import { INC, DEC, RESET } from "./Action"

export const Reducer = (store={count:0}, action) => {

        // if(action.type == "INC")
        // {
        //     store.count++;
        //     return store
        // }
        // else if(action.type == "DEC")
        // {
        //     store.count--
        //     return store
        // }
        // else{
        //     return store;
        // }


        switch(action.type)
        {
            case INC :
                    return {
                        ...store,
                            count: store.count + 1
                    }
                 break

            case DEC : 
                        return  {
                        ...store,
                             count: store.count - 1
                    }
                 break;

            case RESET : 
                        return  {
                        ...store,
                             count: 0
                    }
                 break;

            default : return {...store}

                }

        return store;


}