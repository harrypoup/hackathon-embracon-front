export const TOKEN_KEY = "auth_token";
export const USER_PROFILE = "user";

export const isAuthenticated = () => { return true };

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = () => {
  return true;
};

export const user = data => {
  localStorage.setItem(USER_PROFILE, JSON.stringify(data));
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_PROFILE);
};

export const register = (success) => {
  if(success){
    return true;
  }
  return true;
};