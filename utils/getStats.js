const getStats = async ($, name) => {
  const stats = $(".stat-row > .stat-box > .stat").text();
  const split = stats.split(" ");
  const statNumbers = split.map((el) => {
    return el.replace(/\D/g, "");
  });
  const rank = statNumbers[0];
  const honor = statNumbers[1];
  const completed = statNumbers[statNumbers.length - 1];
  const data = {
    name,
    rank,
    honor,
    completed,
  };
  return data;
};

module.exports = getStats;
