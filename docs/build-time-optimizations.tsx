import { convert } from 'convert';

// Your React/Svelte/Vue/Vite/Webpack app:

render(
	<div>
		<p>there are {convert(55_800, 'seconds').to('hours')} hours remaining</p>
	</div>,
);
/*
Compiles to a pure number constant during build phase:
<div>
	<p>there are 15.5 hours remaining</p>
</div>
*/
