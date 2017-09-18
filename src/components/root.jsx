import TodoApp from 'components/todo-app';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={TodoApp} />
    </BrowserRouter>
  </Provider>
)

export default Root;
