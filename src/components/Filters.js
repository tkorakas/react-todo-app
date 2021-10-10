import { useTodos } from "../hooks/useTodos"
import { SHOW_ALL, SHOW_COMPLETED, SHOW_TODO } from "../state/actions";

export const Filters = ({activeFilter, showAll, showCompleted, showTodo}) => {
    return (
        <>
            <FilterButton updateFilter={showAll} label={'All'} isActive={activeFilter === SHOW_ALL} />
            <FilterButton updateFilter={showCompleted} label={'Completed'} isActive={activeFilter === SHOW_COMPLETED} />
            <FilterButton updateFilter={showTodo} label={'Todo'} isActive={activeFilter === SHOW_TODO} />
        </>
    );
}

const FilterButton = ({label, updateFilter, isActive}) => (<button style={{backgroundColor: isActive ? 'rebeccapurple' : 'white'}} onClick={updateFilter}>{label}</button>);

export const withFiltersState = (Component) => (props) => {
    const {filter} = useTodos();

    return <Component {...props} activeFilter={filter} />
}

export default withFiltersState(Filters);