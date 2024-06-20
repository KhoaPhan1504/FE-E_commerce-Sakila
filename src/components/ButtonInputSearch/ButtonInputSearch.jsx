import { Button, Input } from 'antd';
import React from 'react';
import { 
    SearchOutlined 
} from '@ant-design/icons';

const ButtonInputSearch = (props) => {
  const { 
    size, placeholder, textButton, bordered, 
    backgroundColorInput = '#fff', 
    backgroundColorButton = 'rgb(0,0,128)',
    colorButton = '#fff'
  } = props;

  return (
    <div style={{ display: 'flex' }}>
      <Input 
        size={size} 
        placeholder={placeholder} 
        bordered={bordered} 
        style={{ 
          backgroundColor: backgroundColorInput, 
          borderRadius: '0', 
          borderTopRightRadius: 0, 
          borderBottomRightRadius: 0 
        }}
      />
      <Button 
        size={size} 
        bordered={bordered} 
        icon={<SearchOutlined style={{ color: colorButton }}/>} 
        style={{
          backgroundColor: backgroundColorButton,
          borderRadius: '0', 
          borderTopLeftRadius: 0, 
          borderBottomLeftRadius: 0,
          border: !bordered && 'none'
        }}
      >
        <span style={{ color: colorButton }}>
          {textButton}
        </span>
      </Button>
    </div>
  )
}

export default ButtonInputSearch;
