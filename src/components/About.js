import Accordion from './Accordion.js';

const About = (props) => {
    return ( 
    	<>
        <h1>About Our App</h1> 
        <div className="accordion" id="accordionExample">
        	<Accordion darkMode={props.darkMode} heading="headingOne" sub="collapseOne" title="simple" description="Our app is simple."/>
        	<Accordion darkMode={props.darkMode} heading="headingTwo" sub="collapseTwo" title="fast" description="Our app is fast."/>
        	<Accordion darkMode={props.darkMode} heading="headingThree" sub="collapseThree" title="free" description="Our app is free."/>
        </div>
        </>
    );
}

export default About;