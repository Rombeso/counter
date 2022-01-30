import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorege-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState())

store.subscribe( ()=> {
    saveState(
        {
            counter: store.getState().counter
        }
    )
})


type AppStoreType = typeof store