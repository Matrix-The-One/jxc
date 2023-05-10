import { Avatar, Space } from 'antd'
import { ProFormSelect } from '@ant-design/pro-components'
import type { ProFormSelectProps } from '@ant-design/pro-components'
import styles from './index.less'

interface UserSearchProps extends ProFormSelectProps {}

const UserSearch: React.FC<UserSearchProps> = props => {
  return (
    <div className={styles.container}>
      <ProFormSelect
        fieldProps={{
          showSearch: true,
          filterOption: () => true,
        }}
        request={async ({ keyWords }) => {
          return [
            {
              label: (
                <Space align='center'>
                  <Avatar
                    size='small'
                    src='https://img0.baidu.com/it/u=2240879390,1524255429&fm=253&fmt=auto&app=138&f=JPEG?w=593&h=500'
                  />
                  <span>1111{keyWords}</span>
                </Space>
              ),
              value: `1${keyWords}`,
            },
            {
              label: (
                <Space align='center'>
                  <Avatar
                    size='small'
                    src='https://pic.rmb.bdstatic.com/bjh/news/1d4c79ffa7d5dcac2f6cbecc284b982a.jpeg'
                  />
                  <span>222{keyWords}</span>
                </Space>
              ),
              value: `2${keyWords}`,
            },
          ]
        }}
      />
    </div>
  )
}

export default UserSearch
