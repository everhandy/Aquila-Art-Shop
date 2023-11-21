import decode from 'jwt-decode';

class AuthService {
// user profile from the decoded token
  getProfile() {
    try {
      return decode(this.getToken());
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  // check if the user is logged by token
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // check if the token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true; 
    }
  }

  // get the user token from local
  getToken() {
    return localStorage.getItem('id_token');
  }

  // save user token to localStorage
  login(idToken, redirectPath = '/') {
    localStorage.setItem('id_token', idToken);
    window.location.assign(redirectPath);
  }

  // remove user token from localStorage 
  logout(redirectPath = '/') {
    localStorage.removeItem('id_token');
    window.location.assign(redirectPath);
  }
}

export default new AuthService();
