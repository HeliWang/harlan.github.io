var mystage = new createjs.Stage("mygame");
createjs.Ticker.setFPS(35);
createjs.Ticker.addEventListener("tick", mystage);


var gameContainer = new createjs.Container();
gameContainer.x = 30;
gameContainer.y = 30; // begin gameContainer at (30,30)
mystage.addChild(gameContainer);

function Circle(){
	createjs.Shape.call(this); //inheritance
	this.setType = function (type) {
		this.type = type;
		switch (type) {
			case 0:
				this.fillColor("#cccccc"); //type=0:grey spot
				break;
			case 1:
				this.fillColor("#ff6600"); //type=1:orange spot
				break;
			case 2:
				this.fillColor("#0000ff"); //type=2:blue spot(the cat spot)
		}
	}
	this.getType = function (){
		return this.type;
	}
	this.fillColor = function (colorString){
		this.graphics.beginFill(colorString);
		this.graphics.drawCircle(0,0,25);
		this.graphics.endFill();
	}
	this.setType(0);
}
Circle.prototype = new createjs.Shape();


var CircleArray = [
	[],	[],	[],	[],	[],	[],	[],	[],	[]
];
// a two-dimension 9*9 array to store circles

var currentCat;

function circleClicked(event){
	if (event.target.getType() != 2){
		event.target.setType(1);
	}
	//alert(currentCat.indexX);
	if (currentCat.indexX == 0 || currentCat.indexX == 8 || currentCat.indexY == 0 || currentCat.indexY == 8) {
		alert("You lost :<");
		return;
	}

	var leftCircle = CircleArray[currentCat.indexX - 1][currentCat.indexY];
	var rightCirle = CircleArray[currentCat.indexX + 1][currentCat.indexY];
	var lefttopCirle = CircleArray[currentCat.indexX - 1][currentCat.indexY - 1];
	var righttopCirle = CircleArray[currentCat.indexX][currentCat.indexY - 1];
	var leftbottomCirle = CircleArray[currentCat.indexX - 1][currentCat.indexY + 1];
	var rightbottomCirle = CircleArray[currentCat.indexX][currentCat.indexY + 1];

	if (leftCircle.getType() == 0) {
		leftCircle.setType(2);
		currentCat.setType(0);
		currentCat = leftCircle;
		console.log ("GoLeft");
	}
	else if (rightCirle.getType() == 0) {
		rightCirle.setType(2);
		currentCat.setType(0);
		currentCat = rightCirle;
		console.log ("GoRight");
	}
	else if (lefttopCirle.getType() == 0) {
		lefttopCirle.setType(2);
		currentCat.setType(0);
		currentCat = lefttopCirle;
		console.log ("GoLeftTop");
	}
	else if (righttopCirle.getType() == 0) {
		righttopCirle.setType(2);
		currentCat.setType(0);
		currentCat = righttopCirle;
		console.log ("GoRightTop");
	}
	else if (leftbottomCirle.getType() == 0) {
		leftbottomCirle.setType(2);
		currentCat.setType(0);
		currentCat = leftbottomCirle;
		console.log ("GoLeftBottom");
	}
	else if (rightbottomCirle.getType() == 0) {
		rightbottomCirle.setType(2);
		currentCat.setType(0);
		currentCat = rightbottomCirle;
		console.log ("GoRightBottom");
	}else{
		alert("You win! Good job!");
	}
}


function addCircle(){
	for (var i = 0;i<9;i++){
			for (var j = 0;j<9;j++){
				var newCircle = new Circle();
				newCircle.setType(0); //grey circle
				newCircle.indexX = j;
				newCircle.indexY = i;
				newCircle.x = j*55;
				newCircle.y = i*55;
			    gameContainer.addChild(newCircle);
				CircleArray[j][i] = newCircle;
				
				if (i==4&&j==4){
					newCircle.setType(2);
					currentCat = newCircle;
				}
				newCircle.addEventListener("click",circleClicked);
			}
	}
}

addCircle();
