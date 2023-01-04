import JWT from 'expo-jwt';

export default class MockApi {
  constructor(defaultUsers = [], latency = 500) {
    this.defaultUsers = defaultUsers;
    this.latency = latency;
    this.setUsers(defaultUsers);
  }
  
  getAllUsers() {
    let users = JSON.parse(localStorage.getItem('mockApiUsers'));
    if (!Array.isArray(users)) {
      users = Array(users);
    }
    return users;
  }
  
  setUsers(users) {
    if (!Array.isArray(users)) {
      users = Array(users);
    }
    return localStorage.setItem('mockApiUsers', JSON.stringify(users));
  }
  
  signInUser(firstName, email, password) {
    return new Promise(resolve => {
      setTimeout(() => {
        let apiUsers = this.getAllUsers();
        console.log(apiUsers);
        let user = apiUsers.find((user) => user.username === email);
        const key = process.env.REACT_APP_KEY_SECURE;
        if (user) {
          resolve({
            error: true, message: 'There is a user who have same credentials',
          });
        } else {
          apiUsers.push({
            firstName, email, password: JWT.encode(password, key),
          });
          this.setUsers(apiUsers);
          resolve({error: false});
        }
      }, this.latency);
    });
  }
  
  authentificate(email, password) {
    let users = this.getAllUsers();
    if (users.length === 0) {
      throw new Error('Empty User Store');
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        users = this.getAllUsers();
        const key = process.env.REACT_APP_KEY_SECURE;
        const encryptedPassword = JWT.encode(password, key);
        let user = users.find(
          (user) => user.email === email && user.password ===
            encryptedPassword,
        );
        
        if (user) {
          resolve({error: false, data: users});
        } else {
          resolve({error: true, data: 'Invalid User Credentials'});
        }
      }, this.latency);
    });
  }
  
  checkAuthenticate() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const users = this.getAllUsers();
    let user = users.find(
      (user) => user.username === email && user.password === password);
    return !!user;
  }
}
