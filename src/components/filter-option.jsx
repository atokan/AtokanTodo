import { connect } from 'react-redux';

function handleChange(e, dispatch, action) {
  return dispatch(action());
}

function applyActiveClass(children, filter) {
  return children == filter ? 'active' : ''
}

let FilterOption = ({children, action, filter, dispatch}) => (
    <div>
      <input type="radio"
        name="filter"
        id={action().type}
        value={action().type}
        checked={action().type == filter ? 'true' : ''}
        onChange={(e) => handleChange(e, dispatch, action)}
        className="filter__option"
      />
      <label htmlFor={action().type}
        className={`filter__label--${children.toLowerCase()}`}
        onClick={(e) => handleChange(e, dispatch, action)}
      >
        {children}
      </label>
      <style jsx>{`
        div {
          display: inline-block;
          margin-right: 30px;
        }

        [class^="filter__label"] {
          position: relative;
          display: inline-block;
          padding-left: 16px;
          color: rgba(236,240,241,0.3);
        }

        [class^="filter__label"]:hover {
          color: #ccc;
        }

        .filter__option:checked + [class^="filter__label"] {
          color: #fff;
        }

        [class^="filter__label"]::before,
        .filter__label--all::after {
          content: '';
          position: absolute;
          top: 5px;
          left: 0;
          background: #647380;
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          box-shadow: 0 0 2px 1px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
)

function mapStateToProps(state) {
  return {
    filter: state.filterTodos
  }
}

FilterOption = connect(mapStateToProps)(FilterOption);
export default FilterOption;
