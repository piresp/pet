import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
  isMenuActive: boolean;
}

const initialState: MenuState = {
  isMenuActive: false
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuActive = !state.isMenuActive;
    }
  }
});

export const { toggleMenu } = menuSlice.actions;

export const selectIsMenuActive = (state: { menu: MenuState }) => state.menu.isMenuActive;

export default menuSlice.reducer;
