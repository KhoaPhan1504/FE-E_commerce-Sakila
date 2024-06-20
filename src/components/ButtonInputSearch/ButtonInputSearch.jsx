import { Button} from 'antd';
import React from 'react';
import { 
    SearchOutlined 
} from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
  const { 
    size, placeholder, textButton, bordered, 
    backgroundColorInput = '#fff', 
    backgroundColorButton = 'rgb(0,0,128)',
    colorButton = '#fff'
  } = props;

  return (
    <div style={{ display: 'flex' }}>
      <InputComponent
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
      <ButtonComponent 
        size={size} 
        icon={<SearchOutlined style={{ color: colorButton }}/>} 
        styleButton={{
          backgroundColor: backgroundColorButton,
          borderRadius: '0', 
          borderTopLeftRadius: 0, 
          borderBottomLeftRadius: 0,
          border: !bordered && 'none'
        }}
        textButton={textButton}
        styleTextButton={{ color: colorButton }}
      />
    </div>
  )
}

export default ButtonInputSearch;
