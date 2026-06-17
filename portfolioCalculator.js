const calculatePortfolioMetrics = (quantity, buyPrice, currentPrice) => {
  const invested =
    quantity * buyPrice;

  const current =
    quantity * currentPrice;

  const profit =
    current - invested;

  return {
    invested,
    current,
    profit
  };
};

module.exports = calculatePortfolioMetrics;
