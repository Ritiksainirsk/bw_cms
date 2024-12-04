import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';
import { AdminLoginApi } from '../api/LoginAPI';
import { Const } from "../util/Constants";

const Login = () => {
    const navigate  = useNavigate ();

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // Form Validator
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
    });
      
    const formOptions = { resolver: yupResolver(validationSchema), mode: 'onBlur' };
    const { register, handleSubmit, formState, setValue } = useForm(formOptions);
    const { errors } = formState;

    useEffect(() => {
        const timer = setTimeout(() => {
            formState.trigger();
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const onSubmit = async (e) => {
        await AdminLoginApi(e.username, e.password, onSuccessLogin);
    }

    const onSuccessLogin = async (res) => {
        localStorage.setItem(Const.LoggedIn, Const.STrue);
        localStorage.setItem(Const.Token, res.token);
        localStorage.setItem(Const.Session, JSON.stringify(res.session));
        localStorage.setItem(Const.LoggedInRolePermission, JSON.stringify(res.role));
        localStorage.setItem(Const.User, JSON.stringify(res.admin));
        navigate("/dashboard/admin");
    }

  return (
    <section className="login-page">
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-md-8"></div>
                <div className="col-md-4">                  
                    <div className="__login_card">
                        <div className="row g-0">
                            <div className="text-center mb-4">
                                <img src={Logo} className="__logo_img" width={135} height={50} alt="logo" />
                            </div>
                            <h1 className="login-title text-center">Welcome to Your Dashboard</h1>
                            <p className="text-center login-subtitle">Login your account</p>
                            <form className="mt-4" onSubmit={handleSubmit(onSubmit)} id="reset">
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="username">
                                        Username/Email
                                    </label>
                                    <input
                                        {...register("username")}
                                        type="text"
                                        id="username"
                                        name="username"
                                        className={`${errors.username ? `form-control error-outline`: `form-control`}`}
                                        placeholder="Username/Email Address"
                                        onChange={event => setUsername(event.target.value)}
                                        // value={username}
                                        defaultValue={username}
                                        onInput={event => {
                                            setUsername(event.target.value);
                                            setValue("username", event.target.value, { shouldValidate: true });
                                        }}
                                    />
                                    <span className="error">{errors.username?.message}</span>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="password">
                                        Password
                                    </label>
                                    <div className="d-flex">
                                        <input
                                            {...register("password")}
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                            className={`${errors.password ? `form-control pass-view error-outline`: `form-control pass-view`}`}
                                            placeholder="Enter Password"
                                            onChange={event => setPassword(event.target.value)}
                                            defaultValue={password}
                                            onInput={event => {
                                                setPassword(event.target.value);
                                                setValue("password", event.target.value, { shouldValidate: true });
                                            }}
                                        />
                                        <span className="input-group-append">
                                            <button type="button" className={`${errors.password ? `search-append error-outline btn btn-bg` : `search-append btn btn-bg`}`}>
                                                {showPassword ? 
                                                <FiEye onClick={()=>setShowPassword(!showPassword)} style={{width: "18px", height: "18px", color: "#0d7bdb"}}/>
                                                : <FiEyeOff onClick={()=>setShowPassword(!showPassword)} style={{width: "18px", height: "18px", color: "#0d7bdb"}}/>}
                                            </button>
                                        </span>
                                    </div>
                                    <span className="error">{errors.password?.message}</span>
                                </div>
                                <div className="form-outline d-flex justify-content-between mb-4">
                                    <div className="d-flex align-items-center mb-4">
                                        <input
                                            className="form-checkbox form-check-input"
                                            type="checkbox"
                                            id="remember"
                                        />
                                        <label className="form-label m-0" htmlFor="remember">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-right">
                                        <Link to={'/forgot-password'} className="forgot">
                                        Forgot password
                                        </Link>
                                    </div>
                                </div>
                                <div className="form-outline">
                                    <button className="btn btn-primary col-md-12" type="submit">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login