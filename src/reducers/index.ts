import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

export interface AppState {
	screen: string;
	currentYear: null | number;
	currentMonth: null | number;
}

export const initialState: AppState = {
	screen: 'all',
	currentYear: moment().year(),
	currentMonth: moment().month()
}

export const appSlice = createSlice({
	
	name: 'app',
	initialState,
	reducers: {
		setCurrentScreen: (state: AppState, action: PayloadAction<{screen: string}>) => {
			const { screen } = action.payload;
			const newState = state;
			newState.screen = screen;
			return newState;
		},
		setCurrentMonth: (state: AppState, action: PayloadAction<{month: number | null}>) => {
			const { month } = action.payload;
			const newState = state;
			newState.currentMonth = month;
			return newState;
		},
		setCurrentYear: (state: AppState, action: PayloadAction<{year: number}>) => {
			const { year } = action.payload;
			const newState = state;
			newState.currentYear = year;
			return newState;
		},
	}
});

export const {
	setCurrentScreen,
	setCurrentMonth,
	setCurrentYear
} = appSlice.actions;

export default appSlice.reducer;