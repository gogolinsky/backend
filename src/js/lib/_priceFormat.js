import numberFormat from "./numberFormat";
import declOfNum from "./declOfNum";

export default number => {
  const currency = declOfNum(number, ["рубль", "рубля", "рублей"]);
  const formatted = numberFormat(number, 0, ",", " ");

  return `${formatted} ${currency}`;
};
