describe('Servers test (with setup and tear-down)', function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server if input is an empty string on submitSServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(serverId).toEqual(0);
    expect(Object.values(allServers).length).toEqual(0);
  });

  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();
    let curDisplayTD = document.querySelectorAll('#serverTable tbody tr td');

    expect(curDisplayTD.length).toEqual(3);
    expect(curDisplayTD[0].innerText).toEqual('Alice');
    expect(curDisplayTD[1].innerText).toEqual('$0.00');
    expect(curDisplayTD[2].innerText).toEqual('X');
  });

  afterEach(function () {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
