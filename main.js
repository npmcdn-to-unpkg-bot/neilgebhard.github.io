var React = require('react');
var ReactDOM = require('react-dom');
var Typist = require('react-typist');

var Typed = React.createClass({

	render: function() {
		delayGen = function(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
			if (lineIdx === 0 && charIdx === line.length - 1) { return 1500; }
			if (lineIdx === 1 && charIdx === line.length - 1) { return 1500; }
			if (lineIdx === 2 && charIdx === line.length - 1) { return 1500; }
	    	return defDelayGenerator(mean + 20);
		}


		onTypingDone = function() {
			var shine = new Shine(document.getElementById('?????'));

			function handleMouseMove(event) {
				shine.light.position.x = event.clientX;
				shine.light.position.y = event.clientY;
				shine.draw();
			}

			window.addEventListener('mousemove', handleMouseMove, false);
		}

	    return (
    		<Typist delayGenerator={delayGen} cursor={{hideWhenDone: true, hideWhenDoneDelay: 10000}}>
	    		<span className="brand-heading">hi there</span>
	    		<br />
	    		<span className="intro-text">Welcome to my humble website</span>
	    		<br />
	    		<span className="intro-text">There's not much here yet</span>
	    		<br />
	    		<span className="intro-text">But soon there will be!</span>
	    	</Typist>
	    );
	}

	
});

ReactDOM.render(<Typed />, document.getElementById('headline'));