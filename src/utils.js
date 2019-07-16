const randomNumber = (min, max) => {
  const number = (min, max) => Math.floor(Math.random() * max + min);

  return {
    number,
  }
}

module.exports = randomNumber;
