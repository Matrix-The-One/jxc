import { getFakeChartData } from './_mock'

const sleep = (delay: number) => {
  const start = Date.now()
  while (Date.now() < start + delay) continue
}

export async function fakeChartData(): Promise<any> {
  sleep(500)
  return { data: getFakeChartData }
}
