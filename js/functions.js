function lessOrEqual(string,length) {
  return string.length <= length;
}
lessOrEqual('проверяемая строка', 20);
lessOrEqual('проверяемая строка', 18);
lessOrEqual('проверяемая строка', 10);

function palindrome(str) {
  let check = '';
  for (let i = str.length; i > 0; --i) {
    check += str[i];
  }
  if (str === check) {
    return true;
  } else {
    return false;
  }
}

palindrome('топот');
palindrome('ДовОд');
palindrome('Кекс');
