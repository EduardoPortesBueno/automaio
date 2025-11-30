export class AutomationService {
  constructor() {
    this.API_URL = 'http://localhost:3000/automations';
  }

  async createAutomation(automationData) {
    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(automationData),
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao criar automação:', error);
      throw error;
    }
  }

  async getAutomations() {
    try {
      const response = await fetch(this.API_URL);

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar automações:', error);
      throw error;
    }
  }
}
