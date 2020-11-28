import React, { useEffect } from "react";

import { Navbar, Footer } from "../exports";
import { checkToken, fetchUserDetails } from "../../pages/Join/authentication";
import { useSharedState } from "../../statedrive/index";
import { loggedIn } from "../../statedrive/atoms";
import { Redirect } from "react-router-dom";

export default function Layout({
  title,
  auth = false,
  authFallback = "/join",
  loading = false,
  children,
}) {
  const [loginStatus, setLoginStatus] = useSharedState(loggedIn);
  if (title) {
    document.title = "Halolegion | " + title;
  }

  useEffect(() => {
    if (checkToken()) {
      setLoginStatus(true);
      const user = fetchUserDetails();
      console.log(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {/* Fallback Redirect */}
          {auth && !loginStatus ? (
            <Redirect to={authFallback} />
          ) : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </>
      )}
    </>
  );
}
