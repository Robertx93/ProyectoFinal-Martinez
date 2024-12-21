export const withLoading = (Component) => {
    function ComponentWithLoading (props) {
        if (props.items.length < 1) {
            return <div>Aguarda un momento...</div>
        }
        
        return (
            <Component { ...props} />
        )
    }
    return ComponentWithLoading
}