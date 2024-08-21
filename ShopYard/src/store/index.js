import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './ItemSlice'
import fetchStatusSlice from './fetchStatusSlice'
import bagSlice from './bagSlice'



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
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer
    }
})

export default StoreClone