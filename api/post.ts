import axios from ".";

export async function loadPostsAPI() {
	return (await axios.get("/posts")).data;
}
