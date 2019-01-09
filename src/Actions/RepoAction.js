import axios from 'axios'
import store from '../store'

export function getRepo (){
    axios.get('https://api.github.com/users/schavarria/repos').then( resp =>{
        console.log (resp.data)
        store.dispatch({
            type:'GET_REPO',
            payload: resp.data
        })
    })
}