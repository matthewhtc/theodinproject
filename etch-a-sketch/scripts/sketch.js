//everything goes inside the $(document).ready part!
$(document).ready(function() {

	//declare variables
	var $grid = $(".grid");
	var $clear = $("#clear");
	var $trail = $("#trail");
	var size = 16; //default grid size is 16x16

	//making the grid 
	var createGrid = function(size) {
		for(var i = 0; i < size; i++) {
			for(var j = 0; j < size; j++) {
				$grid.append("<div class='box'></div>");
			}
		$grid.append("<br>");
		}	
	}

	var hover = function() {
		$('.box').hover(function() {
 			$(this).css("background-color", "black");
 	});
	}

	//declare toggle between trail function
 	var toggle = function() {
 		$('.box').hover(function() {
 			$(this).css("background-color", "black");
 		}), function() {
 			$(this).css("background-color", "#e45151");
 		}
 	};

	createGrid(size);
	hover();
	
	//clear grid
 	$clear.on('click', function() {
 		size = prompt("Please enter the number of squares per side to make the new grid:");
 		//remove grid
 		$grid.empty();
 		//call createGrid function
 		createGrid(size);
 		hover();
 	});

 	//toggle btw trail
 	$trail.on('click', function() {
 		toggle();
 	});

 	//toggle between trail
 	var toggle = function() {
 		$('.box').hover(function() {
 			$(this).css("background-color", "black");
 		}), function() {
 			$(this).css("background-color", "#e45151");
 		}
 	};

 
});