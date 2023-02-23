import axios from "axios";
export default () => {
	const sendMail = (values) => {
		console.log("values", values)
		/*var data = JSON.stringify({
			"collection": "users",
			"database": "test",
			"dataSource": "agency",
			"document": {
				"name": values.name,
				"phone": values.name,
				"email": values.email
			  }
		});
					
		var config = {
			method: 'post',
			url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-hfpzc/endpoint/insertclient',
			headers: {
			  'Content-Type': 'application/json',
			  'Access-Control-Request-Headers': '*',
			  'api-key': 'E8RbbiMbUXynlkN7MwFdRTNb9zaZnEpEHQMMCO6YPENzd9njAfmlhWKKuA71O41v',
			  'Accept': 'application/ejson'
			},
			data: data
		};
					
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
		

	 	const options = {
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