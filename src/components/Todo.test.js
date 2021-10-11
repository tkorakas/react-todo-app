import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Todo } from "./Todo";

const todo = {
    title: 'Buy milk',
    id: 'unique-id',
    completed: false
};

describe('Todo', () => {
    it('should render correcly', () => {
        render(<Todo todo={todo} toggleTodo={jest.fn()} editTodo={jest.fn()} deleteTodo={jest.fn()} />);
        expect(screen.getByText('Buy milk')).toBeInTheDocument();
    });

    it('should be marked as todo', () => {
        render(<Todo todo={todo} toggleTodo={jest.fn()} editTodo={jest.fn()} deleteTodo={jest.fn()} />);

        expect(screen.getByLabelText('Buy milk')).not.toBeChecked();
    });

    it('should be marked as completed', () => {
        render(<Todo todo={{...todo, completed: true}} toggleTodo={jest.fn()} editTodo={jest.fn()} deleteTodo={jest.fn()} />);

        expect(screen.getByLabelText('Buy milk')).toBeChecked();
    });

    it('should call toggle todo function', () => {
        // Arrange
        const toggleTodo = jest.fn();
        render(<Todo todo={todo} toggleTodo={toggleTodo} editTodo={jest.fn()} deleteTodo={jest.fn()} />);

        // Act
        user.click(screen.getByLabelText('Buy milk'));

        // Assert
        expect(toggleTodo).toHaveBeenCalled();
    });

    it('should call delete todo function', () => {
        // Arrange
        const deleteTodo = jest.fn();
        render(<Todo todo={todo} toggleTodo={jest.fn()} editTodo={jest.fn()} deleteTodo={deleteTodo} />);

        // Act
        user.click(screen.getByText('Delete'));

        // Assert
        expect(deleteTodo).toHaveBeenCalledWith('unique-id');
    });
});