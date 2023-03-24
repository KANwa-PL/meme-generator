function Label(props) {
    const label = props.login === "" ? "You're not logged in" : "Logged in as " + props.login;
    return (
        <p>{label}</p>
    )

}

export default Label;
