const ship = (size) => {
  const coordinates = [];
  const damageReceived = [];
  const hit = (n) => {
    damageReceived.push(n);
  };
  const isSunk = () => (damageReceived.length === size);

  return {
    coordinates,
    size,
    damageReceived,
    hit,
    isSunk,
  };
};

module.exports = ship;
