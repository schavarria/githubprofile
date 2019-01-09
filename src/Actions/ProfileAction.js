import axios from 'axios'
import store from '../store'

export function getProfile (){
    axios.get('https://api.github.com/users/schavarria').then( resp =>{
        store.dispatch({
            type:'GET_PROFILE',
            payload: resp.data
        })
    })
}