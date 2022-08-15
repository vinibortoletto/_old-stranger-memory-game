const updateScore = (id, testingDocument) => {
  const dom = testingDocument || document;
  const element = dom.getElementById(id);
  element.innerHTML = Number(element.innerHTML) + 1;
};

export default updateScore;
