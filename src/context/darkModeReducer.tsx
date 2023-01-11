import { DarkModeState } from "./darkModeContext";

export interface Action {
  type: string;
}

export const darkModeReducer = (state: DarkModeState, action: Action) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        darkMode: false,
      };
    }
    case "DARK": {
      return {
        darkMode: true,
      };
    }
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
}

export default darkModeReducer