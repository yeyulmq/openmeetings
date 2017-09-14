/* Licensed under the Apache License, Version 2.0 (the "License") http://www.apache.org/licenses/LICENSE-2.0 */
function adminPanelInit() {
	if (typeof extAdminPanelInit === 'function') {
		extAdminPanelInit();
	}
	let f = $('#adminForm'), t = $('#adminTable')
		, h = $(window).height() - 5;
	f.height(h - f.position().top);
	t.height(h - t.position().top);
}
