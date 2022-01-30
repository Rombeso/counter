import {AppStateType} from "../redux/store";

export const loadState = () => {

    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return (
            JSON.parse(serializedState)
        )

    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStateType) => {
    try {
        const serializedStateMax = JSON.stringify(state)
        localStorage.setItem('state', serializedStateMax);
    } catch {
        // ignore write errors
    }
};