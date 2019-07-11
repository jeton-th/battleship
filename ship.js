const ship = (size) => {
  const damageReceived = [];
  const hit = (n) => {
    damageReceived.push(n);
  };
  const isSunk = () => (damageReceived.length === size);

  return {
    size,
    damageReceived,
    hit,
    isSunk,
  };
};

module.exports = ship;
