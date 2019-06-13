const api = 'http://localhost:3001';

class ApiService {

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
};

export default ApiService;