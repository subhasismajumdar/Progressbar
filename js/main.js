function customizeProgress(x){
				var progressID=$("#progressID").val();
				var progressPercentage=parseInt($(progressID).children('.progressPercentage').html().split('%')[0])+x;
				var progressBarColor="#d8e6ae";
				var progressWidth=progressPercentage;
				if(progressPercentage<0){
					progressPercentage=0;
					progressWidth=0;
				}
				else if(progressPercentage>100){
					 progressBarColor="#f00";
					 progressWidth=100;
				}
				$(progressID).children('.progressPercentage').html(progressPercentage+"%")
				$(progressID).children(".progressBar").css({'width':progressWidth+"%","background-color":progressBarColor});
			}