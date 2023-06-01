import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobPost } from "../../types/company";
import API from "../api";

export const createJobPost = createAsyncThunk("job", async(jobData:jobPost, {rejectWithValue}) => {
    try {
        const {data} = await  API.post("/jobs" ,jobData )
        return true
    } catch (error:any) {
        return rejectWithValue(error.message || "Something went wrong")
    }
})
export const getJobPost = createAsyncThunk("get-job", async(jobData, {rejectWithValue}) => {
    try {
        const {data} = await  API.get("/jobs" )
        return data
    } catch (error:any) {
        return rejectWithValue(error.message || "Something went wrong")
    }
})