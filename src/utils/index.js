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
    return await response.json();
  } catch (error) {
    return new Error("Error completing request");
  }
}
