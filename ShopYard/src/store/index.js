import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './ItemSlice'


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
        items: itemSlice.reducer
    }
})

export default StoreClone