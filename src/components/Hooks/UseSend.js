import axios from "axios";

// eslint-disable-next-line
export default () => {
	const sendMail = async (values) => {
		
		console.log("values", values)
		const options = {
			method: 'Post',
			url: "https://backend-eta-topaz.vercel.app/store-data",
			body: {
				name: values.name,
				phone: values.phone,
				email:values.email
			},
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			data:{
					name: values.name,
					phone: values.phone,
					email:values.email
				}
			
		};
		const res = await axios.request(options);
		return res;
	}
	return {
		sendMail
	};
};