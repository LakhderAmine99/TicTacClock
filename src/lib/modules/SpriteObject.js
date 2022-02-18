const Sprite = {

    image:null,

	x : 0,
	y : 0,
	width : 80,
	height : 80,

	vx : 0,
	vy : 0,

	centerx : function() 
	{
		return this.x + this.width/2;
	},

	centery : function() 
	{
		return this.y + this.height/2;
	},

	halfwidth : function() 
	{
		return this.width/2;
	},

	halfheight : function() 
	{
		return this.height/2;
	},
};