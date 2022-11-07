import {MenuOutlined, SettingOutlined, UserOutlined, BugOutlined, PlusCircleOutlined, SaveOutlined, DownloadOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Menu, Dropdown, Space } from 'antd';
import '../assets/styles/leftside.css';


const menu = (
  <Menu className='leftside-dropdown'
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            <Space>
              <Button><SaveOutlined /></Button>
              <span>saved message</span>
            </Space>
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
           <Space>
              <Button><SettingOutlined /></Button>
              <span>Setting</span>
           </Space>
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            <Space>
              <Button><DownloadOutlined /></Button>
              <span>Archived chats</span>
            </Space>
          </a>
        ),
      },
      {
        key: '4',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            <Space>
              <Button><UserOutlined /></Button>
              <span>contact</span>
            </Space>
          </a>
        ),
      },
      {
        key: '5',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            <Space>
              <Button><BugOutlined /></Button>
              <span>report bug</span>
            </Space>
          </a>
        ),
      },
      {
        key: '6',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            <Space>
              <Button><QuestionCircleOutlined /></Button>
              <span>Telegram Features</span>
            </Space>
          </a>
        ),
      },
      {
        key: '7',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            <Space>
              <Button><PlusCircleOutlined /></Button>
              <span>Install App</span>
            </Space>
          </a>
        ),
      },
    ]}
  />
);

const App = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown className='overlay'  overlay={menu} placement="bottomLeft">
        <Button className='sidebar-button' type='text' >
          <MenuOutlined  />
        </Button>
      </Dropdown>
    </Space>
  </Space>
);

export default App;