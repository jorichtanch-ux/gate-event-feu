import React from "react";
import Input from "../components/form/Input";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import SignUpIcon from "../components/icons/SignUpIcon"; 

const Login = () => {
    return (
        <MainLayout>
            <div className="min-h-screen flex flex-col">
                <div className="flex justify-center items-center flex-1">
                    <Card>
                        <h1
                            className="text-xl"
                            style={{ fontFamily: "'Cedarville Cursive', cursive" }}
                        >
                            Login
                        </h1>
                        
                        <Input
                            name="email"
                            placeholder="Enter your Email"
                            label="Email"
                            type="email"
                        />
                        
                        <Input
                            name="password"
                            placeholder="Enter your Password"
                            label="Password"
                            type="password"
                        />
                        
                        <button className="btn btn-primary rounded-full mt-5">
                            Login
                        </button>
                        
                        <div className="text-center mt-4 text-sm">
                            <span>Don't have an account? </span>
                            <a href="/sign-up" className="text-primary hover:underline">
                                Sign Up
                            </a>
                        </div>
                    </Card>
                </div>
            </div>
        </MainLayout>
    );
};

export default Login;