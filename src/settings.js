// eslint-disable-next-line import/prefer-default-export
export const API_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000'
  : 'https://chat-api-ikodi.herokuapp.com';

export const GOOGLE_CONNECT_URL = process.env.NODE_ENV === 'development'
  ? 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=53166717943-a686djj3r9tdiig281djlt67c0tl4q3v.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle'
  : 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=111837023258-niekolh4r173k9ocmkii38b7h193qicj.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fchat-api-ikodi.herokuapp.com%2Fv2%2Fauth%2Fgoogle';
