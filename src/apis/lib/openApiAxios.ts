import axios from 'axios';

/**
 * @title 로스트아크 오픈 api axios instance
 * */
const openApiInstance = axios.create({
	baseURL: process.env.REACT_APP_LOST_ARK_SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `bearer ${process.env.REACT_APP_LOST_ARK_API_KEY}`,
	},
});

export default openApiInstance;
