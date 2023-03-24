function Body(props) {
    let welcome = props.login === "" ? "Please log in" : "Welcome, " + props.login + "!";
    return (
        <p>{welcome}</p>
    )
}

export default Body;
