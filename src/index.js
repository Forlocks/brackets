module.exports = function check(str, bracketsConfig) {
  console.log(str);
  console.log(bracketsConfig);

  if (str.length < 2) {
    return false;
  } else {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (str[i] == bracketsConfig[j][1] && stack.length !== 0 && stack[stack.length - 1] === bracketsConfig[j][0]) { // Если закрывающая скобка, стек не пустой и top - нужная пара
          stack.pop();
        } else if (str[i] == bracketsConfig[j][0]) { // Если открывающая скобка
          stack.push(str[i]);
        } else if (str[i] == bracketsConfig[j][1] && stack.length === 0) { // Если закрывающая скобка и стек пустой
          return false;
        }
      }
    }

    console.log(stack);

    if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}