import React, { useState, useEffect } from "react";

// imports
import { Layout } from "../../components/exports";
import { toast } from "react-toastify";
import { user as userAtom, loggedIn } from "../../statedrive/atoms";
import { useSharedState, useSetSharedState } from "../../statedrive/index";
import { fetchUserDetails, logout } from "../Join/authentication";
import Loading from "../../components/Loading/Loading";
import Card from "./Card";
import { Redirect } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useSharedState(userAtom);
  const setLoggedIn = useSetSharedState(loggedIn);
  const [redirect, setRedirect] = useState(null);

  const events = [
    "designing",
    "coding",
    "pitching",
    "gaming",
    "quiz",
    "writing",
  ];

  useEffect(() => {
    fetchUserDetails().then((userDetails) => {
      if (userDetails.error) {
        logout();
        setLoggedIn(false);
        toast.error(userDetails.error);
        return setRedirect("/join");
      }
      setUser(userDetails.data.user);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {redirect ? (
        <Redirect to={redirect} />
      ) : (
        <>
          {!user ? (
            <Loading />
          ) : (
            <Layout auth={true}>
              <section className="hero__bg">
                <div className="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
                  <div className="text-center lg:w-2/3 w-full">
                    <h1
                      className="w-128 sm:text-5xl mb-4 font-black text-primaryIndigo font-inter"
                      style={{ fontSize: 90 }}
                    >
                      Hi, <span className="text-primary">{user.name}</span>.
                    </h1>
                    <div className="container px-5 mx-auto my-12">
                      <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
                        <h1 className="hero__content-block--title font-vg5000 text-center">
                          Select events you are
                          <span className="bg-yellow-300 px-1 m-1">
                            {" "}
                            interested{" "}
                          </span>
                          in:
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="flex justify-center align-center mb-12">
                  <div className="bg-white text-black font-inter font-extrabold w-3/4 p-8 rounded-lg rounded inline-flex items-center shadow-2xl">
                    <div className="container flex justify-center items-center flex-col">
                      <div className="flex m-4 flex-wrap justify-center items-center">
                        {events.map((event) => (
                          <Card name={event} key={event} />
                        ))}
                      </div>
                      <button className="button-pink">update</button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="hero__prelimlink-block bg-primary p-16">
                <div className="flex justify-center align-center flex-col">
                  <h1 className="text-center font-vg5000 text-2xl text-white">
                    Click here to view preliminary prompts
                  </h1>
                </div>
              </section>
            </Layout>
          )}
        </>
      )}
    </>
  );
}
