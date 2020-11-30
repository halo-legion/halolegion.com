import React, { useState, useEffect } from "react";

// imports
import { Layout } from "../../components/exports";
import { toast } from "react-toastify";
import {
  user as userAtom,
  loggedIn,
  selectedEvents as selectedEventsState,
} from "../../statedrive/atoms";
import { useSharedState, useSetSharedState } from "../../statedrive/index";
import { fetchUserDetails, updateEvents, logout } from "../Join/authentication";
import Loading from "../../components/Loading/Loading";
import Card from "./Card";
import { Redirect } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useSharedState(userAtom);
  const setLoggedIn = useSetSharedState(loggedIn);
  const [selectedEvents, setSelectedEvents] = useSharedState(
    selectedEventsState
  );
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
      setSelectedEvents(userDetails.data.user.events);
      setUser(userDetails.data.user);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEventsUpdate = async () => {
    updateEvents(selectedEvents).then((res) => {
      if (res.error) {
        toast.error(res.error);
      }
      toast.dark("✅ Events updated successfully...");
    });
  };

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
                    <h1 className="text-4xl sm:text-8xl mb-4 font-black text-primaryIndigo font-inter">
                      Hi, <span className="text-primary">{user.name}</span>.
                    </h1>
                    <div className="container px-5 mx-auto my-12">
                      <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
                        <h1 className="sm:text-5xl text-2xl font-vg5000 text-center">
                          Select events you are
                          <span className="bg-yellow-300 px-1 m-1">
                            interested
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
                          <Card
                            name={event}
                            key={event}
                            isActive={selectedEvents.includes(event)}
                          />
                        ))}
                      </div>
                      <button
                        className="button-pink"
                        onClick={handleEventsUpdate}
                      >
                        update
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex justify-center sm:p-20">
                <div className="text-primaryIndigo font-vg5000 w-3/4">
                  <h1 className="text-5xl">Instructions:</h1>
                  <ul className="text-primary my-5 text-xl sm:text-2xl">
                    <li className="py-2">
                      * Just click on the boxes and you should be good to go.
                      We'll contact you for more information on email or
                      personally.
                    </li>
                    <li className="py-2">
                      * If you're facing any troubles with the platform, feel
                      free to contact us and we'd be happy to help.
                    </li>
                    <li className="py-2">
                      * Information about the prompts is available here.
                    </li>
                    <li className="py-2">* Have fun.</li>
                  </ul>
                </div>
              </section>
              <section className="hero__prelimlink-block bg-primary w-full p-16">
                <div className="flex justify-center align-center flex-col">
                  <a
                    href="https://utkarsh.co/halo-prompts"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <h1 className="text-center font-vg5000 text-2xl text-white">
                      Click here to view preliminary prompts
                    </h1>
                  </a>
                </div>
              </section>
            </Layout>
          )}
        </>
      )}
    </>
  );
}
