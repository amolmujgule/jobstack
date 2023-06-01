import { createSlice } from "@reduxjs/toolkit"
import { login, register, registerCompany } from "../actions/publicActions"
 type publicSliceType = {
    loading?:boolean,
    reigstered?:boolean,
    companyReigstered?:boolean,
    update?:boolean,
    delete?:boolean,
    error?:string,
    info?:{
        id:number,
        email:string,
        name:string,
    },
}
const initialState: publicSliceType= {}
const publicSlice = createSlice({
    name: "public",
    initialState,
    reducers: {},
    extraReducers: builder => { 
        builder
        .addCase(register.pending, (state) => {
            state.loading= true
        })
        .addCase(register.fulfilled, (state) => {
            state.loading= false
            state.reigstered= true
        })
        .addCase(register.rejected, (state, {payload}) => {
            state.loading= false
            state.error=payload as string
        })

        // Loing 
        .addCase(login.pending, (state) => {
            state.loading= true
        })
        .addCase(login.fulfilled, (state, {payload}) => {
            state.loading= false
            state.info = payload
        })
        .addCase(login.rejected, (state, {payload}) => {
            state.loading= false
            state.error=payload as string
        })

        .addCase(registerCompany.pending, (state) => {
            state.loading= true
        })
        .addCase(registerCompany.fulfilled, (state) => {
            state.loading= false
            state.companyReigstered= true
        })
        .addCase(registerCompany.rejected, (state, {payload}) => {
            state.loading= false
            state.error=payload as string
        })
    },
})
export default publicSlice.reducer