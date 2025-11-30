export class AuthService {
  constructor() {
    this.STORAGE_KEY = 'usuarioLogado';
    this.USER_NAME_KEY = 'usuarioNome';
    this.USER_EMAIL_KEY = 'usuarioEmail';
  }

  login(name, email) {
    localStorage.setItem(this.STORAGE_KEY, 'true');
    if (name) localStorage.setItem(this.USER_NAME_KEY, name);
    if (email) localStorage.setItem(this.USER_EMAIL_KEY, email);
  }

  logout() {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.USER_NAME_KEY);
    localStorage.removeItem(this.USER_EMAIL_KEY);
  }

  isLoggedIn() {
    return localStorage.getItem(this.STORAGE_KEY) === 'true';
  }

  getUserInfo() {
    return {
      name: localStorage.getItem(this.USER_NAME_KEY),
      email: localStorage.getItem(this.USER_EMAIL_KEY),
    };
  }

  protectRoute() {
    if (!this.isLoggedIn()) {
      alert('Você precisa estar logado para ver esta página.');
      window.location.href = 'login.html';
      return false;
    }
    return true;
  }

  redirectIfLoggedIn() {
    if (this.isLoggedIn()) {
      alert('Você já está logado. Redirecionando para sua área...');
      window.location.href = 'automations.html';
      return true;
    }
    return false;
  }
}
