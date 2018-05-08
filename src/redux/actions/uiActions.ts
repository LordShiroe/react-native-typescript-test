import { CHANGE_COLOR } from './types'

export const updateColor = (newColor: string) => ({ type: CHANGE_COLOR, payload: newColor })