export const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const NAME_PATTERN = /^[a-zA-Zа-яА-я0-9 ]+$/;
export const PASSWORD_PATTERN = /[^ ]+/;

export const NAME_ERROR_PATTERN = 'Имя может содержать только буквы, цифры и пробел (не менее 2-х символов)';
export const EMAIL_ERROR_PATTERN = 'Введите корректный адрес электронной почты';
