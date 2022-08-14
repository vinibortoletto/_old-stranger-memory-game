const updateScore = (id) => {
  const element = document.getElementById(id);
  let counter = Number(element.innerHTML);
  counter += 1;
  element.innerText = counter;
};

export default updateScore;
