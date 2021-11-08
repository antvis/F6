App({
  globalData: {},
  async onLaunch() {
    console.log('app onLaunch');
    /**
     * RPC 调用示例
     */
    my.call(
      'rpc',
      {
        operationType: 'alipay.xx',
        requestData: [{}],
        headers: {},
      },
      function(result) {
        console.log(result);
      },
    );
  },
  onShow() {
    console.log('app onShow');
  },
});
