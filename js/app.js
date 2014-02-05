window.onload = function(){
var WIDTH = document.body.offsetWidth;
var HEIGHT = document.body.offsetHeight;
var stage = new PIXI.Stage(0x111111);


// let pixi choose WebGL or canvas
var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT);

// attach render to page
document.body.appendChild(renderer.view);

// BACKGROUNDS!!!!!! 0-------------------------------

 var farTexture = PIXI.Texture.fromImage("data/far.png");
  far = new PIXI.Sprite(farTexture);
  far.position.x = -400;
  far.position.y = -400;
  stage.addChild(far);

// BACKGROUNDS !!!!!! END END END END END END END END END END END


var texture = PIXI.Texture.fromImage('data/duck.png');
var leaf = new PIXI.TilingSprite(texture, 127, 143);
leaf.scale.x = leaf.scale.y = 0.5;

// run
// leaf.tilePosition = new PIXI.Point(-255,0);
// leaf.tilePosition = new PIXI.Point(-127,0);

// jump
// leaf.tilePosition = new PIXI.Point(121,0);

// rotate around center
leaf.anchor.x = 0.5;
leaf.anchor.y = 0.5;

// center in stage
var xx = leaf.position.x = WIDTH / 2;
leaf.position.y = HEIGHT / 2;


// place it on the stage for rendering
stage.addChild(leaf);


document.onmousemove = function(e)
{
	if(e.clientX<xx)
		leaf.scale.x=-.5;
	else
		leaf.scale.x=.5;

	leaf.position.x = e.clientX;
	leaf.position.y = e.clientY;
	xx = e.clientX;
}

document.onmousedown = function(e)
{
	leaf.tilePosition = new PIXI.Point(121,0);
	ix = 'f'+Math.floor((Math.random()*4)+1);
	document.getElementById(ix).play();
}

document.onmouseup = function(e)
{
	leaf.tilePosition = new PIXI.Point(0,0);
}

function gameLoop() {
  requestAnimFrame(gameLoop);
  //leaf.position.x =
  
  renderer.render(stage);
}

requestAnimFrame(gameLoop);

};