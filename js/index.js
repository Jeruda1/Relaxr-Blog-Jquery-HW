$("document").ready(function(){

	console.log("Its working")
	
	
	function textSlideDown(event){
		event.preventDefault();
		$("#show-this-on-click").slideDown("slow",function(){
			$(".readmore").hide();
			$(".readless").show();
		});	
	}
/* ()for slide down event specify "duration", then function within function to describe
 that .readmore will become "read less" when clicked */

$(".readmore").click(textSlideDown);

	function hideReadMore(){
		$(".readmore").hide();
	}
function textSlideUp(){
	event.preventDefault();
	$("#show-this-on-click").slideUp("slow",function(){
			$(".readmore").show();
			$(".readless").hide();
		});	
	}
$(".readless").click(textSlideUp);

//sidebar functions

function learnSlideDown(event){
		event.preventDefault();
		$("#learnmoretext").slideDown("slow",function(){
			$(".learnmore").hide();
			$(".learnless").show();
		});	
	}

$(".learnmore").click(learnSlideDown);

	function hideLearnMore(){
		$(".learnmore").hide();
	}
function learnSlideUp(){
	event.preventDefault();
	$("#learnmoretext").slideUp("slow",function(){
			$(".learnmore").show();
			$(".learnless").hide();
		});	
	}
$(".learnless").click(learnSlideUp);










});

// If a user clicks "Read More" on the primary column:

// have the text in the <p> tag slide down along with a "Read Less" 
//link in the blog post using $.slideDown() and $.show()
// hide the "Read More" link using $.hide()
// If a user clicks "Read Less" on the primary column:

// have the <p> slide up and hide the "Read Less" link using $.slideUp() and $.hide()
// show the "Read More" link using $.show()
// Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the <span> inside that <p> slide down and hide the "Learn More" link using $.slideDown() and $.hide()