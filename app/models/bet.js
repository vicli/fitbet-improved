import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	goaltype: attr('string'),
	goal: attr('number'),
	betamount: attr('number'),
	startdate: attr('date'),
	enddate: attr('date'),
	status: attr('string'),
	charity: attr('string')
});
