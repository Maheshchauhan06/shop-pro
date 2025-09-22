import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/authentication/store/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add more reducers here as you build features
    // products: productsReducer,
    // cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
