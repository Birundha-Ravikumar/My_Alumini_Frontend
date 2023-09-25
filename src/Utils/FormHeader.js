export const formHeaders = () => {
  var token = localStorage.getItem("token");
  var Authorization = `Bearer ${JSON.parse(token)}`;
  return {
    headers: {
      Authorization: Authorization,
    },
  };
};
