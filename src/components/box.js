function Box(props) {
  return (
    <div
      className="box"
      style={{ backgroundColor: props.on ? "#222222" : "#cccccc" }}
      key={props.id}
      onClick={()=>props.handleToggle(props.id)}
    />
  );
}

export default Box;
