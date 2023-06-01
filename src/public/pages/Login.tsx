import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { login } from "../../redux/actions/publicActions"

const Login = () => {
   const navigate =  useNavigate()
    const dispatch =  useAppDispatch()
    const {info, error, loading}= useAppSelector(state=> state.public)
    const [isCompany, setIsCompany] = useState(false)

    const handleLogin = () => {
        dispatch(login({email:"google@gmail.com",password:"123",type:isCompany?"company":"users"}))
    }

    useEffect(() => {
        if (info) {
            // navigate("/")
            if (isCompany) {
                navigate("/employer")
            }else if (!isCompany) {
                navigate("/")
            }
        }
    }, [info])
    
    if (loading) {
        return <div className='spinner spinner-border'></div>
      }
    return <div className="login-hero">
        <div className="backdrop-login">
            <div className="row">
                <div className="col-sm-3 offset-sm-1  login-card">
                {
                error&& <div className='alert alert-danger'>{error}</div>
               }
                    <div className="card p-3">
                        <div className="text-center">
                            <img src="https://shreethemes.in/jobstack/layouts/assets/images/logo-dark.png" alt="" />

                        </div>
                        <p className="fw-bold fs-5">login</p>
                        <div>
                            <span>Email Address :</span>
                            <input type="text" className="form-control mt-2" placeholder="name@example.com" />
                        </div>
                        <div className="mt-2">
                            <span>Password :</span>
                            <input type="text" className="form-control mt-2" placeholder="Password" />
                        </div>

                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check">
                                <h1>{isCompany? "company ":"users"}</h1>
                                <input 
                                className="form-check-input"
                                 type="checkbox"
                                 onChange={e =>setIsCompany(e.target.checked)}                                
                                id="id" />
                                <label className="form-check-label text-secondary" htmlFor="id">
                                    Login as Company
                                </label>
                            </div>
                            {/* <div>
                                <a href="" className="text-decoration-none text-secondary">Forgot password ?</a>
                            </div> */}
                        </div>

                        <div className="mt-2">
                            <button onClick={handleLogin} className="btn btn-success w-100">Login/Sign in</button>
                        </div>
                        <div className="mt-2 text-center">
                            <span className="text-secondary">Dont have an account ? <a href="" className="text-decoration-none fw-bold text-dark">Sign Up</a></span>
                        </div>
                        <div className="mt-5">
                            <p className="text-secondary fst-normal" style={{ fontSize: "14px" }}>© 2023 Jobstack. Designed by Shreethemes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default Login