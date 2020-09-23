import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {
  renderTodos = () =>
    this.props.todos.map((todo) => (
      <Todo key={todo.id} text={todo.text} deleteTodo={this.props.deleteTodo} />
    ));

  render() {
    return <div>{this.renderTodos()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch({ type: "DELETE_TODO", id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
