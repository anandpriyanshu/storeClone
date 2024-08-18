import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './ItemSlice'
import fetchStatusSlice from './fetchStatusSlice'


// const itemSlice = createSlice({
//     name: 'item',
//     initialState: [],
//     reducers: {
//         addInitialItems: (state, action) => {
//             return store
//         }
//     }
// })

const StoreClone = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer
    }
})

export default StoreClone