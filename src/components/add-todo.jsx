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
      <form onSubmit={this.handleSubmit.bind(this)} className="add-todo">
        <input
          autoFocus
          type="text"
          value={this.state.value}
          placeholder="New todo..."
          onChange={this.handleChange.bind(this)}
          className="add-todo__input" />
        <button className="add-todo__button">Add Todo</button>
        <style jsx>{`
          .add-todo {
            width: 100%;
            position: relative;
            height: 80px;
            margin: 2px 0 1px;
          }

          .add-todo__button {
            position: absolute;
            display: block;
            width: 60px;
            height: 100%;
            background: transparent;
            color: rgba(0, 0, 0, 0);
            border: 0;
            left: 0;
            top: 0;
            cursor: pointer;
            background-repeat: no-repeat;
            background-position: 28px 16px;
            background-image: url("/public/images/add.svg");
          }

          .add-todo__button:focus {
            outline: none;
          }

          .add-todo__input {
            border: 0;
            font-size: 1rem;
            height: 100%;
            background: transparent;
            box-sizing: border-box;
            padding-left: 80px;
            width: 100%;
            color: #666666;
            font-weight: 600;
          }
          .add-todo__input:focus {
            outline: none;
            background: rgba(0,0,0,0.05)
          }
          .add-todo__input::placeholder {
            color: #b3b3b3;
            opacity:  1;
          }
        `}</style>
      </form>
   );
  }
};

export default AddTodo = connect()(AddTodo)
