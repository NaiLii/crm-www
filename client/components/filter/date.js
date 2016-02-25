angular.module('crmWwwApp').filter('dateformat', function () {
	return function (o) {
		if (o && o.birthday) {
			o.birthday = o.birthday ? (new Date(o.birthday)) : null;
		}
		return o;
	};
});