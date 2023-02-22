import axios from "axios";
export default () => {
	const sendMail = (values) => {
		console.log("values", values)
	/* 	const options = {
			method: 'Post',
			url: "http://localhost:4000/users",
			body: {
				name: values.name,
				phone: values.phone,
				email:values.email
			},
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': 'your-rapidapi-key',
				'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
			},
			data:{
					name: values.name,
					phone: values.phone,
					email:values.email
				}
			
		};
		axios.request(options)
				.then(response => { 
					console.log('Se envio correcto',response)
				})
				.catch(error => {
					console.log('Ocurrio un erro: ',error.response)
				}); 
*/
	}
	return {
		sendMail
	};
};