var Gmod_OutcomeArray_Keyword1 = [
	"Airplanes",
	"Archery",
	"Acrobats",
	"Animals",
	"Balloons",
	"Buttons",
	"Boats",
	"Cactus'",
	"Cake",
	"Chess",
	"Comedy",
	"Cooking",
	"Cowboys",
	"Desert",
	"Dinosaurs",
	"Dynamite",
	"Digging",
	"Dice",
	"Earth",
	"Electric",
	"Eating",
	"Explosives",
	"Flowers",
	"Fire",
	"Football",
	"Flying",
	"Fruit",
	"Garbage",
	"Guns",
	"Golf",
	"Guitar",
	"Helicopters",
	"Island",
	"Ice",
	"Jump-rope",
	"Jigsaws",
	"Keyboard",
	"Lantern",
	"Melons",
	"Numbers",
	"Paint",
	"Parachutes",
	"Questions",
	"Radio",
	"Rainbows",
	"Robots",
	"Sailing",
	"Sea",
	"Snow"

];
	
var Gmod_OutcomeArray_Keyword2 = [
	"Side-Scrolling",
	"Top Down",
	"Competitive",
	"Roleplay",
	"Deathmatch",
	"Survival",
	"Parody",
	"Humour",
	"Building",
	"Racing",
	"Experimentation",
	"Tycoon",
	"Adventure",
	"Management",
	"Action",
	"Sports",
	"Collecting",
	"Realism",
	"Stealth",
	"Psychology",
	"Music",
	"Single-Player",
	"Fighting",
	"On-Rails",
	"Escape",
	"Party Games",
	"Maze",
	"Puzzles",
	"Teamwork",
	"Rhythm",
	"Simulation",
	"Sandbox",
	"Strategy",
	"Horror"
];

var Gmod_OutcomeArray_Type = [
	//"Addon",
	//"HUD",
	"Gamemode"
];
	

function Gmod_Generate_Outcome_Type()
{
	var keyword_1 = Gmod_OutcomeArray_Keyword1[Math.floor(Math.random()*Gmod_OutcomeArray_Keyword1.length)]
	var keyword_2 = Gmod_OutcomeArray_Keyword2[Math.floor(Math.random()*Gmod_OutcomeArray_Keyword2.length)]
	//var type = Gmod_OutcomeArray_Type[Math.floor(Math.random()*Gmod_OutcomeArray_Keyword1.Gmod_OutcomeArray_Type)]
	
	var outcome_type_display = document.getElementById("gmod_output");
	outcome_type_display.innerHTML = "A gamemode that combines " + keyword_1 + " and " + keyword_2 + "."
}