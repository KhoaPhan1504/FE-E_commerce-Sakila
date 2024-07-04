import React from 'react';
import { Badge, Col } from 'antd';
import { 
  WrapperHeader, 
  WrapperHeaderAccount, 
  WrapperTextHeaderSmall ,
} from './style';
import Logo_Sakila from '../../assests/Logo/logo-sakila.png';
import Search from 'antd/es/transfer/search';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';


const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={4}>
          <img src={Logo_Sakila} alt='Logo_Sakila'/>
        </Col>
        <Col span={14}>
          <ButtonInputSearch 
            size='large'
            bordered={false}
            textButton='Tìm kiếm'
            placeholder="input search text" 
          />
        </Col>
        <Col 
          span={6} 
          style={{ 
            display: 'flex', 
            gap: '20px', 
            alignItems: 'center', 
            justifyContent: 'space-around'
          }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize:' 30px', padding: '0'}} />
            <div>
              <WrapperTextHeaderSmall style={{ fontSize: '12px'}} >Đăng nhập/Đăng kí</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff'}} />  
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent;