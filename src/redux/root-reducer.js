import { combineReducers } from "redux";
import albumReducer from "./album/album.reducer";

const rootReducer = combineReducers({
    albums: albumReducer
})

export default rootReducer