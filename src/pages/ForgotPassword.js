import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Logo from "../assets/images/logo.png";

const ForgotPassword = () => {
    const [showOtp, setShowOtp] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, checkEmail] = useState("");
    const [otp, checkOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [isOTP, setOtp] = useState(false);
    const [isVerify, setVerify] = useState(false);

    // Form Validator
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("User Email ID is required").email("Please Enter Valid Email ID"),
        otp: isOTP ? Yup.string().required("OTP is required"): null,
        new_password: isVerify ? Yup.string().required("Password is required"): null,
        confirm_password: isVerify ? Yup.string().oneOf([Yup.ref('new_password'),null], 'Password did not match').required("Confirm Password is required"): null,
    });
      
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = (e) => {
        if (e.username) {
            setOtp(!showOtp);
            if (e.otp) {
                setVerify(!isVerify);
            }
        }
        console.log('submit',e);
    }

    const onChangePassword = (e) => {
        console.log('PasswordChange',e);
    }
  return (
    <>
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
                                <h1 className="login-title text-center">{!isVerify ? "Forgot Password" : "Reset Password"}</h1>
                                <p className="text-center login-subtitle">Please enter your credentials below</p>
                                {!isVerify ?
                                <form className="mt-4" onSubmit={handleSubmit(onSubmit)} id="reset">
                                    <div className="form-outline mb-2">
                                        <label className="form-label" htmlFor="username">
                                            Email Address
                                        </label>
                                        <input
                                            {...register("username")}
                                            type="email"
                                            id="username"
                                            name="username"
                                            className={`${errors.username ? `form-control error-outline`: `form-control`}`}
                                            placeholder="Email Address"
                                            onChange={event => checkEmail(event.target.value)}
                                            value={email}
                                        />
                                        {errors.username ? 
                                            <span className="error">{errors.username?.message}</span>
                                        : null}
                                    </div>
                                    {isOTP ?
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="otp">
                                            OTP
                                        </label>
                                        <div className="d-flex">
                                            <input
                                                {...register("otp")}
                                                type={showOtp ? 'text' : 'password'}
                                                id="otp"
                                                name="otp"
                                                className={`${errors.otp ? `form-control pass-view error-outline`: `form-control pass-view`}`}
                                                placeholder="Enter OTP"
                                                onChange={event => checkOtp(event.target.value)}
                                                value={otp}
                                            />
                                            <span className="input-group-append">
                                                <button type="button" className={`${errors.otp ? `search-append error-outline btn btn-bg` : `search-append btn btn-bg`}`}>
                                                    {showOtp ? 
                                                    <FiEye onClick={()=>setShowOtp(!showOtp)} style={{width: "18px", height: "18px", color: "#0d7bdb"}}/>
                                                    : <FiEyeOff onClick={()=>setShowOtp(!showOtp)} style={{width: "18px", height: "18px", color: "#0d7bdb"}}/>}
                                                </button>
                                            </span>
                                        </div>
                                        {errors.otp ? 
                                            <span className="error">{errors.otp?.message}</span>
                                        : null}
                                    </div>
                                    :null
                                    }
                                    {!isOTP ?
                                    <div className="form-outline d-flex justify-content-between mb-4">
                                        <div className="d-flex align-items-center mb-4">
                                            <label className="form-label m-0">
                                                Already have an account?
                                            </label>
                                            <div className="mx-3">
                                                <Link to={'/login'} className="forgot">
                                                    Login
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    :null}
                                    <div className="form-outline">
                                    <button className="btn btn-primary col-md-12" type="submit">
                                        {isOTP ? "Verify" : "Continue"}
                                    </button>
                                    </div>
                                </form>
                                : 
                                <form className="mt-4" onSubmit={handleSubmit(onChangePassword)} id="change">
                                    <div className="form-outline mb-2">
                                        <label className="form-label">
                                            New Password
                                        </label>
                                        <div className="d-flex">
                                            <input
                                                {...register("new_password")}
                                                type={showNewPassword ? 'text' : 'password'}
                                                id="new_password"
                                                name="new_password"
                                                className={`${errors.new_password ? `form-control pass-view error-outline`: `form-control pass-view`}`}
                                                placeholder="Enter New Password"
                                                onChange={event => setNewPassword(event.target.value)}
                                                value={newPassword}
                                            />
                                            <span className="input-group-append">
                                                <button type="button" className={`${errors.new_password ? `search-append error-outline btn btn-bg` : `search-append btn btn-bg`}`}>
                                                    {showNewPassword ? 
                                                    <FiEye onClick={()=>setShowNewPassword(!showNewPassword)} style={{width: "18px", height: "18px", color: "#0d7bdb"}}/>
                                                    : <FiEyeOff onClick={()=>setShowNewPassword(!showNewPassword)} style={{width: "18px", height: "18px", color: "#0d7bdb"}}/>}
                                                </button>
                                            </span>
                                        </div>
                                        {errors.new_password ? 
                                            <span className="error">{errors.new_password?.message}</span>
                                        : null}
                                    </div>
                                    <div className="form-outline mb-5">
                                        <label className="form-label">
                                            Confirm Password
                                        </label>
                                        <div className="d-flex">
                                            <input
                                                {...register("confirm_password")}
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                id="confirm_password"
                                                name="confirm_password"
                                                className={`${errors.confirm_password ? `form-control pass-view error-outline`: `form-control pass-view`}`}
                                                placeholder="Enter Confirm New Password"
                                                onChange={event => setConfirmPassword(event.target.value)}
                                                value={ConfirmPassword}
                                            />
                                            <span className="input-group-append">
                                                <button type="button" className={`${errors.confirm_password ? `search-append error-outline btn btn-bg` : `search-append btn btn-bg`}`}>
                                                    {showConfirmPassword ? 
                                                    <FiEye onClick={()=>setShowConfirmPassword(!showConfirmPassword)} style={{width: "18px", height: "18px", color: "#0d7bdb"}}/>
                                                    : <FiEyeOff onClick={()=> setShowConfirmPassword(!showConfirmPassword)} style={{width: "18px", height: "18px", color: "#0d7bdb"}}/>}
                                                </button>
                                            </span>
                                        </div>
                                        {errors.confirm_password ? 
                                            <span className="error">{errors.confirm_password?.message}</span>
                                        : null}
                                    </div>
                                    <div className="form-outline">
                                        <button className="btn btn-primary col-md-12" type="submit">
                                            Continue
                                        </button>
                                    </div>
                                </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ForgotPassword