import React from "react";
import styled from "styled-components";
import SignupForm from "./SignupForm";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <Wrapper className="login-page-bg">
      <div className="h-full flex justify-center items-center">
        <div className="py-6">
          <div className="px-8 flex flex-col justify-center items-center">
            <div className="logo" style={{ width: "auto" }}>
              <img src="/images/logo.png" alt="E-Talk logo" />
            </div>
            <SignupForm />
            <div className="mt-6 text-center">
              <p>
                {" "}
                <span>Already have an account?</span>
                <NavLink
                  className="text-green-500 font-bold  hover:underline"
                  to="/auth"
                >
                  {" "}
                  Sign in
                </NavLink>
              </p>
              <p>© 2022 E-Talk created with ❤️ </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  background-color: #f7f7ff;
  .logo {
    img {
      height: 50px;
    }
  }

  .auth-page-content {
    height: calc(100% - 48px);
    margin: 24px;

    .card {
      border-radius: 0.25rem;
    }
  }
  .signin-other-title {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      right: 0;
      top: 15px;
    }
    .title {
      display: inline-block;
      position: relative;
      z-index: 9;
      padding: 2px 16px;
    }
  }
`;
export default Signup;
