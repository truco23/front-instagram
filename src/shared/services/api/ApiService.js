const api = 'http://localhost:3001';

class ApiService {

    setHeader(json, formData) {

        let headers = null;

        if(json) {

            return headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
        }

        if(formData) {
            
            return headers = {
                'Accept': '*',
                'Content-Type': 'multipart/form-data; boundary="simple boundary"'
            }
        }

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
            
            let headers = this.setHeader(true, false);
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
            console.log(post);
            
            const { image, author, place, description, hastag } = post;
            // const headers = this.setHeader(false, true);
            
            let data = new FormData();
            data.append('image', post.image);
            data.append('author', post.author);
            data.append('place', post.place);
            data.append('description', post.description);
            data.append('hastag', post.hastag);
            
            const headers = {
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryffRmYk3HlzA78g5Q'
            };
            const body = data;
            
            let response = await fetch(`${ api }${ path }`, {
                headers,
                method: 'POST',
                body
            });

            await this.resOk(response);
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
            return error;
        };
        
    };
};

export default ApiService;