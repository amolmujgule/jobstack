import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { createJobPost, getJobPost } from '../../redux/actions/companyAcions'

const Jobs = () => {
  const [tabal, setTabal] = useState()
const dispatch = useAppDispatch()
const {loading , error, jobAdded , jobs}= useAppSelector(state => state.company)
const {info}= useAppSelector(state => state.public)
  const handleAddJob = () =>{
if (info) {
  dispatch(createJobPost({
    city:"pune",
    desc:"full stack Developer",
    experience:"0-1 year",
    salary: 20000,
    title:"jr.Developer",
    companyId:info.id ,
    companyName:info.name 
  }))
}
  }


  useEffect(()=> {
   dispatch(getJobPost())
setTabal(jobs)
  },[])
  const arg = <table class="table table-dark table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">city</th>
      <th scope="col">desc</th>
      <th scope="col">experience</th>
      <th scope="col">salary</th>
      <th scope="col">title</th>
      <th scope="col">companyId</th>
      <th scope="col">companyName</th>
    </tr>
  </thead>
  <tbody>
    {
     tabal && tabal.map((itme, index)=> 
        <tr key={itme}>
      <th scope="row">{index}</th>
      <td>{itme.city}</td>
      <td>{itme.desc}</td>
      <td>{itme.experience}</td>
      <td>{itme.salary}</td>
      <td>{itme.title}</td>
      <td>{itme.companyId}</td>
      <td>{itme.companyName}</td>
    </tr>
        )
    }
   
  </tbody>
</table>
  if (loading) return <div className="spinner spinner-border"></div>
  return <>
  <div className="container my-5">
    
    <div className='text-end'>
      <button data-bs-toggle="modal" data-bs-target="#addJob" type="button" className="btn btn-primary">Add job</button>
    </div>
    {arg}
  </div>





  {/*  add Job modal start */}
    <div className="modal fade" id="addJob">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addJob">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <input type="text" className='form-control' placeholder='Enter Job title' /><br />
          <textarea className='form-control' placeholder='Enter Job Description'></textarea><br />
          <input type="text" className='form-control' placeholder='Enter Salary Range' /><br />
          <input type="text" className='form-control' placeholder='Enter Experince' /><br />
          <input type="text" className='form-control' placeholder='Enter City' /><br />
          <button type="button" onClick={handleAddJob} data-bs-dismiss="modal" className="btn btn-primary me-3">Add Job Post</button>
          <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary">Reset</button>
          </div>
        </div>
      </div>
    </div>

  {/*  add Job modal end */}
  </>
}

export default Jobs