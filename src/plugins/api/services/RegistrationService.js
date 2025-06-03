import { API_BASE_URL, fetchData } from '../apiConfig.js';

export default class RegistrationService {
  static async createRegistration(registrationData) {
    try {
      // Форматируем данные для Airtable
      const airtableData = {
        records: [
          {
            fields: {
              "FullName": registrationData.FullName,
              "Phone": registrationData.Phone,
              "Group": registrationData.Group,
              "UserId": registrationData.UserId || null // Если UserId не указан, передаём null
            }
          }
        ]
      };

      const response = await fetchData(`${API_BASE_URL}/Registrations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Добавьте API-ключ Airtable, если требуется
          'Authorization': 'Bearer YOUR_AIRTABLE_API_KEY'
        },
        body: JSON.stringify(airtableData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Ошибка при создании записи');
      }

      return await response.json();
    } catch (error) {
      console.error('Ошибка в RegistrationService:', error);
      throw error;
    }
  }
}
