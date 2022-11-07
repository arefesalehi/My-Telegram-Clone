import { Button, Menu,Dropdown, Space } from 'antd';
import { FormatPainterOutlined, BellOutlined, CheckCircleOutlined, DeleteOutlined, MoreOutlined, VideoCameraOutlined } from '@ant-design/icons';
import '../assets/styles/rightside.css';

const menu = (
  <Menu className='rightside-dropdown'
    items={[
      {
        key: '1',
        label: (
          <a   target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            <Space>
              <Button><VideoCameraOutlined /></Button>
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
            <Button><BellOutlined /></Button>
            <span>Mute</span>
          </Space>
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            <Space>
              <Button><CheckCircleOutlined /></Button>
              <span>select message</span>
            </Space>
          </a>
        ),
      },
      {
        key: '4',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            <Space>
              <Button><FormatPainterOutlined /></Button>
              <span>Report</span>
            </Space>
          </a>
        ),
      },
      {
        key: '5',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            <Space>
              <Button><DeleteOutlined /></Button>
              <span>Delete chat</span>
            </Space>
          </a>
        ),
      },
    ]}
  />
);

const RightSide = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown overlay={menu} placement="topRight">
        <Button className='sidebar-button' type='text'  >
          <MoreOutlined  />
        </Button>
      </Dropdown>
    </Space>
  </Space>
);

export default RightSide;