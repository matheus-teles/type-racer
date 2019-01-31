import { CHANGE_SCREEN } from "../actionTypes"

export default function (state = 0, action) {
  if(action.type === CHANGE_SCREEN) return action.payload.current_screen
  return state
}