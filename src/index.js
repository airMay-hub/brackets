module.exports = function check(str, bracketsConfig) {

  const BRACKETS_PAIR = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
  };

  const OPEN_BRACKETS = [];
  for (const value of Object.values(BRACKETS_PAIR)) {
    OPEN_BRACKETS.push(value);
  }

  let stack = [];
  let stack2 = [];

    for (let i = 0; i < str.length; i++) {
      let current = str[i];

      if(current === BRACKETS_PAIR[current]) {
        stack2.push(current);

      } else if (OPEN_BRACKETS.includes(current) && current !== BRACKETS_PAIR[current]) {
        stack.push(current);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let top = stack[stack.length - 1];
        if (BRACKETS_PAIR[current] === top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
}
