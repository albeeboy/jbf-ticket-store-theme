// JavaScript Document

(function() {
	
	var urlParams = urlObject({'url': window.location.href});
	var pid = urlParams.parameters.pid;
	var entryURL;
	switch (pid) {
		case '4967182':
			entryURL = 'http://jbftickets.myshopify.com/pages/tickets-general-public';
			break;
		case '4967822':
			entryURL = 'http://jbftickets.myshopify.com/pages/tickets-members';
			break;
		case '4968382':
			entryURL = 'http://jbftickets.myshopify.com/pages/tickets-jbf-board';
			break;
		case '160897095':
			entryURL = 'http://jbftickets.myshopify.com/pages/tickets-gala-cooking-chefs';
			break;
		case '4970572':
			entryURL = 'http://jbftickets.myshopify.com/pages/tickets-jbf-1';
			break;
		case '4970632':
			entryURL = 'http://jbftickets.myshopify.com/pages/tickets-jbf-2';
			break;
		case '4972462':
			entryURL = 'http://jbftickets.myshopify.com/pages/tickets-bbj-jbf-3';
			break;
		case '4972482':
			entryURL = 'http://jbftickets.myshopify.com/pages/tickets-jbf-bbj-4';
			break;
		default:
			entryURL = 'http://jbftickets.myshopify.com/pages/tickets-general-public';		
	}
	
	window.onload = function() {
		document.getElementById('continue-shopping-anchor').href = entryURL;
	};
	
})();