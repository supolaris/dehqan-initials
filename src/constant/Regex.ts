export const numbersOnlyRegex = new RegExp('^[0-9]+$');
export const avoidAllSpacesRegex = new RegExp('^[^\\s]*$');
export const alphabetsOnlyRegex = new RegExp('^[A-Za-z ]*$');
export const phoneNumberRegex = new RegExp('^\\+?[0-9]{7,15}$');
export const usernameRegex = new RegExp('^[a-zA-Z0-9_]{3,16}$');
export const strongPasswordRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
);
export const emailRegex = new RegExp(
  "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$",
);
