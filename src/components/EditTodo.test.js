import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event";
import {EditTodo} from "./EditTodo"
const todo = {
    title: 'Buy milk',
    id: 'unique-id',
    completed: false
};
describe('EditTodo', () => {
    beforeEach(() => {
        render(<EditTodo todo={todo} />)
    });

    it('should have todo\'s title as initial state', () => {
        expect(screen.getByDisplayValue('Buy milk')).toBeInTheDocument();
    });

    it('should call edit todo with the updated title', () => {
        user.type(screen.getByDisplayValue('Buy milk'), ' test');

        expect(screen.getByDisplayValue('Buy milk test')).toBeInTheDocument();
    });
})