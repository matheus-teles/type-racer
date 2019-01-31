import { combineReducers } from "redux";
import game from "./game";
import current_screen from "./screen";
import ranking from "./ranking";

export default combineReducers({ game, current_screen, ranking });