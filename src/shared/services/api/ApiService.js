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

            if(!response.ok) {
                console.log(response.statusText);
                return response.statusText;
            };  

            response = await response.json();
            return response;
        } catch (error) {

            console.log(error);
            return error;
        };
    }
};

export default ApiService;