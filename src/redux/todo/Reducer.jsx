function reducer = (store = [], action) => {

    switch(action.type)
    {
        case "ADD_TODO" : 
            return [
                ... store,
                action.payload
            ]
    }
    return
}