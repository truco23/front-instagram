import React, { Component } from 'react';

import './new-page.css';

class NewPage extends Component {
    
    render() { 
        return (  
            <form className="form">
                <fieldset>
                    <input 
                        className="form-input"
                        type="file"
                        name="image"
                    />

                    <input 
                        className="form-input"
                        type="text"
                        name="author"
                        placeholder="Autor do post"
                    />

                    <input 
                        className="form-input"
                        type="text"
                        name="place"
                        placeholder="Local do post"
                    />

                    <input 
                        className="form-input"
                        type="text"
                        name="description"
                        placeholder="Descrição do post"
                    />
                    <input 
                        className="form-input"
                        type="text"
                        name="hastag"
                        placeholder="Hastag do post"
                    />
                </fieldset>

                <fieldset>
                    <button className="form-button" type="submit">Cadastrat</button>
                </fieldset>

            </form>
        );
    }
}
 
export default NewPage;