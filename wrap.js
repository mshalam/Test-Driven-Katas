const wrap = (line, maxLen) => {
  if (maxLen === 0) {
    return line;
  } else if (maxLen < 0) {
    return 'invalid number';
  }

  let result = '';
  let toWrap = false;

  for (let i = 0; i < line.length; i++) {
    if (i % maxLen === 0 && i !== 0) {
      toWrap = true;
    }
    if (toWrap && line[i] === ' ') {
      result += '\n';
      toWrap = false;
    }

    result += line[i];
  }

  return result;
};

module.exports = wrap;
