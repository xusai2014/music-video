export const BASE_URL: string =
	process.env.NODE_ENV === "development"
		? "http://localhost:3004"
		: "https://video.flygpt.cc";

export const BASE_URL_INTERNL: string =
	process.env.NODE_ENV === "development"
		? "http://localhost:3004"
		: "http://localhost";
