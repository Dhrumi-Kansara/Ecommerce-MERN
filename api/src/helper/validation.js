module.exports = {
  isNotValidUserRegister(body) {
    if (!body.username || 
        !body.email || 
        !body.password) 
        return true;
    return false;
  },
  isNotValidUserLogin(body) {
    if (!body.username || 
        !body.password ) 
        return true;
    return false;
  },
  isNotValidUserUpdate(id) {
    if (!id ) 
        return true;
    return false;
  }
}