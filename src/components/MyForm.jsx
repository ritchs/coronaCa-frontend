import React from 'react'
import axios from 'axios';
class MyForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
 
  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    console.log('submit', this.state.value)
    alert('A form was submitted: ' + this.state);
 
    // fetch('http://localhost:3005/store-data', {
    //     method: 'POST',
    //     // We convert the React state to JSON and send it as the POST body
    //     body: {this.state.name}
    //   }).then(function(response) {
    //     console.log(response)
    //     return response.json();
    //   });

    const options = {
			method: 'Post',
			url: "http://localhost:3005/store-data",
			body: {
				name: this.state.name,
				// phone: values.phone,
				// email:values.email
			},
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': 'your-rapidapi-key',
				'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
			},
			data:{
					name: this.state.name,
					// phone: values.phone,
					// email:values.email
				}
			
		};
		axios.request(options)
				.then(response => { 
					console.log('Se envio correcto',response)
				})
				.catch(error => {
					console.log('Ocurrio un erro: ',error.response)
				}); 
 
    event.preventDefault();
}
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default MyForm;