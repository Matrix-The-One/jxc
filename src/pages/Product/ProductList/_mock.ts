export default {
  success: true,
  total: 200,
  data: Array(200)
    .fill(0)
    .map((_, i) => ({
      id: i,
      manufacturer: '109-C27',
      category: 'BLOUSE',
      pic: 'https://img0.baidu.com/it/u=2277172298,2346325223&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      modelNo: 23176 + i,
      name: '后口袋字母阔腿裤',
      status: i % 2 ? 'ONLINE' : 'OFFLINE',
      purchasePrice: 117 + i,
      retailPrice: 170 + i,
      packPrice: 0,
      color: i % 2 ? 'RED' : 'GREEN',
      size: i % 2 ? 'M' : 'XL',
      operator: '王小二',
      brand: i % 2 ? 'ADIDAS' : 'NIKE',
      season: i % 2 ? 'SUMMER' : 'WINTER',
      createTime: '2023-01-01 12:12:12',
    })),
}
