import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: [],
    newData: JSON.parse(localStorage.getItem('list')) || []
}

const Slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        AddData: (state, action) => {
            state.data.push(action.payload)
            localStorage.setItem('list',JSON.stringify(state.data))
        },
        Search: (state, action) => {
            state.newData=state.data.filter((val) => {
                if ((val.Title).startsWith(action.payload)) {
                    return val
                }
            })
        }

    },
})




export const { AddData, Search } = Slice.actions
export default Slice.reducer