const withLoading = (WrappedComponent) => {
    // return (props) => {
    //     return <WrappedComponent {...props} />
    // }
    return ({ isLoading, ...props }) => {
        if (isLoading) {
            return <h2 className="text-black">Loading...</h2>;
        }
        return <WrappedComponent {...props} />;
    };
}

const DataComponent = ({ data, isLoading }) => {
    // if (isLoading) {
    //     return <h2 className="text-black">Loading...</h2>;
    // }
    return <h2 className="text-black">{data}</h2>;
};

const EnhancedDataComponent = withLoading(DataComponent);

const FinalComponent = () => {
    return <EnhancedDataComponent isLoading={false} data="Hello" />;
}

export default FinalComponent;

/*

A Higher-Order Component (HOC) in React is an advanced pattern for reusing component logic. 
A HOC is a function that takes a component as an argument and returns a new component with 
enhanced functionality.

✅ HOCs wrap components to provide additional logic.
✅ They are pure functions (don't modify the original component).
✅ They improve reusability and separation of concerns.
✅ Alternative: Custom Hooks (preferred for functional components).

*/