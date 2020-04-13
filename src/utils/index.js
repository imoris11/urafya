const defaultConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const defaultUrl = "https://ur-afya.herokuapp.com/api";
export default async function makeApiRequest(endpoint, config = defaultConfig) {
  try {
    const response = await fetch(`${defaultUrl}${endpoint}`, config);
    const result = await response.json();
    if (result.statusCode === 200) {
      return result;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.log("RESPONSE BODY", error);
    throw new Error("Error completing request");
  }
}
