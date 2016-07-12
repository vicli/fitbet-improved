import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		var clientID = "227PXD";
		window.open(
			encodeURI(
			    'https://www.fitbit.com/oauth2/authorize'
			    + '?client_id=' + clientID
			    + '&response_type=code'
			    + '&scope=profile activity'
				+ '&redirect_uri=http://localhost:8000/auth'
			),
		'Fitbit',
		'width=550, height=700');
	}
});
