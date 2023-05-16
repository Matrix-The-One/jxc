export default {
  success: true,
  total: 200,
  data: Array(200)
    .fill(0)
    .map((_, i) => ({
      id: i,
      name: '菜单' + i,
      path: '/path' + i,
      component: 'List',
      icon: null,
      show: i % 2 ? true : false,
      sort: i + 1,
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
