import { connect } from 'react-redux';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    if (this.state.value != '') {
      this.props.dispatch({
        type: 'ADD_TODO',
        text: this.state.value,
      });
      this.setState(prevState => ({value: ''}));
    }
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleClick.bind(this)}>
          Add todo
        </button>
    </div>
   );
  }
};

export default AddTodo = connect()(AddTodo)
