import {convert} from 'convert';

// Your React/Vue/Svelte/Aurelia/Angular/Webpack-powered app:

render(
	<div>
		<p>there are {convert(55800, 'seconds').to('hours')} hours remaining</p>
	</div>,
);
/*
compiles to a pure number constant during build phase:
<div>
	<p>there are 15.5 hours remaining</p>
</div>
*/
