const tapesElement = document.querySelector('#tapes');

const updateTapes = () => {
  let numberOfTapes = Number(tapesElement.innerText);
  numberOfTapes += 1;
  tapesElement.innerText = numberOfTapes;
};

export { updateTapes, tapesElement };
// module.exports = { updateTapes, tapesElement };
