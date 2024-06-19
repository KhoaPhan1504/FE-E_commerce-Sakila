import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/counterSlice' ;
import styled from 'styled-components';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const Button = styled.button({
    background: 'red',
  });
  return (
    <div className="App">
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default App;
