const url = "https://dev.healthosbd.com/api/v1/token/";
const authApi = (payload) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((token) => {
        if (token.access) resolve(token);
        else throw new Error("Authentication Failed");
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default authApi;
