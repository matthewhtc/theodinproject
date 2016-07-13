//everything goes inside the $(document).ready part!
$(document).ready(function() {

	//declare variables
	var $grid = $(".grid");
	var $clear = $("#clear");
	var $trail = $("#trail");
	var size = 16; //default grid size is 16x16
	var option = true;

	//making the grid 
	var createGrid = function(size, option) {
		for(var i = 0; i < size; i++) {
			for(var j = 0; j < size; j++) {
				$grid.append("<div class='box'></div>");
			}
		$grid.append("<br>");
		}	

		if (option) {
			hover();
		}
		else {
			trail();
		}
	}

	var hover = function() {
		$('.box').hover(function() {
 			$(this).css("background-color", "black");
 		});
	};

	//declare toggle between trail function
 	var trail = function() {
 		

 		$('.box').hover(function() {
 			$(this).css("opacity", 0);
 		}, function() {
 			$(this).fadeTo('fast', 1);
 			//$(this).css("background-color", "#e45151;");
 		});
 	};

	createGrid(size, option);
	

	//clear grid
 	$clear.on('click', function() {
 		size = prompt("Please enter the number of squares per side to make the new grid:");
 		//remove grid
 		$grid.empty();
 		//call createGrid function
 		createGrid(size, option);
 	});

 	//toggle btw trail
 	$trail.on('click', function() {
 		size = prompt("Please enter the number of squares per side to make the new grid:");
 		//remove grid
 		$grid.empty();
 		option = false;
 		//call createGrid function
 		createGrid(size, option);
 		
 	});

});