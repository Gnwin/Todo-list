let updateIndex = (arr) => {
  let idx = 0;
  arr.forEach((element) => {
    idx += 1;
    element.index = idx;
  });
  return arr;
}

export default updateIndex;