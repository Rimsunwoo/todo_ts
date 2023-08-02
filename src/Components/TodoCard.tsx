import React from 'react'
import { styled } from 'styled-components';
import { Todo } from '../App';
import { FlexBox } from './common/styles';
import Button from './common/Button';
interface TodoProps  {
  todoData: Todo
  onClickChange: (id: number) => void
  onClickRemove: (id: number) => void
}

function TodoCard({todoData, onClickChange, onClickRemove}: TodoProps) {

  return (
    <Card>
      <h1>{todoData.title}</h1>
      <h2>{todoData.content}</h2>
     <FlexBox>
        <Button type="button" size='m' onClick={() => onClickChange(todoData.id)}>{todoData.isDone === false ? "완료" : "취소"}</Button>
        <Button type="button" size="m" onClick={()=> onClickRemove(todoData.id)}>삭제</Button>
      </FlexBox>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #aadcdc;
  width: 200px;
  margin-right: 10px;

`

export default TodoCard