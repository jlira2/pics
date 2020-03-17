import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID wJeGWkfycKuFI0fF31pOvlpcSYkds3iTfaZzEzMbKBA",
	},
});
