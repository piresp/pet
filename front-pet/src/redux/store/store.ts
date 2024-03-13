import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from '../slices/theme';
import { menuSlice } from '../slices/menu';

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    menu: menuSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
