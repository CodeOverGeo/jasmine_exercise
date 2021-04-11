describe('Payments test (with setup and tear-down)', function () {
  beforeEach(function () {
    billAmtInput.value = 200;
    tipAmtInput.value = 40;
  });

  it('should add a new payment to allPayments on submitPaymentinfo()', function () {
    submitPaymentInfo();
    expect(allPayments['payment1'].billAmt).toEqual('200');
    expect(allPayments['payment1'].tipAmt).toEqual('40');
  });

  it('should payment update #paymentTable on appendPaymentTable()', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual('$200');
    expect(curTdList[1].innerText).toEqual('$40');
    expect(curTdList[2].innerText).toEqual('20%');
    expect(curTdList[3].innerText).toEqual('X');
  });

  it('should return a new payment to createCurPayment()', function () {
    let expectedPayment = {
      billAmt: '200',
      tipAmt: '40',
      tipPercent: 20,
    };

    expect(createCurPayment()).toEqual(expectedPayment);
  });

  afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
  });
});
