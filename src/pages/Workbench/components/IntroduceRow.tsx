import { Col, Row, Tooltip } from 'antd'
import { Progress, TinyArea, TinyColumn } from '@ant-design/charts'
import { InfoCircleOutlined } from '@ant-design/icons'
import type { DataItem } from '../data.d'
import styles from '../style.less'
import Yuan from '../utils/Yuan'
import { ChartCard, Field } from './Charts'
import Trend from './Trend'
import numeral from 'numeral'

const topColResponsiveProps = { span: 6 }

const IntroduceRow = ({
  loading,
  visitData,
}: {
  loading: boolean
  visitData: DataItem[]
}) => (
  <Row gutter={[8, 8]}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        size='small'
        bordered={false}
        title='总销售额'
        action={
          <Tooltip title='指标说明' trigger='click'>
            <InfoCircleOutlined />
          </Tooltip>
        }
        loading={loading}
        total={() => <Yuan>126560</Yuan>}
        footer={
          <Field label='日销售额' value={`￥${numeral(12423).format('0,0')}`} />
        }
        contentHeight={46}
      >
        <Trend flag='up' style={{ marginRight: 10 }}>
          周同比
          <span className={styles.trendText}>12%</span>
        </Trend>
        <Trend flag='down'>
          日同比
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        size='small'
        bordered={false}
        loading={loading}
        title='访问量'
        action={
          <Tooltip title='指标说明'>
            <InfoCircleOutlined />
          </Tooltip>
        }
        total={numeral(8846).format('0,0')}
        footer={<Field label='日访问量' value={numeral(1234).format('0,0')} />}
        contentHeight={46}
      >
        <TinyArea
          color='#975FE4'
          height={46}
          autoFit
          smooth
          data={visitData.map(i => i.y)}
        />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        size='small'
        bordered={false}
        loading={loading}
        title='支付笔数'
        action={
          <Tooltip title='指标说明'>
            <InfoCircleOutlined />
          </Tooltip>
        }
        total={numeral(6560).format('0,0')}
        footer={<Field label='转化率' value='60%' />}
        contentHeight={46}
      >
        <TinyColumn height={46} data={visitData.map(i => i.y)} />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        size='small'
        loading={loading}
        bordered={false}
        title='运营活动效果'
        action={
          <Tooltip title='指标说明'>
            <InfoCircleOutlined />
          </Tooltip>
        }
        total='78%'
        footer={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend flag='up' style={{ marginRight: 16 }}>
              周同比
              <span className={styles.trendText}>12%</span>
            </Trend>
            <Trend flag='down'>
              日同比
              <span className={styles.trendText}>11%</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        <Progress
          height={46}
          percent={0.78}
          color='#13C2C2'
          forceFit
          size={8}
          marker={[
            {
              value: 0.8,
              style: {
                stroke: '#13C2C2',
              },
            },
          ]}
        />
      </ChartCard>
    </Col>
  </Row>
)

export default IntroduceRow
