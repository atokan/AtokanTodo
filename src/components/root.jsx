import TodoApp from 'components/todo-app';
import { Provider } from 'react-redux'

const Root = ({store}) => (
  <Provider store={store}>
    <TodoApp/>
  </Provider>
)

export default Root;
