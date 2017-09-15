import { connect } from 'react-redux';

import { addTodo } from 'redux/modules/todos';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.value != '') {
      this.props.dispatch(addTodo(this.state.value));
      this.setState(prevState => ({value: ''}));
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <button type="submit">Add todo</button>
      </form>
   );
  }
};

export default AddTodo = connect()(AddTodo)
