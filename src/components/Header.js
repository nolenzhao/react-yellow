import Nav from './Nav'
const Header = (props) =>
{
    return(
        <header> 
            <Nav/>
            
            <h1 class = "title"> {props.title} </h1>
            <div className = "borderref"> </div>
        </header>

    )
}

Header.defaultProps = {
    title: "YELLOW VANCOUVER",
}
export default Header