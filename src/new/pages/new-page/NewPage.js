import React, { Component } from 'react';
import axios from 'axios';
import './new-page.css';
import ApiService from '../../../shared/services/api/ApiService';

const apiService = new ApiService();
const api = axios.create({ baseURL: 'http://localhost:3001' });

class NewPage extends Component {

    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hastag: ''
    };

    handleSubmit = async e => {

        e.preventDefault();
        
        try {
            
            const data = new FormData();
            data.append('image', this.state.image);
            data.append('author', this.state.author);
            data.append('place', this.state.place);
            data.append('description', this.state.description);
            data.append('hastag', this.state.hastag);

            await api.post('posts', data);
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        }

        // const newPost = await apiService.create('/posts', this.state);
        // console.log(newPost);
    };

    handleChangeImage = e => {
        this.setState({ image: e.target.files[0] });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    render() { 
        const { author, place, description, hastag } = this.state;
        
        return (  
            <form className="form" onSubmit={ this.handleSubmit.bind(this) }>
                <fieldset>
                    <input 
                        className="form-input"
                        type="file"
                        name="image"
                        onChange={ this.handleChangeImage }
                    />

                    <input 
                        className="form-input"
                        type="text"
                        name="author"
                        placeholder="Autor do post"
                        onChange={ this.handleChange }
                        value={ author }
                    />

                    <input 
                        className="form-input"
                        type="text"
                        name="place"
                        placeholder="Local do post"
                        onChange={ this.handleChange }
                        value={ place }
                    />

                    <input 
                        className="form-input"
                        type="text"
                        name="description"
                        placeholder="Descrição do post"
                        onChange={ this.handleChange }
                        value={ description }
                    />
                    <input 
                        className="form-input"
                        type="text"
                        name="hastag"
                        placeholder="Hastag do post"
                        onChange={ this.handleChange }
                        value={ hastag }
                    />
                </fieldset>

                <fieldset>
                    <button className="form-button" type="submit">Cadastrar</button>
                </fieldset>

            </form>
        );
    }
}
 
export default NewPage;