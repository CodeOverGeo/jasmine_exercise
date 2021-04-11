describe('Helper functions test (with setup and teardown)', function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it('should add total tip amount on sumPaymentsTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);
  });

  it('should add total bill amount on sumPaymentsTotal()', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(100);
  });

  it('should add total tip amount on sumPaymentsTotal()', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);
  });

  it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
    let newTr = document.createElement('tr');

    appendTd(newTr, 'test');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
  });

  it('should generate delete td and append to tr on appendDeleteBtn(tr)', function () {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });

  afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});
