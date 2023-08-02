import React from 'react'
import TodoCard from './TodoCard'
import { Todo } from '../pages/Main';
import { styled } from 'styled-components';

interface TodoSectionProps {
  isActive: boolean;
  todos: Todo[];
  onClickChange: (id: number) => void
  onClickRemove: (id: number) => void
}

function TodoSection(props :TodoSectionProps) {
  const {isActive, todos, onClickChange, onClickRemove} = props
  return (
    <>
      {
        isActive ? <h1>할거</h1> : <h1>한거</h1>
      }
      <SectionBox>
        {todos.filter(todo=> todo.isDone === !isActive).map(Item=> <TodoCard key={Item.id} todoData={Item} onClickChange={onClickChange} onClickRemove={onClickRemove} /> )}
      </SectionBox>
      </>
  )
}

const SectionBox = styled.div`
  display: flex;
  height: 200px;
`

export default TodoSection