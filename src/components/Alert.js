const Alert = (props) =>{
	if(props.data){
	return(
	<div class={`alert alert-${props.data.type} alert-dismissible fade show`} role="alert">
  		<strong>Info! </strong>{props.data.msg}.
  		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>
	);
	}
}

export default Alert;