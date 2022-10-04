import PropTypes from 'prop-types';

export default function Accordion(props){
	let backgroundColor='';
	let textColor='';
	if(props.darkMode){
		backgroundColor='black';
		textColor='white';
	}
	else{
		backgroundColor=null;
		textColor=null;
	}
	return(
  	<div className={`accordion-item bg-${backgroundColor} text-${textColor}`}>
    	<h2 className="accordion-header" id={props.heading}>
      	<button className={`accordion-button bg-${backgroundColor} text-${textColor}`} type="button" style={{textTransform: "uppercase"}} data-bs-toggle="collapse" data-bs-target={`#${props.sub}`} aria-expanded="true" aria-controls={props.sub}>
       		{props.title}
      	</button>
    	</h2>
    	<div id={props.sub} className="accordion-collapse collapse show" aria-labelledby={props.heading} data-bs-parent="#accordionExample">
      		<div className={`accordion-body bg-${backgroundColor} text-${textColor}`}>
       			<strong>Info. </strong>{props.description} 
      		</div>
    	</div>
  	</div>

	);
}

Accordion.propTypes = {
	title:PropTypes.string,
	description:PropTypes.string
}