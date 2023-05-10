import { LockOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { LoginForm, ProFormText } from '@ant-design/pro-components'
import styles from './index.less'
import { history } from '@umijs/max'

// import { useTitle } from 'ahooks'
// import logo from '@/assets/images/logo.png'
// import useUser from '@/hooks/useUser'

interface FormData {
  userName?: string
  password?: string
}

const Login = () => {
  // useTitle('登录 - 浦盛物流')
  // const { login } = useUser()

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <LoginForm<FormData>
          // logo={logo}
          title={<span className={styles.title}>浦盛物流</span>}
          onFinish={async () => history.push('/')}
        >
          <div style={{ height: 20 }} />
          <ProFormText
            name='userName'
            rules={[{ required: true, message: '请输入账号' }]}
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined style={{ color: '#1890ff' }} />,
            }}
            placeholder='请输入账号'
          />
          <ProFormText.Password
            name='password'
            rules={[{ required: true, message: '请输入密码' }]}
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined style={{ color: '#1890ff' }} />,
            }}
            placeholder='请输入密码'
          />
        </LoginForm>
      </div>
    </div>
  )
}

export default Login
