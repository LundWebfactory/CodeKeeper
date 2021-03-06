var outerLayout, middleLayout, innerLayout_Center, innerLayout_South;
function createLayouts () {
		outerLayout = $('#layout_container').layout({ // LEFT SIDE
				name:					"outer"
			,	spacing_open:			6 // ALL panes
			,	spacing_closed:			8 // ALL panes
			,	center__paneSelector:	".outer-center"
			,	west__paneSelector:		".outer-west"
			,	resizable:				false
			,	west__size:				300
			,   west__height:				'100%'
		});
		middleLayout = $('div.outer-center').layout({
				name:					"middle"
			,	center__paneSelector:	".middle-center"
			,	south__paneSelector:	".middle-south"
			,	south__size:			300
			,	minSize:				100
			,	maxSize:				800
			,	spacing_open:			6	// ALL panes
			,	spacing_closed:			8 // ALL panes
		});
		innerLayout_Center = $('div.middle-center').layout({
				name:					"innerCenter"
			,	center__paneSelector:	".north-center"
			,	west__paneSelector:		".north-west"
			,	east__paneSelector:		".north-east"
			,	west__size:				300
			,	east__size:				.33
			,	minSize:				100
			, 	center__minWidth:		100
			,	spacing_open:			6	// ALL panes
			,	spacing_closed:			6	// ALL panes
			,	west__spacing_closed:	8
			,	east__spacing_closed:	8
		});
		innerLayout_South = $('div.middle-south').layout({
				name:					"innerSouth"
			,	center__paneSelector:	".south-center"
			,	west__paneSelector:		".south-west"
			,	east__paneSelector:		".south-east"
			,	west__size:				.33
			,	east__size:				.33
			,	minSize:				100
			,	center__minWidth:		100
			,	spacing_open:			6	// ALL panes
			,	spacing_closed:			6	// ALL panes
			,	west__spacing_closed:	8
		});
};

$(document).ready(function(){
	//createLayouts();
	$('#layout_container').css('height',$(window).height()-37);
	$('#layout_container').css('top','35px');
	createLayouts();
});