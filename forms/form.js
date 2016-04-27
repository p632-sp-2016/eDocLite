import React from 'react';
import { TextBox, Dropdown, Btn } from '../src/components/ToolBoxComponents';

export default class Form extends React.Component {

	render() {
		return (
			<div>
				<TextBox name="TextBox" elements={[{"label":"Text Box","placeholder":"Some Text","bsSize":{"value":"medium","options":["default","large","medium","small"]}}]} selectedElement={0} />
				<Dropdown name="Dropdown" elements={[{"label":"Dropdown Menu","options":[{"label":"A","value":"AA"},{"label":"B","value":"BB"},{"label":"C","value":"CC"}],"bsSize":{"value":"medium","options":["default","large","medium","small"]}}]} selectedElement={0} />
				<Btn name="Btn" elements={[{"children":"Button","bsStyle":{"value":"default","options":["default","danger","info","primary","success","warning"]},"bsSize":{"value":"small","options":["default","large","small","xsmall"]}}]} selectedElement={0} />
			</div>
		);
	}
}
