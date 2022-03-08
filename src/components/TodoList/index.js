import { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo";
import { todosRemainingSelector } from "../../redux/selectors";
import todoListSlice from "./todosSlice";

export default function TodoList() {
  const [nameTodo, setNameTodo] = useState("");
  const [priorityTodo, setPriorityTodo] = useState("Medium");
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemainingSelector);

  const handleAddTodo = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: nameTodo,
        priority: priorityTodo,
        completed: false,
      })
    );
    setNameTodo("");
    setPriorityTodo("Medium");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={nameTodo}
            onChange={(e) => setNameTodo(e.target.value)}
          />
          <Select
            defaultValue="Medium"
            value={priorityTodo}
            onChange={(value) => setPriorityTodo(value)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
