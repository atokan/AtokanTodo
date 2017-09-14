import { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const todosReducer = (state = {todos: []}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return Object.assign(state, {
				todos: [
					...state.todos,
					{
					// id: action.id,
						 text: action.text,
					// completed: false
					}
				]})
		default:
			return state
	}
}

const store = createStore(todosReducer);

class TodoApp extends React.Component {

	render() {
		return(
			<div>
		 		<TodoHeader />
		 		<AddTodo />
				<TodoList todos={this.props.todos}/>
   		</div>
		);
	}
};

const TodoHeader = () => (
  <h2>
    Todo App Header
  </h2>
);

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
			console.log(this.state.value)
			store.dispatch({
				type: 'ADD_TODO',
				text: this.state.value,
			});
			console.log(store.getState())
			// this.props.onAddTodo({text: this.state.value});
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

const TodoList = (props) => (
	<ul>
		{
			props.todos.map((todo) => (<li>{todo.text}</li>))
		}
	</ul>
);

//const TodoFooter = () => (
//);


const render = () => {
  ReactDOM.render(<TodoApp todos={store.getState().todos}/>, document.getElementById("root"))
};

store.subscribe(render);
render();
