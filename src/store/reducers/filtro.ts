import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  input: string
}

const initialState: FiltroState = {
  input: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    atualizarInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload
    }
  }
})

export const { atualizarInput } = filtroSlice.actions

export default filtroSlice.reducer
