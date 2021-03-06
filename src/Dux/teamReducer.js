import axios from 'axios';

const initialState = {
    teams: [],
    isLoading: false
};

const GET_TEAMS = 'GET_TEAMS'
const GET_PLAYERS = 'GET_PLAYERS'

export const get_teams = () => {
    return {
        type: GET_TEAMS,
        payload:
        axios.get('/api/teams')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}

export const get_players_for_teams = () => {
    return {
        type: GET_PLAYERS,
        payload:
        axios.post('/api/teams')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}

export default function playerReducer(state = initialState, action){
    switch(action.type){
        case `${GET_TEAMS}_PENDING`:
        return{
            ...state,
            isLoading: true
        }
        case `${GET_TEAMS}_FULFILLED`:
        return{
            ...state,
            teams: action.payload
        }
        case `${GET_TEAMS}_REJECTED`:
        return{
            ...state,
            isLoading: false
        }
        case `${GET_PLAYERS}_FULFILLED`:
            var newState = {};
            var newArr = action.payload;
    default:
    return state;
    }
}