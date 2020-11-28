async function makeRequest(
  url = "",
  data = {},
  type = "",
  headers = { "Content-Type": "application/json" }
) {
  const response = await fetch(url, {
    method: type,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: headers,
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

async function makeAuthenticatedRequest(url = "") {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.token}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  return response.json();
}

export const checkToken = () => {
  const token = localStorage.getItem("token");
  return !!token && String(token) !== "null" && String(token) !== "undefined";
};

async function createLocalstorageItem(key, value) {
  localStorage.setItem(key, value);
  return true;
}

export const fetchUserDetails = async () => {
  const data = await makeAuthenticatedRequest(
    "https://halolegion.herokuapp.com/user"
  );
  if (data.error) {
    throw new Error(data.error);
  } else {
    return {
      success: true,
      data,
    };
  }
};

export const login = async (credentials = {}) => {
  localStorage.removeItem("token");
  if (
    !credentials ||
    !credentials.name ||
    !credentials.email ||
    !credentials.avatar
  ) {
    throw new Error("Some fields are missing.");
  }
  const data = await makeRequest(
    "https://halolegion.herokuapp.com/user",
    credentials,
    "POST"
  );

  if (data.error) {
    throw new Error(data.error);
  } else {
    createLocalstorageItem("token", JSON.stringify({ token: data.token }));
    return {
      success: true,
      data: data,
    };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return true;
};
