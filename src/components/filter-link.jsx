import { connect } from 'react-redux';

function handleClick(e, dispatch, action) {
  e.preventDefault();
  return dispatch(action());
}

function applyActiveClass(children, filter) {
  return children == filter ? 'active' : ''
}

let FilterLink = ({children, action, filter, dispatch}) => (
  <a href="#"
    onClick={(e) => handleClick(e, dispatch, action)}
    className={action().type == filter ? 'active' : ''}
  >
    {children}
    <style jsx>{`
      a {
        margin-left: 5px;
      }
      .active {
        background: red;
      }
    `}</style>
  </a>
)

function mapStateToProps(state) {
  return {
    filter: state.filterTodos
  }
}

FilterLink = connect(mapStateToProps)(FilterLink);
export default FilterLink;
