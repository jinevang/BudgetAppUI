import { combineReducers, configureStore, ConfigureStoreOptions, Reducer } from "@reduxjs/toolkit";
import appReducer, { AppState } from "../reducers"; // Adjust the import path as necessary
import { TypedUseSelectorHook, useSelector } from "react-redux";

export type RootReducer = {
	app: Reducer<AppState>
}

export const reducerObject = {
	app: appReducer
}

export const rootReducers = combineReducers<RootReducer>(reducerObject);

const storeConfig: ConfigureStoreOptions = {
  reducer: rootReducers,
  devTools: true,
};


export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
		...storeConfig,
    preloadedState,
  });
	
export const store = configureStore(storeConfig);
console.log("Initial State:", store.getState());

// Subscribe to log updated state
store.subscribe(() => {
	console.log("Updated State:", store.getState());
});

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
