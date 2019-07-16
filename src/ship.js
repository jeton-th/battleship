const ship = (size) => {
  const coordinates = [];
  const damageReceived = [];
  const hit = (n) => {
    damageReceived.push(n);
  };
  const isSunk = () => {
    return (damageReceived.length === size)
  };

  return {
    size,
    hit,
    isSunk,
    coordinates,
    damageReceived,
  };
};

module.exports = ship;
