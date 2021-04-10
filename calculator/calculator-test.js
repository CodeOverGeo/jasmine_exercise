it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(10000, 8, 5.8)).toEqual('130.44');
  expect(calculateMonthlyPayment(1000, 10, 0)).toEqual('8.33');
  expect(calculateMonthlyPayment(30000.55, 12, 5)).toEqual('277.47');
});

it('should return a result with 2 decimal places', function () {
  expect(calculateMonthlyPayment(1000.53, 5, 3.5)).toEqual('18.20');
});

/// etc
