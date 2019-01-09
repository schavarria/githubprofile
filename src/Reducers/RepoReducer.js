const  initialState = {
    repo:[]
}

export default function (state=initialState,action){
    switch(action.type){
        case 'GET_REPO':
            return {...state, repo: action.payload}
        default:
            return state
    }
}