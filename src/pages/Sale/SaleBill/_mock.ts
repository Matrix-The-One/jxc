export default {
  success: true,
  total: 200,
  data: Array(200)
    .fill(0)
    .map((_, i) => ({
      id: i,
      batch: 36696 + i,
      shop: i % 2 ? 1 : 2,
      client: '强哥',
      clerk: i % 2 ? '管理员' : '刀哥',
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
