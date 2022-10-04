const Alert = (props) =>{
	if(props.data){
	return(
	<div class={`alert alert-${props.data.type}`} role="alert">
  		<strong>Info! </strong>{props.data.msg}.
	</div>
	);
	}
}

export default Alert;