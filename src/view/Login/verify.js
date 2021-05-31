const emailVerify = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;
const passwordVerify =  /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;

export {emailVerify, passwordVerify};