import axios from 'axios';

const initialState = {
    player: [],
    isLoading: false,
    me: [],
    myteam1: [],
    myteam2: [],
    myteam3: []
};


const GET_PLAYERS = 'GET_PLAYERS'
const GET_TEAM2 = 'GET_TEAM2'
const GET_TEAM3 = 'GET_TEAM3'
const SET_PLAYERID = 'SET_PLAYERID'
const GET_ME = 'GET_ME'
const GET_MY_TEAM1 = 'GET_TEAM1'
const GET_MY_TEAM2 = 'GET_TEAM2'
const GET_MY_TEAM3 = 'GET_TEAM3'


export const get_players = () => {
    return {
        type: GET_PLAYERS,
        payload: axios.get('/api/players')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}

export const get_team2 = () => {
    return {
        type: GET_TEAM2,
        payload: axios.get('/api/team2')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}

export const get_team3 = () => {
    return {
        type: GET_TEAM3,
        payload: axios.get('/api/team3')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}

export const get_me = () => {
    return {
        type: GET_ME,
        payload: axios.get('/api/myacc')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}

export const getMyTeam1 = () => {
    return {
        type: GET_MY_TEAM1,
        payload: axios.get('/api/myteam1')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}

export const getMyTeam2 = () => {
    return {
        type: GET_MY_TEAM2,
        payload: axios.get('/api/myteam2')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}

export const getMyTeam3 = () => {
    return {
        type: GET_MY_TEAM3,
        payload: axios.get('/api/myteam3')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}


export default function playerReducer(state = initialState, action){
    switch(action.type){
        case `${GET_PLAYERS}_PENDING`:
            return{
                ...state,
                isLoading: true
            }
        case `${GET_PLAYERS}_FULFILLED`:

            return Object.assign({}, state, {player: action.payload} )

        case `${GET_PLAYERS}_REJECTED`:
            return {
                ...state,
                isLoading: false
            }

            case `${GET_TEAM2}_PENDING`:
            return{
                ...state,
                isLoading: true
            }
        case `${GET_TEAM2}_FULFILLED`:

            return Object.assign({}, state, {team2: action.payload})

        case `${GET_TEAM3}_PENDING`:
            return{
                ...state,
                isLoading: true
            }
        case `${GET_TEAM3}_FULFILLED`:

            return Object.assign({}, state, {team3: action.payload}) 
        
        case `${GET_ME}_PENDING`:
            return{
                ...state,
                isLoading: true
            }
        case `${GET_ME}_FULFILLED`:

            return Object.assign({}, state, {me: action.payload} )

        case `${GET_ME}_REJECTED`:
            return {
                ...state,
                isLoading: false
            }

        case `${GET_MY_TEAM1}_PENDING`:
            return{
                ...state,
                isLoading: true
            }
        case `${GET_MY_TEAM1}_FULFILLED`:

            return Object.assign({}, state, {myteam1: action.payload} )

        case `${GET_MY_TEAM1}_REJECTED`:
            return {
                ...state,
                isLoading: false
            }

        case `${GET_MY_TEAM2}_PENDING`:
            return{
                ...state,
                isLoading: true
            }
        case `${GET_MY_TEAM2}_FULFILLED`:

            return Object.assign({}, state, {myteam2: action.payload} )

        case `${GET_MY_TEAM2}_REJECTED`:
            return {
                ...state,
                isLoading: false
            }

        case `${GET_MY_TEAM3}_PENDING`:
            return{
                ...state,
                isLoading: true
            }
        case `${GET_MY_TEAM3}_FULFILLED`:

            return Object.assign({}, state, {myteam3: action.payload} )

        case `${GET_MY_TEAM3}_REJECTED`:
            return {
                ...state,
                isLoading: false
            }
        default:
    return state;
}
}