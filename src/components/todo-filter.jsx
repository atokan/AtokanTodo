import FilterRadio from 'components/filter-radio';
import {allTodos, completedTodos, activeTodos} from 'redux/modules/filter-todos';

const TodoFilter = () => (
  <fieldset className="filters">
    <legend className="filters__title">Show: </legend>
    <FilterRadio action={allTodos}>All</FilterRadio>
    <FilterRadio action={completedTodos}>Completed</FilterRadio>
    <FilterRadio action={activeTodos}>Active</FilterRadio>
    <style jsx>{`
      .filters {
        height: 80px;
        width: calc(100% + 20px);
        box-sizing: border-box;
        padding: 32px 35px 0;
        background: #2c3e50;
        color: #ecf0f1;
        font-weight: 700;
        box-shadow: 0 0 2px 1px rgba(0,0,0,0.2);
        border-radius: 0 0 3px 3px;
        border: none;
        order: -1;
      }

      .filters__title{
        display: inline-block;
        margin-right: 30px;
      }

      .filters__title {
        float: left;
      }
    `}</style>
  </fieldset>
)

export default TodoFilter;
