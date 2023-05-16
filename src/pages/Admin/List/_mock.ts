export default {
  success: true,
  total: 200,
  data: Array(200)
    .fill(0)
    .map((_, i) => ({
      id: i,
      name: '强哥' + i,
      account: '17777777777',
      roleName: '角色' + i ,
      enable: i % 2 ? true : false,
      status: (i % 7) + 1,
      quantity: i,
      amount: 170 + i,
      cash: 0,
      creditCard: 0,
      remittance: 0,
      stockist: '王小二',
      remark: '吃鱼',
      createTime: '2023-01-01 12:12:12',
    })),
}
