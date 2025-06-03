import { API_BASE_URL, fetchData } from '../apiConfig.js';

export default class RegistrationService {
    static async createRegistration(registrationData) {
        return fetchData(`${API_BASE_URL}/registrations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData)
        });
    }
}

