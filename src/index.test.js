import { render, mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import TodoApp from 'components/todo-app';

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = mount(<TodoApp />)

    expect(app.find('h1').text()).toEqual('Todo App')
  })
})
