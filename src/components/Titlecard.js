

const Titlecard = (props) =>
{
    return(
        <h1 className = "title"> {props.title} </h1>
    )
}

Titlecard.defaultProps = {
    title: "YELLOW VANCOUVER",
}

export default Titlecard