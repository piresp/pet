import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Actions
export const { toggleTheme } = themeSlice.actions;

// Selectors
export const selectDarkMode = (state: { theme: ThemeState }) => state.theme.darkMode;

export default themeSlice.reducer;
