import { createSlice } from "@reduxjs/toolkit"
import { jobPost } from "../../types/company"
import { createJobPost, getJobPost } from "../actions/companyAcions"
 type CompanySliceType = {
    loading?:boolean,
    jobAdded?:boolean,
    update?:boolean,
    delete?:boolean,
    error?:string,
    jobs?:[jobPost]
}
const initialState: CompanySliceType= {}
const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {},
    extraReducers: builder => { 
        builder
        .addCase(createJobPost.pending, (state) => {
            state.loading= true
        })
        .addCase(createJobPost.fulfilled, (state) => {
            state.loading= false
            state.jobAdded= true
        })
        .addCase(createJobPost.rejected, (state, {payload}) => {
            state.loading= false
            state.error=payload as string
        })
        .addCase(getJobPost.pending, (state) => {
            state.loading= true
        })
        .addCase(getJobPost.fulfilled, (state, {payload}) => {
            state.loading= false
            state.jobs= payload
        })
        .addCase(getJobPost.rejected, (state, {payload}) => {
            state.loading= false
            state.error=payload as string
        })
    },
})
export default companySlice.reducer