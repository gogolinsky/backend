export default {
  phone: {
    getMessage: field => "Введите номер телефона",
    validate: value => {
      return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
    }
  }
};
