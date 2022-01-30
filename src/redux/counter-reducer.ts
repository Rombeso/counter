const SET_DATA = 'SET_DATA'
const SET_MIN_VALUE = 'SET_MIN_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_ERROR_SETTINGS = 'SET_ERROR_SETTINGS'
const SET_ERROR = 'SET_ERROR'
const SET_PRESS_SET = 'SET_PRESS_SET'
const CHANGE_DATA = 'CHANGE_DATA'

const initialState: initialStateType = {
    data: 0,
    minValue: 0,
    maxValue: 0,
    errorSettings: null,
    error: null,
    pressSet: null,
}

type initialStateType = {
    data: number,
    minValue: number,
    maxValue: number,
    errorSettings: string | null,
    error: string | null,
    pressSet: string | null,
}
// type InitialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload.data
            }

        case CHANGE_DATA:
            return {
                ...state.data === action.payload.minValue
                    ? {...state, data: state.data}
                    : {...state, data: action.payload.minValue}
            }

        case SET_ERROR:
            return {
                ...state,
                error: action.payload.error
            }

        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.payload.maxValue
            }

        case SET_MIN_VALUE:
            return {
                ...state,
                minValue: action.payload.minValue
            }

        case SET_ERROR_SETTINGS:
            return {
                ...state,
                errorSettings: action.payload.errorSettings
            }

        case SET_PRESS_SET:
            return {
                ...state,
                pressSet: action.payload.pressSet
            }

        default:
            return state
    }
}
type ActionType = SetDataType
    | ChangeDateType
    | SetErrorType
    | SetMaxValueType
    | SetMinValueType
    | SetErrorSettingsType
    | SetPressSetType

export type SetDataType = ReturnType<typeof setData>
export const setData = (data: number) => (
    {type: SET_DATA, payload: {data}} as const)

export type ChangeDateType = ReturnType<typeof changeData>
export const changeData = (minValue: number) => (
    {type: CHANGE_DATA, payload: {minValue}} as const)

export type SetErrorType = ReturnType<typeof setError>
export const setError = (error: string | null) => (
    {type: SET_ERROR, payload: {error}} as const)

export type SetMaxValueType = ReturnType<typeof setMaxValue>
export const setMaxValue = (maxValue: number) => (
    {type: SET_MAX_VALUE, payload: {maxValue}} as const)

export type SetMinValueType = ReturnType<typeof setMinValue>
export const setMinValue = (minValue: number) => (
    {type: SET_MIN_VALUE, payload: {minValue}} as const)

export type SetErrorSettingsType = ReturnType<typeof setErrorSettings>
export const setErrorSettings = (errorSettings: string | null) => (
    {type: SET_ERROR_SETTINGS, payload: {errorSettings}} as const)

export type SetPressSetType = ReturnType<typeof setPressSet>
export const setPressSet = (pressSet: string | null) => (
    {type: SET_PRESS_SET, payload: {pressSet}} as const)