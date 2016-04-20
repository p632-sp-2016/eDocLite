import React from 'react';

export default class Form extends React.Component {
	render() {
		return (
			<div><div class="form-group"><label class="control-label">Name</label><input type="text" label="Name" placeholder="Enter name..." class="form-control"/></div><div class="form-group"><label class="control-label">Dropdown Menu</label><select type="select" label="Dropdown Menu" class="form-control"><option value="A">DropDown_A</option><option value="B">DropDown_B</option><option value="C">DropDown_C</option></select></div><a href="http://www.google.com/">Google</a><button type="button" class="btn btn-primary">Submit</button></div>
	    );
	}
}
