const api = 'http://localhost:3001';

class ApiService {

    setHeader() {

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        return headers;
    };

    setBody(...params) {

        let body = JSON.stringify(params[0]);
        
        return body;
    };

    resOk(response) {
        
        if(!response.ok) {
            console.log(response.statusText);
            return response.statusText;
        };
    }

    async get(path) {

        try {
            let response = await fetch(`${ api }/${ path }`);

            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async like(path, post) {
        
        try {
            
            let headers = this.setHeader();
            let body = this.setBody(post);
            let response = await fetch(`${ api }${ path }${ post._id }`,{
                    headers,
                    method: 'POST',
                    body
                });

            
            this.resOk(response);

            response = await response.json();
            return response;
        } catch (error) {

            console.log(error);
            return error;
        };
    };

    async create(path, post) {

        try {

            const { image, author, place, description, hastag } = post;
            const headers = this.setHeader();
            let formData = new FormData();

            formData.append('filename', image);
            formData.append('auhtor', author);
            formData.append('place', place);
            formData.append('description', description);
            formData.append('hastag', hastag);
            
            // const body = this.setBody(formData);
          
            let response = await fetch(`${ api }${ path }`, {
                headers,
                method: 'POST',
                body: formData
            });

            this.resOk(response);

            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
            return error;
        };
        
    };
};

export default ApiService;