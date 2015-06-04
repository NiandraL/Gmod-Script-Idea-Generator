var NotRunning = true
var dice_anim_interval

var Dice_Image_Array = [
	"images/dice-six-faces-one.png",
	"images/dice-six-faces-two.png",
	"images/dice-six-faces-three.png",
	"images/dice-six-faces-four.png",
	"images/dice-six-faces-five.png",
	"images/dice-six-faces-six.png"
];
	
function Gmod_ButtonHoverDesign()
{	
	var Dice_1 = document.getElementById("gmod_dice_1");
	var Dice_2 = document.getElementById("gmod_dice_2");
				
	Dice_1.src = Dice_Image_Array[Math.floor(Math.random()*Dice_Image_Array.length)]
	Dice_2.src = Dice_Image_Array[Math.floor(Math.random()*Dice_Image_Array.length)]
				
	if (NotRunning)
	{
		dice_anim_interval = setInterval(Gmod_ButtonHoverDesign, 300);
		NotRunning = false;
	}
}
			
function Gmod_ButtonExitDesign()
{
	clearInterval(dice_anim_interval);
	NotRunning = true
}
		
		
function Gmod_RunGenerateFunctions()
{
	Gmod_Generate_Outcome_Type();
	Gmod_Generate_Outcome_Keyword1();
	Gmod_Generate_Outcome_Keyword2();
}