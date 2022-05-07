import { ADD_PLAYER, DELETE_PLAYER, EDIT_PLAYER, FETCH_PLAYERS } from '../actions/types';

const initialState = {
   players: [],
   loaded: false
}


export default function expensesReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_PLAYER:
         return {
            ...state,
            players: [...state.players, action.payload]
         }
      case FETCH_PLAYERS:
         return {
            ...state,
            players: action.payload,
            loaded: true
         }
      case EDIT_PLAYER:
         let updatedPlayers = state.players.map((player) => {
            if (player._id === action.payload._id) {
               player = action.payload;
            }
            return player;
         });
         return {
            ...state,
            players: updatedPlayers
         }
      case DELETE_PLAYER:
         return {
            ...state,
            players: state.players.filter((player) => player._id !== action.payload)
         }
      default:
         return state;
   }
}