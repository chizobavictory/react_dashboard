import { createContext, useReducer } from "react";
import { darkModeReducer } from './darkModeReducer';

export interface DarkModeState {
  darkMode: boolean;
}
export const initialState: DarkModeState = { darkMode: false };


export const DarkModeContext = createContext({
  darkMode: initialState.darkMode,
  dispatch: (action: any) => {}
});

export const DarkModeProvider: React.FC<{children: React.ReactNode}> = (props) => {
  const [state, dispatch] = useReducer(darkModeReducer, initialState);
  return <DarkModeContext.Provider value={{...state, dispatch}}>{props.children}</DarkModeContext.Provider>
};


export default DarkModeProvider;
