"use client";

import ForgetPass from "@/components/templates/login-register/forgetPass";
import Login from "@/components/templates/login-register/login";
import Register from "@/components/templates/login-register/register";
import SendSms from "@/components/templates/login-register/sendSms";
import SetNewPassword from "@/components/templates/login-register/setNewPassword";
import VerifyCode from "@/components/templates/login-register/verifyCode";
import { authTypes } from "@/utils/constants";
import { useState } from "react";

function HandleShowAuth() {
  const [authType, setAuthType] = useState(authTypes.LOGIN);

  const showRegisterForm = () => setAuthType(authTypes.REGISTER);
  const showloginForm = () => setAuthType(authTypes.LOGIN);
  const showSmsForm = () => setAuthType(authTypes.SENDSMS);
  const showVerifyCodeForm = () => setAuthType(authTypes.VERIFYCODE);
  const showForgetPassForm = () => setAuthType(authTypes.FORGETPASSWORD);
  const showSetNewPasswordForm = () => setAuthType(authTypes.SETNEWPASSWORD);
  return (
    <div className="w-full bg-[#f2ebe2] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#2F2A26] dark:border-gray-700">
      {authType === authTypes.LOGIN && (
        <Login
          showRegisterForm={showRegisterForm}
          showForgetPassForm={showForgetPassForm}
          showSmsForm={showSmsForm}
        />
      )}
      {authType === authTypes.REGISTER && (
        <Register showloginForm={showloginForm} />
      )}
      {authType === authTypes.SENDSMS && (
        <SendSms
          showloginForm={showloginForm}
          showVerifyCodeForm={showVerifyCodeForm}
        />
      )}
      {authType === authTypes.VERIFYCODE && (
        <VerifyCode showloginForm={showloginForm} />
      )}
      {authType === authTypes.FORGETPASSWORD && (
        <ForgetPass
          showloginForm={showloginForm}
          // showRegisterForm={showRegisterForm}
          showSetNewPasswordForm={showSetNewPasswordForm}
        />
      )}
      {authType === authTypes.SETNEWPASSWORD && (
        <SetNewPassword showloginForm={showloginForm} />
      )}
    </div>
  );
}

export default HandleShowAuth;
