import cookie from "js-cookie";

const meApi = () => {
  const url = "https://dev.healthosbd.com/api/v1/me/";
  const token = cookie.get("token");

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.id) resolve(data);
        else throw new Error("Could not get data");
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default meApi;
