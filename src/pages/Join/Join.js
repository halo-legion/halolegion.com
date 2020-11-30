import React, { useState, useEffect } from "react";
import { user, loggedIn } from "../../statedrive/atoms";
import { GoogleLogin } from "react-google-login";
import { Layout } from "../../components/exports";
import { login } from "./authentication";
import { toast } from "react-toastify";
import { useSharedState, useSetSharedState } from "../../statedrive/index";
import { Redirect } from "react-router-dom";

export default function Join() {
  const [loginStatus, setLoginStatus] = useSharedState(loggedIn);
  const setUserInfo = useSetSharedState(user);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (loginStatus) {
      setRedirect("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);

  const handleSucess = async (res) => {
    login({
      name: res.profileObj.name,
      email: res.profileObj.email,
      avatar: res.profileObj.imageUrl,
    }).then((res) => {
      if (!res.success) {
        toast.error("❌Oops! We weren't able to sign you in.");
      } else {
        setUserInfo(res.data);
        setLoginStatus(true);
      }
    });

    toast.dark("✅ Logging in...");
  };
  const handleError = (res) => {
    if (res.type === "tokenFailed") {
      return toast.error("❌ Oops! You need a DPS Indore email to signup :(");
    }
    toast.error("❌ Oops! Something weird happened...");
    console.log(res);
  };

  return (
    <>
      {redirect ? (
        <Redirect to={redirect} />
      ) : (
        <Layout>
          <section id="hero__join" className="hero__bg">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <div className="lg:w-2/3 w-full">
                <h1
                  className="text-5xl text-left sm:text-center sm:text-8xl mb-4 font-black text-primaryIndigo font-inter"
                >
                  Think you're a great fit? We too.
                </h1>
                <div className="flex justify-center py-4">
                  <GoogleLogin
                    clientId="231624904188-0d78gmlfg6rimuqu7bofu2gk18nm8h8l.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="register__card__button bg-white text-black font-inter font-extrabold py-6 px-24 rounded inline-flex items-center focus:outline-none shadow-lg hover:shadow-2xl"
                      >
                        <div className="mr-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34.313"
                            height="34.875"
                            viewBox="0 0 34.313 34.875"
                          >
                            <path
                              id="Icon_awesome-google"
                              data-name="Icon awesome-google"
                              d="M34.313,18.408c0,9.949-6.813,17.03-16.875,17.03a17.438,17.438,0,0,1,0-34.875A16.769,16.769,0,0,1,29.13,5.126L24.384,9.689C18.176,3.7,6.63,8.2,6.63,18A10.923,10.923,0,0,0,17.438,29.011c6.9,0,9.492-4.95,9.9-7.516h-9.9v-6h16.6A15.287,15.287,0,0,1,34.313,18.408Z"
                              transform="translate(0 -0.563)"
                              fill="#6c63ff"
                            />
                          </svg>
                        </div>

                        <span className="text-primary">get in then</span>
                      </button>
                    )}
                    onSuccess={handleSucess}
                    onFailure={handleError}
                    hostedDomain={"student.dpsindore.org"} // ?
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
}
