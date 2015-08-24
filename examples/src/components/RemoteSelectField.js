import React from 'react';
import Select from 'react-select';

import CountrySelect from '../components/CountrySelect';
const STATES = require('../data/states');
var id = 0;

var RemoteSelectField = React.createClass({
	displayName: 'RemoteSelectField',
	propTypes: {
		label: React.PropTypes.string,
	},
	loadOptions (input, callback) {
		input = input.toLowerCase();
		var rtn = {
			options: [
				{ label: 'One', value: 'one' },
				{ label: 'Two', value: 'two' },
				{ label: 'Three', value: 'three' }
			],
			complete: true
		};
		if (input.slice(0, 1) === 'a') {
			if (input.slice(0, 2) === 'ab') {
				rtn = {
					options: [
						{ label: 'AB', value: 'ab' },
						{ label: 'ABC', value: 'abc' },
						{ label: 'ABCD', value: 'abcd' }
					],
					complete: true
				};
			} else {
				rtn = {
					options: [
						{ label: 'A', value: 'a' },
						{ label: 'AA', value: 'aa' },
						{ label: 'AB', value: 'ab' }
					],
					complete: false
				};
			}
		} else if (!input.length) {
			rtn.complete = false;
		}

		setTimeout(function() {
			callback(null, rtn);
		}, 500);
	},
	render () {
		return (
			<div>
				<label className="section-label" className="section-label">{this.props.label}</label>
				<Select asyncOptions={this.loadOptions} className="remote-example" />
			</div>
		);
	}
});

module.exports = RemoteSelectField;