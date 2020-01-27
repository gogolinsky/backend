!(function(n, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (((n = n || self).__vee_validate_locale__ru =
        n.__vee_validate_locale__ru || {}),
      (n.__vee_validate_locale__ru.js = e()));
})(this, function() {
  "use strict";
  var n,
    e = {
      name: "ru",
      messages: {
        _default: function(n) {
          return "Значение недопустимо";
        },
        after: function(n, e) {
          var t = e[0];
          return (
            "В поле " +
            n +
            " должна быть дата после " +
            (e[1] ? "или равная " : "") +
            t
          );
        },
        alpha: function(n) {
          return "Может содержать только буквы";
        },
        alpha_dash: function(n) {
          return "Может содержать только буквы, цифры и дефис";
        },
        alpha_num: function(n) {
          return "Может содержать только буквы и цифры";
        },
        alpha_spaces: function(n) {
          return "Может содержать только буквы и пробелы";
        },
        before: function(n, e) {
          var t = e[0];
          return "Должна быть дата до " + (e[1] ? "или равная " : "") + t;
        },
        between: function(n, e) {
          return "Должно быть между " + e[0] + " и " + e[1];
        },
        confirmed: function(n, e) {
          return "Поле " + n + " не совпадает с полем " + e[0];
        },
        credit_card: function(n) {
          return "Должно быть действительным номером карты";
        },
        date_between: function(n, e) {
          return "Должно быть между " + e[0] + " и " + e[1];
        },
        date_format: function(n, e) {
          return "Должно быть в формате " + e[0];
        },
        decimal: function(n, e) {
          void 0 === e && (e = []);
          var t = e[0];
          return (
            void 0 === t && (t = "*"),
            "Должно быть числовым и может содержать" +
              ("*" === t ? " десятичные числа" : " " + t + " десятичных чисел")
          );
        },
        digits: function(n, e) {
          return "Должно быть числовым и точно содержать " + e[0] + " цифры";
        },
        dimensions: function(n, e) {
          return "Должно быть " + e[0] + " пикселей на " + e[1] + " пикселей";
        },
        email: function(n) {
          return "Введите email";
        },
        excluded: function(n) {
          return "Должно быть допустимым значением";
        },
        ext: function(n, e) {
          return "Должно быть действительным файлом (" + e[0] + ")";
        },
        image: function(n) {
          return "Должно быть изображением";
        },
        included: function(n) {
          return "Должно быть допустимым значением";
        },
        integer: function(n) {
          return "Должно быть целым числом";
        },
        ip: function(n) {
          return "Должно быть действительным IP-адресом";
        },
        length: function(n, e) {
          var t = e[0],
            r = e[1];
          return r
            ? "Длина поля " + n + " должна быть между " + t + " и " + r
            : "Длина поля " + n + " должна быть " + t;
        },
        max: function(n, e) {
          return "Поле " + n + " не может быть более " + e[0] + " символов";
        },
        max_value: function(n, e) {
          return "Должно быть " + e[0] + " или менее";
        },
        mimes: function(n, e) {
          return "Должно иметь допустимый тип файла (" + e[0] + ")";
        },
        min: function(n, e) {
          return "Должно быть не менее " + e[0] + " символов";
        },
        min_value: function(n, e) {
          return "Должно быть " + e[0] + " или больше";
        },
        numeric: function(n) {
          return "Должно быть числом";
        },
        regex: function(n) {
          return "Поле " + n + " имеет ошибочный формат";
        },
        required: function(n) {
          return "Обязательное поле";
        },
        size: function(n, e) {
          return (
            "Должно быть меньше, чем " +
            (function(n) {
              var e = 1024,
                t =
                  0 === (n = Number(n) * e)
                    ? 0
                    : Math.floor(Math.log(n) / Math.log(e));
              return (
                1 * (n / Math.pow(e, t)).toFixed(2) +
                " " +
                ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][t]
              );
            })(e[0])
          );
        },
        url: function(n) {
          return "Имеет ошибочный формат URL";
        }
      },
      attributes: {}
    };
  return (
    "undefined" != typeof VeeValidate &&
      VeeValidate.Validator.localize((((n = {})[e.name] = e), n)),
    e
  );
});
