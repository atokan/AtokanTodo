import { render } from 'react-dom';
import store from 'redux/store';
import Root from 'components/root';

render(
  <Root store={store}/>,
  document.getElementById("root")
)
