const defaultConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const defaultUrl = "https://ur-afya.herokuapp.com/api";
export default async function makeApiRequest(endpoint, config = defaultConfig) {
  try {
    const response = await fetch(`${ defaultUrl }${ endpoint }`, config);

    // if (response.status >= 400) {
    //   localStorage.removeItem('user')
    //   window.location.href = '/'
    // }
    const result = await response.json();
    if (result.statusCode === 200 || result.statusCode === 201) {
      return result;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    throw new Error(error);
  }
}
