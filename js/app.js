// #header
	
	var
		header_handlebars = $('#header-handlebars').html(),
		header_template = Handlebars.compile(header_handlebars),
		
		header_data = {
			title : "Foundation 4 x Handlebars",
			version : "v4.2.1"
		}
	;
	
	$('#header').append(header_template(header_data));
	
	
	
// #content

	var
		content_handlebars = $('#content-handlebars').html(),
		content_template = Handlebars.compile(content_handlebars),
		
		content_data = {
			grid_title: "The Grid",
			buttons_title: "Buttons"
		}
	;
	
	$('#content').append(content_template(content_data));