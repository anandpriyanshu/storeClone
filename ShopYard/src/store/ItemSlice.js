
import { createSlice } from '@reduxjs/toolkit'
import { DEFAULT_ITEMS } from '../../../preBuiltBundle/old-clone/data/items'

const itemSlice = createSlice({
    name: 'items',
    initialState: DEFAULT_ITEMS,
    reducers: {
        addInitialItems: (state, action) => {
            return store
        }
    }
})

export const ItemAction = itemSlice.actions
export default itemSlice



