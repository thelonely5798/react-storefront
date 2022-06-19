import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector  } from 'react-redux'
// ...
import checkoutSlice from './features/checkoutSlice'
export const store = configureStore({
  reducer: {
    checkoutReducer: checkoutSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
