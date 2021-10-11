import {renderHook, act} from '@testing-library/react-hooks';
import { TodosProvider } from '../state/context';
import { useTodos } from './useTodos';
import {ulid} from 'ulid'

const Wrapper = ({children}) => <TodosProvider>{children}</TodosProvider>;

jest.mock('ulid');

describe('useTodos', () => {
    afterEach(jest.clearAllMocks);

    it('should return the initial state', () => {
        const { result } = renderHook(() => useTodos(), {wrapper: Wrapper});
        expect(result.current.todos).toHaveLength(0);
    });

    it('should create a new todo', () => {
        ulid.mockReturnValueOnce('generated-id');
        
        const { result } = renderHook(() => useTodos(), {wrapper: Wrapper});
        act(() => {
            result.current.createTodo('Afroditi');
        });

        expect(result.current.todos).toStrictEqual([{title: 'Afroditi', id: 'generated-id', completed: false}]);
    });
})