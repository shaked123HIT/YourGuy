(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Interactive Who_s your guy_atlas_1", frames: [[1280,1114,290,403],[2028,0,15,170],[1359,1765,263,76],[0,0,1762,1112],[1077,1738,280,84],[839,1114,236,669],[358,1114,245,761],[1764,0,262,848],[1572,1114,130,375],[1590,1639,344,124],[1280,1519,308,217],[1077,1114,201,608],[605,1114,232,694],[1764,850,248,787],[0,1114,356,827]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2293,1052);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2483,1305);


(lib.boximg = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.chef = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cookinglesson = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.DJ = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.greybaloon = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.LightRec = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.logohittelem = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.manipadi = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.pastrycook = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.rabbi = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.simpleBalloon = function() {
	this.initialize(ss["Interactive Who_s your guy_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TextBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.537)").ss(1,1,1).p("Eg7ggS4MB3BAAAQBjAABGBLQBHBLAABqIAAdwQAABqhHBLQhGBMhjAAMh3BAAAQhjAAhHhMQhGhLAAhqIAA9wQAAhqBGhLQBHhLBjAAg");
	this.shape.setTransform(404.85,120.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,255,0.667)").s().p("Eg7gAS5QhjAAhGhMQhGhLgBhqIAA9wQABhqBGhLQBGhLBjAAMB3BAAAQBjAABGBLQBHBLAABqIAAdwQAABqhHBLQhGBMhjAAg");
	this.shape_1.setTransform(404.85,120.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBox, new cjs.Rectangle(-1,-1,811.7,243.8), null);


(lib.release = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("מסיבת שחרור", "35px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 226;
	this.text.parent = this;
	this.text.setTransform(-87.75,-31.95);

	this.instance = new lib.boximg();
	this.instance.setTransform(-228,-53);

	this.instance_1 = new lib.LightRec();
	this.instance_1.setTransform(-273,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273,-70,344,124);


(lib.RAVAKOT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("מסיבת רווקות", "35px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 251;
	this.text.parent = this;
	this.text.setTransform(-36.6,-100.5);

	this.instance = new lib.boximg();
	this.instance.setTransform(-166,-120);

	this.instance_1 = new lib.LightRec();
	this.instance_1.setTransform(-205,-139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-139,344,124);


(lib.marry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("יום נישואין", "35px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 265;
	this.text.parent = this;
	this.text.setTransform(-23.75,-40.9);

	this.instance = new lib.boximg();
	this.instance.setTransform(-157,-60);

	this.instance_1 = new lib.LightRec();
	this.instance_1.setTransform(-193,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193,-80,344,124);


(lib.bday = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("יום הולדת", "35px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 214;
	this.text.parent = this;
	this.text.setTransform(-9.3,-57.75);

	this.instance = new lib.boximg();
	this.instance.setTransform(-144,-80);

	this.instance_1 = new lib.LightRec();
	this.instance_1.setTransform(-177,-93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-80}},{t:this.text}]}).to({state:[{t:this.instance,p:{y:-71}},{t:this.text},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177,-93,344,124);


(lib.barbat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("בר/בת מצווה", "35px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 275;
	this.text.parent = this;
	this.text.setTransform(2.65,-17.15);

	this.instance = new lib.boximg();
	this.instance.setTransform(-139,-42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("A2Kn4MAsVAAAIAAPxMgsVAAAg");
	this.shape.setTransform(2.35,-118.425);

	this.instance_1 = new lib.LightRec();
	this.instance_1.setTransform(-174,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]},1).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174,-172.4,344,234.4);


(lib.army = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("מסיבת גיוס", "35px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 236;
	this.text.parent = this;
	this.text.setTransform(-15.15,-19.25);

	this.instance = new lib.boximg();
	this.instance.setTransform(-149,-44);

	this.instance_1 = new lib.LightRec();
	this.instance_1.setTransform(-188,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-57,344,124);


(lib.standup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("סטנדאפיסט", "26px 'Rubik Medium'");
	this.text.textAlign = "right";
	this.text.lineHeight = 35;
	this.text.lineWidth = 130;
	this.text.parent = this;
	this.text.setTransform(172.8,-240.2);

	this.instance = new lib.simpleBalloon();
	this.instance.setTransform(4,-315,0.7169,0.6464);

	this.instance_1 = new lib.greybaloon();
	this.instance_1.setTransform(40,-277);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(39.25,-227.2,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(34.35,-285.35,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(35.95,-210.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.7169,scaleY:0.6464,x:4,y:-315}},{t:this.text,p:{scaleX:1,scaleY:1,x:172.8,y:-240.2,font:"26px 'Rubik Medium'",lineHeight:34.55,lineWidth:130}}]}).to({state:[{t:this.instance,p:{scaleX:0.618,scaleY:0.618,x:17,y:-286}},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance,p:{scaleX:0.6122,scaleY:0.6611,x:16,y:-276.5}},{t:this.text,p:{scaleX:0.9908,scaleY:1.0698,x:176.25,y:-210.35,font:"28px 'Rubik Medium'",lineHeight:37.05,lineWidth:144}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,-315,255.2,585.2);


(lib.rav = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("רב/רבנית", "30px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 135;
	this.text.parent = this;
	this.text.setTransform(-3.3,-227.3);

	this.instance = new lib.rabbi();
	this.instance.setTransform(-91.65,-290.8,0.7391,0.7391);

	this.instance_1 = new lib.greybaloon();
	this.instance_1.setTransform(-85,-290,1.2122,1.1214);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9F93BD").ss(17,1,1).p("AMGAAQAAGgjjEmQjiEmlBAAQlAAAjikmQjjkmAAmgQAAmfDjkmQDikmFAAAQFBAADiEmQDjEmAAGfg");
	this.shape.setTransform(-7.075,-196.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-91.65,y:-290.8}},{t:this.text}]}).to({state:[{t:this.instance,p:{x:-91.65,y:-290.8}},{t:this.text},{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance,p:{x:-93,y:-287}},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-305.6,184.7,600.3);


(lib.menicoor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("מניקור", "30px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 94;
	this.text.parent = this;
	this.text.setTransform(14.4,-174.85);

	this.instance = new lib.manipadi();
	this.instance.setTransform(-74.5,-225.35,0.7413,0.7413);

	this.instance_1 = new lib.greybaloon();
	this.instance_1.setTransform(-44,-225,0.888,0.888);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C09FBB").ss(17,1,1).p("AKLAAQAAE3i/DdQi+DckOAAQkNAAi+jcQi/jdAAk3QAAk2C/jcQC+jcENAAQEOAAC+DcQC/DcAAE2g");
	this.shape.setTransform(17.025,-157.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-241.2,165.1,466.6);


(lib.dj = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("תקליטן", "30px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 120;
	this.text.parent = this;
	this.text.setTransform(2.45,-228.2);

	this.instance = new lib.DJ();
	this.instance.setTransform(-92.95,-300.9,0.7097,0.7097);

	this.instance_1 = new lib.greybaloon();
	this.instance_1.setTransform(-78,-301,1.121,1.121);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC33").ss(27,1,1).p("ALlAAQAAFrjaD+QjYEAkzAAQkyAAjZkAQjZj+AAlrQAAlpDZkAQDZj/EyAAQEzAADYD/QDaEAAAFpg");
	this.shape.setTransform(-0.6,-209.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-92.95,y:-300.9}},{t:this.text}]}).to({state:[{t:this.instance,p:{x:-92.95,y:-300.9}},{t:this.text},{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance,p:{x:-93,y:-296}},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-310.7,186,616.5999999999999);


(lib.conditor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("קונדיטור", "30px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 126;
	this.text.parent = this;
	this.text.setTransform(80.15,-287.65);

	this.instance = new lib.pastrycook();
	this.instance.setTransform(6,-341,0.7069,0.7069);

	this.instance_1 = new lib.greybaloon();
	this.instance_1.setTransform(12,-346);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6DB3B9").ss(17,1,1).p("ALGAAQAAFejQD4QjQD3kmAAQklAAjRj3QjPj4AAleQAAldDPj4QDRj3ElAAQEmAADQD3QDQD4AAFdg");
	this.shape.setTransform(79.075,-266.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-359.4,170.4,509);


(lib.cocktail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("סדנת קוקטיילים", "17px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 76;
	this.text.parent = this;
	this.text.setTransform(16,91.25);

	this.instance = new lib.simpleBalloon();
	this.instance.setTransform(-45,61,0.4213,0.4213);

	this.instance_1 = new lib.greybaloon();
	this.instance_1.setTransform(-31,66,0.7012,0.7012);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#88BBAC").ss(15,1,1).p("AHbAAQAADoiLCkQiLCljFAAQjEAAiLilQiLikAAjoQAAjnCLikQCLilDEAAQDFAACLClQCLCkAADng");
	this.shape.setTransform(13.6,122.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.6)").s().p("AjgF2QhdibAAjbQAAjaBdibQBdibCDAAQCEAABdCbQBdCbAADaQAADbhdCbQhdCbiEAAQiDAAhdibg");
	this.shape_1.setTransform(96.225,142.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-45}},{t:this.text}]}).to({state:[{t:this.instance,p:{x:-45}},{t:this.text},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{x:-48}},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,59.4,176,350.1);


(lib.chef_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("שף", "30px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 98;
	this.text.parent = this;
	this.text.setTransform(9.25,-200.85);

	this.instance = new lib.chef();
	this.instance.setTransform(-92,-260.8,0.7797,0.7797);

	this.instance_1 = new lib.greybaloon();
	this.instance_1.setTransform(-65,-258,1.0311,1.0268);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#88BBAC").ss(17,1,1).p("AKHAAQAAFGiQDyQgVAkgZAjQi9EIkMAAQkLAAi9kIQhFhggshvQhNjCAAjuQAAl2C+kIQC9kIELAAQEMAAC9EIQC+EIAAF2g");
	this.shape.setTransform(5.925,-178.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoSKDQgggngcgrQifjwAAlBQAAl4DbkLQDckKE2AAQE2AADcEKQDcELAAF4QAAF5jcEKQgXAdgZAZQjNDVkVAAQk2AAjckLgAHiK5QCQjygBlGQAAl2i9kIQi9kIkLAAQkMAAi9EIQi+EIAAF2QAADvBNDBQhNjBAAjvQAAl2C+kIQC9kIEMAAQELAAC9EIQC9EIAAF2QABFGiQDyg");
	this.shape_1.setTransform(8.05,-190.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-281.9,184,542.7);


(lib.bishul = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// bishul
	this.text = new cjs.Text("סדנת בישול", "30px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 94;
	this.text.parent = this;
	this.text.setTransform(66.5,44.55);

	this.instance = new lib.cookinglesson();
	this.instance.setTransform(0,0,0.6793,0.6793);

	this.instance_1 = new lib.greybaloon();
	this.instance_1.setTransform(-10,0,1.0584,1.0456);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(204,51,204,0.6)").ss(15,1,1).p("AKNAAQAAFui/EDQi/EDkPAAQkOAAi/kDQi/kDAAluQAAltC/kDQC/kDEOAAQEPAAC/EDQC/EDAAFtg");
	this.shape.setTransform(67.575,87.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:0,y:0}},{t:this.text,p:{x:66.5,y:44.55,color:"#000000"}}]}).to({state:[{t:this.instance,p:{x:0,y:0}},{t:this.text,p:{x:66.5,y:44.55,color:"#000000"}},{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance,p:{x:3,y:4}},{t:this.text,p:{x:69.2,y:47.3,color:"#323232"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-8.3,179.5,529.3);


(lib.back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAD0BA").s().p("AAAAHIAAgBIAAgMIAAAAIAAAMIAAABg");
	this.shape.setTransform(-90.875,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F2A20").s().p("AAAgUIAAAAIAAApIAAgpg");
	this.shape_1.setTransform(-31.575,0.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AB7255").s().p("AAAAHIAAgNIAAAAIAAANIAAAAg");
	this.shape_2.setTransform(-5.125,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C4836").s().p("AAAADIAAgGQABADgBADIAAAAg");
	this.shape_3.setTransform(1.8833,-1.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#845842").s().p("AgOAAIAdAAIAAAAIgPAAIgOAAg");
	this.shape_4.setTransform(-46.7,6.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B3225").s().p("AAAAIIAAgPIAAAAIAAAPIAAAAg");
	this.shape_5.setTransform(-50.525,-1.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A513D").s().p("AAAAIIAAAAIAAgPIAAAAIAAAPIAAAAg");
	this.shape_6.setTransform(-50.525,-3.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A56E52").s().p("AAAAHIAAgCIAAgLQABAGgBAFIAAACg");
	this.shape_7.setTransform(-50.5167,-5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#774F3C").s().p("AAAgOIAAAAIAAAAQABAPgBAOIAAgdg");
	this.shape_8.setTransform(-47.5167,-4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#312018").s().p("AAAAnIAAhNIAAAAIAABMIAAABg");
	this.shape_9.setTransform(-53.2,-1.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3D291F").s().p("AgYAAIAAAAIAxAAIgxAAg");
	this.shape_10.setTransform(-34.325,-6.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9C684E").s().p("AAAAIIAAgPIAAAAIAAAOIAAABg");
	this.shape_11.setTransform(-37.275,-5.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#422C21").s().p("ACpAAIAAAAIAkAAIgkAAgAjMAAIAAAAIASAAIgSAAg");
	this.shape_12.setTransform(-26.65,-6.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#412C21").s().p("AAvAAIAAAAIASAAIgSAAgAhAAAIAAAAIASAAIgSAAg");
	this.shape_13.setTransform(-46.325,-6.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCE5D9").s().p("AAFAAIgJAAIAAAAIAJAAIAAAAIAAAAg");
	this.shape_14.setTransform(54.6,41.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7D533F").s().p("AgEAAIAIAAIAAAAIAAAAIgDAAIgFAAg");
	this.shape_15.setTransform(46,4.2333);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#010000").s().p("AiTA4QAKgvAJgvIAAgBQgJABgHgCIAAAAQgDgHABgMQABgDADgBIAkAAIAkAAQAnAFAEAoIAAABIAAAHIABAAIABA3QAAALgDAHQgLACgNgBQgNAAgNABQgOABgEgHIAAAAIAAgPIAAgBIAAAAIADgDIAAAAIAlAAIABAAQABgagBgXIAAgBQgBgXgTgGIAAAAIgaAAQgIAngGAoQgCANgFAKIgKACIgEABQgLAAAAgKgAB7BAQgEgBgBgDIAAgBIAAhHQgDghgqAFQgOACgJgEQgBgJAAgKQAJgFARABIAbACQAzAHgFA+QgCAPABAOQAAAPgCANIgOABIgIAAg");
	this.shape_16.setTransform(4.6223,0.2065);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C98665").s().p("AFdgoIABAAIAAABQABAxgCAwIAAhigAhwgoIABAAIAAABQAAAxgBAwIAAhigAldggIAAgBIAAgZQABAMgBAOg");
	this.shape_17.setTransform(-9.8687,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D3326").s().p("AFAA2IABhyIAAAAIAAByIAAAGIgBgGgAiMA2IAAhyIABAAIAAByIAAAGIgBgGgAlAg8IABAAIAAABQAAAggBAdIAAg+g");
	this.shape_18.setTransform(-9.9,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#906048").s().p("AAAgGIAAAAIAAANIAAgNg");
	this.shape_19.setTransform(35.975,5.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4C3225").s().p("ADZAaIAAgBIAAgyQACAZgBAagAjZAZIAAgwQABAXgBAag");
	this.shape_20.setTransform(20.845,1.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7B523E").s().p("AC+AAIAAAAIAfAAIgfAAgAjcAAIAlAAIglAAg");
	this.shape_21.setTransform(17.35,4.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5C3D2E").s().p("AAAgXIAAAAIAAAvIAAgvg");
	this.shape_22.setTransform(45.525,1.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#895B45").s().p("AAAAEIAAgBIAAgGQABADgBADIAAABg");
	this.shape_23.setTransform(45.5333,-1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#704B38").s().p("AlsAOIAAgFIABAAIAAABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIAAgBgAFsgHIAAgHQABACAAAEIAAABgAhhgOQABACgBAEIAAABIAAgHg");
	this.shape_24.setTransform(-2.9187,-0.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3C281E").s().p("ADbAAIAAAAIAYAAIgYAAgAjyAAIAAAAIAYAAIgYAAg");
	this.shape_25.setTransform(3.225,-3.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#412B21").s().p("AkYAMIAAAAIAMAAIABAAIAAAAIgNAAgADhgLIAAAAIA4AAIg4AAgAjsgLIAAAAIA4AAIg4AAg");
	this.shape_26.setTransform(0.05,-5.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AkbA8IAAgpIAAgpIAAAAIAAgHIAEgKIAAgBIAAAAQgeAAgbgBIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAIAAgBIAAgPIAAAAIAAgBIADgCIABgBIAyAAIAzAAQAGAGgCANQgBAEgDAAIgBAAIgNAAIAAABQgEAFAAAHQgDAeABAhQABAPgCALQgEADgGABIgCAAQgLAAgEgFgAmkBBIgeAAIgBAAQgrgFgFgrIAAgBIAAhMIAAgBIAAgBIACgBIABgBIASAAIABAAQADABABADIAAABIAAAMIAAABIAAAQIAAAAIAAARIAAAAIAAAMIAAABQAcgBACgcIAAgBQABgOgBgPIAAgBIAAAAIAAgBIADgCIAAgBIATAAIAAAAQAEABAAAEIAAABIAAAZIAAABIAAAAQgDAxgyADQAIAVAdAAQAqAAADgnIAAgBQABgdAAggIAAAAIAAgBIAAgBIACgBIABgBIASAAIABAAQAGAGgBAOIgBAZIAAAYIgBAAIAAAFIAAABIAAAAQgHAwgyAGgAD+A8IAAgHIAAhxIAAgBIAAgBIADgBIAAgBIA4AAIABAAQAvABAFAtIAAAAIAAAHIABAAIAAA4QABALgDAGQgCACgFAAQgLAAgIgCQgCgQABgUIABgXQAEgqgkgBIAAAAIgYgBIAAABIgBAAIAABiIAAAAIgBADQgCADgGAAIgFABQgKAAgEgFgAjPA8IAAgHIAAhxIAAgBIAAgBIACgBIABgBIA4AAIABAAQAvABAFAtIAAAAIAAAHIABA4QABALgDAGQgCACgFAAQgLAAgIgCQgCgQAAgUIACgXQAEgqgkgBIAAAAIgZgBIAAABIAAAAIAABiIAAAAIgBADQgCADgGAAIgFABQgKAAgEgFgAGHA8IAAgBIAAgPIAAgBIAAgBIAEgCIAAAAIAfAAIAfgBIAAAAQABgagBgYIAAAAQgBgdgeAAIAAAAQgPAAgOgBIAAAAQgGgGACgNQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAAgBIAmAAIAAAAQAvADAEAtIAAABIAAAGIAAABIABAvIAAAAQADABAFAAIABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQACAMgDAHIAAAAQghACghgBIgXABIgEAAQgJAAgFgEg");
	this.shape_27.setTransform(-3.135,0.2773);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#493125").s().p("AgSAAIAAAAIAlAAIglAAg");
	this.shape_28.setTransform(38.475,-6.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FCE5DA").s().p("AgHAAIAOAAIABAAIAAAAIgBAAIgFAAIgJAAg");
	this.shape_29.setTransform(38.3,-41.6667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F6A57C").s().p("AImGhIgVAAIgogCQg1gFgxgHIhjgPQgygHgvgKQgwgJgsgNQgngLgpgIQgvgKg7ADQg1AEgsANQgsANgpAPQgqAQgxAHQgyAIg3ACQg4AEg2gFQg1gEgqgPQgqgQgdgbQgHgIgGgIQgUgdgSghIgohJQgUgkgTgnQgTgmgIgxIAAgBIAAgNIAAgBIAAgGQAOgpAWgkIAshFQAXgjAYggQAZggAcgeQAbgdAngRQAVgJAYgEQAwgJA7ACQA3ABAzAGIBpAJQA1AEA5gCQA2gDAwgIQAxgJAsgMIBZgYQAsgNAvgLQAvgKA0gDQAdgDAdgBIABAAIAeAAIABAAQAGABAIgBIABAAQA3ADAxAHQAxAJAsANQArAOAlATQAlAUAgAZQAfAaAaAfQAaAgATAlQAUAmAMArQANAuAEAzIACAKIAAAVIAAAAQgBAUgDATQgIAwgRApQgQAogWAjQgWAjgbAeQgaAeggAaQgfAagnASQgoARg3ACIAAAAIgKAAIAAABgAoKAUIABAAQAFArArAFIABAAQAOAAARAAQAygGAHgwIAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgBIAAgYIABgZQABgOgGgGIgBAAIgSAAIAAAAIgBABIgCABIAAABIAAAAIgBAAIAAA+IAAAAQgDAogqAAQgdgBgIgUQAygDADgxIAAgBIABAAQAAgOgBgMIAAgBQAAgDgEgBIAAAAIgTAAIAAAAIAAABIgDACIAAAAIAAABIAAAAIAAAeIAAABQgCAbgcABIAAgBIAAgMIAAAAIAAgQIAAgBIAAgPIAAgCQABgGgBgGIAAAAQgBgEgDAAIgBAAIgSAAIAAAAIgBABIgCABIAAABIAAAAIgBAAIAABOgAhIgkQgJAvgLAvQAAALAPgBIALgCQAEgLACgNQAHgoAIgnIAZAAIABAAQASAHABAXIAAABIAAAvIAAABIAAAAIglAAIAAAAIgBAAIgDADIAAABIAAABIAAAAIAAAOIAAAAQAFAIAOgBQAMgCAMABQAOAAAKgCQADgGAAgLIgBg4IAAgBQABgEgBgCIAAAAQgFgoglgGIglAAIgkAAIAAAAQgDABAAADQgCAMADAHIAAAAQAIACAJgBIAAABgAkxAWIAAApQAFAFAMAAQAGgBAEgDQACgMgBgOQgBghADgeQAAgHAEgGIAOAAIAAAAQADAAABgEQACgNgGgGIgzAAIgyAAIAAAAIgBABIgDACIAAAAIAAABIgBAAIAAAQIABAAQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIABAAQAbABAegBIAAAAIAAABIgEALIAAAGIAAABIgBAAIABApgADnA4IABAGQAFAHAOgCQAGAAACgDIABgDIAAgBQABgwAAgxIAAgBIAYAAIAAAAQAkACgEApIgBAYQgBATACARQAIACALAAQAFgBACgBQADgGgBgLIAAg5IAAgBQAAgDgBgCIAAAAQgFgtgvgBIgBAAIg4AAIAAAAIAAABIgDABIAAABIAAAAIgBAAIAABygAjmA4IABAGQAFAHAOgCQAGAAACgDIABgDIAAgBQABgwgBgxIAAgBIAZAAIAAAAQAkACgEApIgCAYQAAATACARQAIACALAAQAFgBACgBQADgGgBgLIgBg5IAAgBQABgDgBgCIAAAAQgFgtgvgBIgBAAIg4AAIAAAAIgBABIgCABIAAABIAAAAIgBAAIAABygAFxA9IAAABQAFAGANgBIAXgBQAhAAAhgBIAAAAQADgHgCgMQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAgBIAAAAIgJAAIAAgBIAAguIAAgBQAAgEgBgDIAAAAQgEgugvgCIAAAAIgmAAIAAAAIAAABQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABQgCANAGAGIAAAAQAOABAPgBIAAAAQAeABABAcIAAABIAAAxIAAABIgfAAIgfAAIAAAAIAAAAIgEADIAAABIAAABIAAAAIAAAOgACtgKIABBHIAAABQABAEADAAQANABAKgCQACgNgBgOQAAgPABgPQAFg+gzgGIgbgDQgQAAgJAFQgBAKACAIQAIAFAOgDIALAAQAgAAACAcg");
	this.shape_30.setTransform(-0.925,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("AMVGhIhyAAIhzAAIAAgBQA3gCAogRQAngSAggaQAfgaAbgeQAageAWgjQAWgjARgoQAQgpAIgwQADgTACgUIAAAuIAAByIAAByIAAByIhvAAgAHUGhIhzAAIhxAAIhyAAIhyAAIhxAAIhyAAIhyAAIhyAAIhyAAIhyAAIhyAAIhyAAIAAgyIAAhxIAAhzIAAhyIABAAQAIAxATAmQATAnAUAkIAoBJQASAhAUAdQAHAIAHAIQAcAbAqAQQAqAPA1AEQA3AFA3gEQA3gCAygIQAxgHAqgQQAqgPArgNQAsgNA1gEQA7gDAvAKQApAIAnALQAsANAwAJQAwAKAxAHIBjAPQAxAHA1AFIAoACIg9AAgAuDALIAAhVIAAhyIAAhyIAAhyIByAAIByAAIByAAIByAAIByAAIByAAIByAAIBxAAIByAAIByAAIBxAAQgdABgdADQg0ADgvAKQgvALgsANIhZAYQgsAMgxAJQgwAIg2ADQg5ACg1gEIhpgJQgzgGg3gBQg7gCgwAJQgYAEgVAJQgmARgcAdQgcAegZAgQgYAggXAjIgsBFQgVAkgPApIAAAGIAAABgAOCgCQgFgzgMguQgNgrgUgmQgTglgaggQgZgfgggaQgggZglgUQglgTgrgOQgrgNgxgJQgygHg3gDIAAAAIByAAIByAAIByAAIByAAIAsAAIAAByIAAByIAAByIAABSIgCgKg");
	this.shape_31.setTransform(-0.95,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#804B35").s().p("AgTAAIAmAAIABAAIAAAAIgQAAIgXAAg");
	this.shape_32.setTransform(-69.15,8.345);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9E5D43").s().p("AgLAAIAVAAIACAAIAAAAIgKAAIgNAAg");
	this.shape_33.setTransform(-69.05,5.245);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9A5B41").s().p("AAAAUIAAgBIAAgmQABATgBAUg");
	this.shape_34.setTransform(-66.905,-5.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#94573E").s().p("AABAJIgBgBQgCgHAAgJIABAAQgBAJADAGIACABIgBABIgBAAg");
	this.shape_35.setTransform(-73.9292,-0.9937);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C17251").s().p("AAAALIAAgBIAAgUQABAJgBALIAAABIAAAAg");
	this.shape_36.setTransform(-74.1437,-3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#613929").s().p("AAAADIAAgGIAAAAIAAABQABADgBADg");
	this.shape_37.setTransform(-59.7937,0.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A96347").s().p("AAAAKIAAgTIAAAAIAAATIAAAAg");
	this.shape_38.setTransform(-57.175,-6.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CB7755").s().p("AAAgpIAAAAIAAABQABApgBApIAAhTg");
	this.shape_39.setTransform(-63.2167,-3.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B56B4C").s().p("AAAAKIAAgBIAAgSQABAJgBAKg");
	this.shape_40.setTransform(-43.055,-6.875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6E402E").s().p("AAAALIAAgUIABAAIAAATIAAABg");
	this.shape_41.setTransform(-15.55,6.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3F251A").s().p("AALABIgVAAIAAgBIAVAAIAAABg");
	this.shape_42.setTransform(-14.375,-5.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#854E38").s().p("AAAAvIAAhdQABAugBAuIAAABg");
	this.shape_43.setTransform(12.3063,2.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#89503A").s().p("AAAAxIAAgBIAAhgQABAwgBAxg");
	this.shape_44.setTransform(-6.505,2.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#834D37").s().p("AAAAhIAAhCQABAhgBAiIAAgBg");
	this.shape_45.setTransform(-10.1625,1.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3D2419").s().p("AgYAAIAAAAIAwAAIABAAIAAAAIgxAAg");
	this.shape_46.setTransform(-12.65,5.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#583425").s().p("AAAgSIAAAAIAAABQABATgBARIAAglg");
	this.shape_47.setTransform(-70.3168,-6.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#140B08").s().p("AAAgJIAAAAIAAATIAAgTg");
	this.shape_48.setTransform(3.375,-6.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FBE8E0").s().p("AAEAAIgHAAIAAAAIAHAAIABAAIAAAAIgBAAg");
	this.shape_49.setTransform(62,53.425);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#794733").s().p("AEqAvIAAgBIAAhcQACAugBAvgAkqAvIAAgBIAAhcQABAugBAvg");
	this.shape_50.setTransform(4.52,2.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A86346").s().p("AAAAKIAAgTIAAAAIAAASIAAABg");
	this.shape_51.setTransform(37.6,6.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#874F39").s().p("AAAAvIAAheQABAvgBAwIAAgBg");
	this.shape_52.setTransform(15.975,2.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("ABXBJQANg8AMg8IAAgEQgMABgIgDIgBAAQgEgLACgOQABgEAFgBIBUAAIABAAQAyADALArIAAAAIACAQIAAABIAABgIAAABIgCACQgMAEgPgBIgjABQgSACgIgIIAAgBIAAgUIAAgBIAAgBIAEgCIAAgBIAxAAIAAAAQACgjgCggIAAgBQgCgegcgEIAAgBIgXAAIAAABIgCAAIgCAAQgKAlgGAmIgFAcQgCARgGAMIgQACIgEABQgMAAgBgLgAGwBNIAAgBQAAgwgBgtIAAgBQgDgggigCIgBAAIgugBIgBAAQgDgBgBgDIAAgBIAAgUIAAgBIAAgCIAFgCIABAAIAtAAIABAAQBGgBADBBIABABIAABeIAAABIgCADQgEADgIAAIgFABQgMAAgFgHgAlrBTIgoAAIAAAAQg6gFgGg5IAAgBIAAhiIAAgCIAFgDIABAAIAVAAIABAAQAKAFgDATIgBATIAAAVIAAABQAAAKACAIIACAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAggDABgjIAAgBIAAAAQABgRgBgUIAAgBIAAgCIAFgDIABAAIAVAAIABAAQAEABACADIAAABIAAAoIAAABIAAAAQgGA7g+ADQAIAXAaAEIABAAQALACAMgBIAAgBQApgFAGgnIAAgBIAAgBQABgogBgqIAAgBIAAgBIAAgBQACgDADgBIABAAIAVAAIABAAQAKAFgCASQgBAMAAANIAAAoIgBAAIAAAGIAAABIAAAAQgJBAhAAHIgBAAg");
	this.shape_53.setTransform(-30.825,-0.037);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#774632").s().p("AEqBFIABiRIAAAAIAACRIAAAJIgBgJgAkqBFIAAiRIABAAIAACRIAAAJQgBgEAAgFg");
	this.shape_54.setTransform(-10.125,-0.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#573425").s().p("AEaAAIAAAAIAhAAIghAAgAk7AAIAAAAIAiAAIgiAAg");
	this.shape_55.setTransform(-4.7,-5.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B56B4D").s().p("AAAAJIAAgSQABAJgBAKg");
	this.shape_56.setTransform(51.725,6.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8B523B").s().p("AAAAEIAAgHQABACgBAEIAAABg");
	this.shape_57.setTransform(49.9333,-2.175);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5A3526").s().p("AAAAyIAAhjIABAAIAABiIAAABg");
	this.shape_58.setTransform(-77.65,-2.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#010000").s().p("ADhBMIAAgJIAAiRIAAgBIAGgDIAAAAIBBAAIAAAAQBIgCADBDIAAABIAABcIAAABQgBAFgGAAQgRACgLgEQgDgVABgZIACgcQAFg3gtgDIAAAAIgiAAIAAAAIACBuQAAAOgEAJQgDACgHAAIgGAAQgNAAgGgHgAlzBMIAAgJIAAiRIAAgBIAFgDIABAAIBAAAIABAAQBHgCADBDIAAABIAABcIAAABQgBAFgFAAQgRACgMgEQgDgVABgZIACgcQAGg3gtgDIgBAAIghAAIAAAAIABBuQAAAOgDAJQgEACgGAAIgHAAQgNAAgFgHgAGUBNIAAgBIAAgTIAAgBIAAgBQAHgGAPABIA+ABQABgngDgkQAAgGgDgFQgIgQgYgBIgBAAQgUABgTgBIgBAAQgGgJACgSIAGgDIABAAIAlAAIABAAQBDgBAIA6IAAABIAAAIIABAAIAABCIAAABQANgCAEAHIAAABIAAATIAAAAIgBADIgCABQgpADgqgBIggABIgFAAQgMAAgFgGgAnUBRQgDgHAAgKQABgagBgbQgCglAKgaIgbAAQgOAAgNACQgTABgHgIIAAgBIAAgUIAAgBQABgCAEgBIABAAICAAAIAAAAQAFAAABAEIAAABIAAATIAAABIAAAAQgGAIgRgDQgDAHgBAIQgEAnABAsQABATgDAQIgBAAQgIABgIAAQgIAAgIgBg");
	this.shape_59.setTransform(-2.725,-0.0585);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D17B58").s().p("AJUABIglAAIAAgBIAmAAIAAABgAG6ABIhAAAIAAgBIBBAAIAAABgAECABIgtAAIAAgBIAuAAIAAABgAAtABIhUAAIAAgBIBVAAIAAABIgBAAgAibABIhAAAIAAgBIBCAAIAAABIgCAAgAkHABIiAAAIAAgBICAAAIAAABgAmuABIgWAAIAAgBIAXAAIAAABIgBAAgAn1ABIgVAAIAAgBIAVAAIAAABIAAAAgAo+ABIgWAAIAAgBIAWAAIAAABg");
	this.shape_60.setTransform(-17.35,-8.45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FBE9E2").s().p("AgIAAIAQAAIABAAIAAAAIgBAAIgHAAIgJAAg");
	this.shape_61.setTransform(40.925,-54.155);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EE8D65").s().p("ALNIaIgoAAIgPgCQhFgDhAgJIh/gTIh9gVQg+gLg6gPIh0gdQg7gPhLADQhFADg8APQg4APg1AUQg1AVg9ALQhAAKhFAFQhGAEhHgDQhGgDg5gRQg4gQgpghQgTgRgQgVQgZgmgYgpIgzheQgZgwgYgxQgYgygLg+IAAgBIAAgQQARg4AcgsIAPgYQAbgtAdgsQAegrAhgpQAggoAkglQAlgkA2gSQA4gTBHgBQBHgBBEAGICGAMQBDAGBHABQBJABBCgJQA/gIA8gOQA6gOA4gQIBzggQA5gPBBgJQA6gIA/gBIAEAAIAyAAIAAAAQAIABAJgBIABAAQBHACA+AKQBAALA3ASQA3ASAwAYQAwAZAoAhQApAgAhApQAhAoAaAvQAZAwARA5QAQA4AGBDIACARIAAAeIAAABQgCAagDAZQgLA+gVA0QgWA0gcAsQgdAtgiAmQgiAngpAiQgnAggzAWQgzAXhFAEIgBAAIgIAAIAAAAIgBAAgAqiAYIABAAQAFA5A6AGIABAAQATABAWgBIAAAAQBAgIAIg/IAAgBQACgCgBgEIAAgBIAAgnQABgNABgNQACgSgKgEIAAgBIgWAAIAAABIgBAAQgDABgCACIAAABIAAABIgBAAIAABUIAAABIAAABQgFAngpAFIgBAAIgWAAIgBAAQgagFgIgWQA+gEAFg6IAAgBIABAAQABgVgCgUIAAgBQgBgDgEAAIAAgBIgWAAIAAABIgBAAIgFADIAAABIgBAAIAAAmIAAABIAAABQgBAigfADIgDgBQgDgFABgKIAAgBQABgMgCgJIABgUQADgSgLgFIAAgBIgVAAIAAABIgBAAIgFADIAAABIgBAAIAABjgAhdgsQgMA8gNA8QAAANARgCIAQgDQAGgMACgRIAEgbQAHgmAKglIABgBIADAAIAWAAIABAAQAbAFACAeIAAAAIAABCIAAABIAAAAIgwAAIAAABIAAAAIgEADIAAAAIAAABIgBAAIAAAVIABAAQAHAIATgCIAhAAQAQAAAMgDIABgDIABAAQABgygCgvIAAAAIgBgQIgBAAQgKgrgxgDIAAgBIhVAAIAAABQgFAAgBAEQgDAPAFALIAAAAQAJACAMgBIAAAEgACIg2IAAABQABADADABIABAAIAuAAIABAAQAiACACAhIAAABIABBdIAAAAQAHAIAQgBQAIgBAEgDIABgDQABgwgBguIAAgBQgEhBhFABIAAgBIguAAIAAABIgBAAIgFACIAAABIAAABIgBAAIABAVgAErBGIABAJQAGAJATgCQAGAAADgCQAFgJAAgOIgChuIAhAAIABAAQAtADgFA3IgCAcQgCAZAEAVQALAEARgCQAGAAABgFIAAAAQABgwgBgtIAAgBQgEhDhHACIAAgBIhBAAIAAABIgBAAIgFADIAAABIgBAAIAACRgAkqBGQABAGABADQAGAJATgCQAFAAAEgCQAEgJAAgOIgChuIAiAAIABAAQAsADgFA3IgCAcQgBAZADAVQALAEASgCQAFAAABgFIAAAAQABgwgBgtIAAgBQgDhDhHACIAAgBIhBAAIAAABIgBAAIgFADIAAABIgBAAIgBCRgAHeBQIAAAAQAHAIAQgCIAfgBQArABApgDIACgBIABgDQABgKgBgJIAAgBQgEgHgNACIAAgBIAAhCIAAgBQAAgFgBgCIAAgBQgIg6hDABIAAgBIgnAAIAAABIgBAAIgFADQgDASAHAJIAAAAQAUABAUgBIABAAQAYABAHAQQADAFABAGQADAkgBAnIg+gBQgPgBgIAGIAAABIAAABIgBAAIABAUgAmEgxQgKAaACAlQABAbgBAaQAAAKADAHQAQADAQgDIABAAQADgQgBgTQgCgsAFgnQAAgIAEgHQAQADAHgIIAAAAIABAAQAAgLgBgJIAAgBQgBgEgFAAIAAgBIiAAAIAAABIgBAAQgEABgCACIAAABIAAAAIAAAVIAAAAQAIAIATgBQANgCAOAAIAbAAg");
	this.shape_62.setTransform(-10.2,-0.375);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FEFEFE").s().p("AP6IaIiSAAIiRAAIAAAAQBFgEAzgXQAzgWAnggQApgiAignQAigmAdgtQAcgsAWg0QAVg0ALg+QADgZACgaIAAA8IAACSIAACSIAACSIiQAAgAJPIaIiSAAIiTAAIiSAAIiRAAIiRAAIiTAAIiSAAIiSAAIiSAAIiTAAIiSAAIiSAAIAAhHIAAiSIAAiSIAAiSQALA+AYAyQAYAxAZAwIAzBeQAYApAZAmQAQAVATARQApAhA4AQQA5ARBGADQBHADBGgEQBFgFBAgKQA9gLA1gVQA1gUA4gPQA8gPBFgDQBLgDA7APIB0AdQA6APA+ALIB9AVIB/ATQBAAJBFADIAPACIhWAAgAyKhjIAAiSIAAiSIAAiSICSAAICSAAICTAAICSAAICSAAICSAAICTAAICRAAICRAAICSAAICTAAIADAAQg/ABg6AIQhBAJg5APIhzAgQg4AQg6AOQg8AOg/AIQhCAJhJgBQhHgBhDgGIiGgMQhEgGhHABQhHABg4ATQg2ASglAkQgkAlggAoQghApgeArQgdAsgbAtIgPAYQgcAsgRA4IAAhvgASIgIQgGhDgQg4QgRg5gZgwQgagvghgoQghgpgpggQgoghgwgZQgwgYg3gSQg3gShAgLQg+gKhHgCIAAAAICSAAICSAAICTAAICRAAIA6AAIAACSIAACSIAACSIAABsIgCgRg");
	this.shape_63.setTransform(-10.2,-0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.4,-54.2,232.5,107.7);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.537)").s().p("AqTImIAAxLIUnAAIAARLg");
	this.shape.setTransform(-27,51);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-4,132,110);


(lib.odot_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#473A1F").s().p("AgKAAIAVAAIAAAAIgBABIgFAAQgIAAgHgBg");
	this.shape.setTransform(-55.925,30.08);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CEA85B").s().p("AAFAAIgLAAIAAAAIALAAIACAAIAAAAIgCAAg");
	this.shape_1.setTransform(-54.125,25.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#504223").s().p("AAAAOIAAgbIABAAIAAAaIAAABg");
	this.shape_2.setTransform(-57.75,27.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5A4927").s().p("AAAAoIAAhRIAAAAIAAABQABAqgBAoIAAgCg");
	this.shape_3.setTransform(-53.3833,21.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#705B31").s().p("AAAAHIAAgCIAAgLIAAAAIAAALIAAACIAAAAg");
	this.shape_4.setTransform(-53.4,16.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B79651").s().p("AAAAHIAAgBIAAgMIAAAAIAAAMIAAABIAAAAg");
	this.shape_5.setTransform(-53.4,15.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D733F").s().p("AAAAPIAAgdIABAAIAAAcIAAABg");
	this.shape_6.setTransform(-56.125,7.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4B3D21").s().p("AAAAGIAAgLIABAAIAAAKIAAABg");
	this.shape_7.setTransform(-48.425,27.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#786235").s().p("AAAAGIAAgBIAAgKIABAAIAAAKIAAABIgBAAg");
	this.shape_8.setTransform(-48.425,26.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A58749").s().p("AAqAGIAAgBIAAgKIACAAIAAAKIAAABIgCAAgAgWAGIgVAAIAAgBIAVAAIACAAIAAABIgCAAg");
	this.shape_9.setTransform(-52.7,25.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D3F21").s().p("AAABHIAAgBIAAiMQABBFgBBIg");
	this.shape_10.setTransform(-33.4929,22.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5A4928").s().p("AAAAKIAAgUIAAAAIAAATIAAACIAAgBg");
	this.shape_11.setTransform(-48.55,20.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9A7E44").s().p("AAAAVIAAgBIAAgoIAAAAIAAAoIAAABIAAAAg");
	this.shape_12.setTransform(-48.55,17.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B59350").s().p("AAAAAIAAAAQAAAAAAAAQABAAAAAAQgBAAAAAAQAAABAAAAIAAgBg");
	this.shape_13.setTransform(-52.7929,10.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A7884A").s().p("AATABIgnAAIAAgBIApAAIAAABIgCAAg");
	this.shape_14.setTransform(-45.8,10.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#352B17").s().p("AAAAQIAAgfIAAAAIAAAdIAAACg");
	this.shape_15.setTransform(-17.95,8.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D5AE5E").s().p("AEwBvIAAjfQACBuAABwQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAIAAgCgAgsBvIAAjfQACBuAABwQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBAAIAAgCgAkyBCIAAgBIAAgNQADAFgBAIIAAABIgCAAg");
	this.shape_16.setTransform(-17.85,17.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BD9A54").s().p("AAAAjIAAhHIAAAAIAAACQABAkgBAjIAAgCg");
	this.shape_17.setTransform(22.6167,25.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#69562E").s().p("AC4hJIABAAIAAABQABBKgCBIIAAiTgAi4BKIAAiIQACBBgBBGIAAABg");
	this.shape_18.setTransform(-20.3583,21.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B89651").s().p("AgLAAIAWAAIABAAIAAAAIgXABIAAgBg");
	this.shape_19.setTransform(0.525,10.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AA8B4B").s().p("AAAAPIAAgBIAAgcQABANgBAQg");
	this.shape_20.setTransform(2.5667,7.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#997D43").s().p("AAABNIAAiYIAAAAIAACWIAAACg");
	this.shape_21.setTransform(-7.25,21.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B69450").s().p("AA0ABIAAAAQg2AAgzgBQA1AAA1AAIAAABIgBAAg");
	this.shape_22.setTransform(-11.65,10.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6A572F").s().p("ACuBuIABjfIABAAIAADfIAAAEQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBgAivBuIABjfIABAAIAADfIAAAEQAAAAgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBg");
	this.shape_23.setTransform(-10.45,17.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C6A258").s().p("ABeABIi8AAIAAgBIC9AAIAAABIgBAAg");
	this.shape_24.setTransform(-7.75,5.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#89703C").s().p("AAAAEIAAgIIAAAAIAAACQABAEgBADIAAgBg");
	this.shape_25.setTransform(17.7667,21.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AEpBxIAAgFIAAjfIAAgBIAAgBIAGgFIABAAIAmAAIACAAQAFABACAGIAAABIAADfIAAADQAAAEgDACQgFAEgKABIgHAAQgVAAgIgKgAg0BxIAAgFIAAjfIAAgBIAAgBIAHgFIABAAIAmAAIABAAQAFABABAGIABABIAADfIAAADQAAAEgCACQgGAEgKABIgHAAQgUAAgJgKgAihBxIAAgBQAAhGgBhBIAAgBQgDgvgugFIAAgBIgpgBIAAACIAAABIgHAgIAAAOIAAABIgBAAIAAAoIAAABIABAVIAAABIAAAOIAAACIAAAMIAAABIAAAMIAAABIAAALIAAABIABANIABAAIAAABQABAKgEAFIgCABQgdACgfgBIAAAAIgWgBIgCAAQgEgBAAgFIAAgBIAAgcIAAgBIAAgBIAEgFIACAAIAVAAIABAAIAMAAIACAAIAAgBQACgogBgqIAAgBIAAgBIAAgMIAAgCIAAgMIAAgBIAAgEIAFggIAAgCQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIAAAAIAAgBIgCAAQgIgEgPABIgBAAQgEgCgCgFIAAgBIAAgdIAAgBIAAgBIAGgFIABAAIB0AAIABAAQBfACAGBbIAAABIAACMIAAABQgBAFgFACIgMACIgJABQgSAAgHgKgACZByIAAgBIAAiXIAAgBIAAgHQADgQAFgMIAAgBIABAAIAAgBQg1gCg2AAIgBAAQgGAAgCgGIAAgBIAAgeIAAgBIAAgBIAGgFIABAAIC9AAIABAAQAGABACAFIAAABIAAAdIAAABIAAABQgCAFgGABIgBAAIgYAAIAAACIgBAAQgHAOgDATIAAAIIAAABIgBAAIAACTIAAABIgDADQgFAEgKABIgIABQgSAAgJgJg");
	this.shape_26.setTransform(-22.55,18.0643);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C7A358").s().p("AGEABIglAAIAAgBIAnAAIAAABIgCAAgAEZABIgnAAIAAgBIApAAIAAABIgCAAgAhDABIgnAAIAAgBIAoAAIAAABIgBAAgAkQABIh1AAIAAgBIB1AAIAAABIAAAAg");
	this.shape_27.setTransform(-16.4,5.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BA9752").s().p("AAAAhIAAhCQACAggCAjIAAAAIAAgBg");
	this.shape_28.setTransform(39.1281,9.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7B6436").s().p("AAAAEIAAgJIAAAAIAAABQABAGgBAEIAAgCg");
	this.shape_29.setTransform(34.0667,13);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A8894A").s().p("AAAAeIAAgBIAAg6IABAAIAAA6IAAABIgBAAg");
	this.shape_30.setTransform(34.05,9.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#010000").s().p("AA7B4IgBAAQgvhAgshAIgBAAQgSAOgFAcIAAAEIAAABIgBAAIAABIIAAACQgBAHgGAAQgYAEgPgGIgBAAQgCgmABgpQACgCgBgGIAAgCIAAgBIAAgCQAIgyAkgWIABgBQgXgggSgkQgBgEADgBIADgBIAlAAIABAAQAbAZAVAgQATAfAWAfQAWgKADgeIAAgBQACgEgBgGIAAgBIAAgBIAAg7IAAgBIAAgBIAGgFIABAAIAiAAIABAAQAFACACAEIAAABIAABDIAAACIAAABQgGA5gqAXIARAZQAJAMAKALQAMAPACATIAAAAQgOAEgPAAQgKAAgKgCg");
	this.shape_31.setTransform(28.4357,17.955);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C8A358").s().p("AAQABIghAAIAAgBIAiAAIAAABIgBAAg");
	this.shape_32.setTransform(36.6,5.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F3C76C").s().p("ANnKNIg9AAQhogGhfgOQhigOhggQQhhgPhagXIizgsQhdgXhvAKQhoAJhQAeQg9AYhAATQhXAahpAJQhpAHhvgFQhrgEhPggQhQghgthDQgWgigVgkIhPiRQgnhHghhQQgUgxAAhGQAehQAqhGQArhFAvhCQAuhBA0g8QAug1A/ghQAlgTAvgIQBigSBwAJQBnAHBnAKQBlAKBvAAQA2gBAygFQBmgLBZgVQBZgXBVgaQBXgbBdgSQBegTBugCIABAAIBTAAIABAAQBrAFBdASQBeATBOAhQBOAiBBAwQBAAvAyA/QAyA9AiBPQAhBOAQBgQAGAkAEAlIAAA4IAAAAQgKBlgfBPQghBQgtBDQgsBDg5A4Qg4A4hGApQhGAqhrAFIAAABIgCAAgACgBxQAAABAAABQABABAAAAQAAABAAAAQABABAAAAQAKAMAbgCQAKgBAFgEQADgCAAgEQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAhxgChtIAAgBQgCgFgFgCIAAgBIgogBIAAACIgBAAIgHAFIAAABIAAABIgBAAIgBDfgAi8BxQAAABAAABQAAABAAAAQAAABABAAQAAABABAAQAKAMAagCQAKgBAFgEQADgCABgEQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAhxgChtIgBgBQgBgFgGgCIAAgBIgogBIAAACIgBAAIgGAFIAAABIAAABIgBAAIgBDfgAlbhHIACAAQAtAFADAvIAAABIABCIIAAAAQAJAMAZgCIANgDQAFgBABgGIAAAAQAChIgChEIAAgCQgHhahegDIAAgBIh1gBIAAACIgBAAIgGAFIAAABIAAABIgCAAIABAeIABAAQABAFAFACIABAAQAPgBAIAFIACAAIAAABIAAABIAAABIgFAgIAAAEIAAABIgBAAIAAANIAAABIAAAMIAAABIAABRIAAACIgCAAIgMAAIgBAAIgVAAIAAABIgCABIgFAEIAAABIAAABIgBAAIABAdIAAAAQABAFAEABIACAAQAJACAMAAIABgBQAfACAdgDIACgBQAEgFgBgKIAAgBIAAgCIAAgKIAAgBIAAgMIAAgBIAAgMIAAgBQABgHgDgFIAAgBIAAgPIAAgBIAAgUIAAgCIAAgnIAAgCIAAgOIAHggIAAgBIAnAAgAATB4IAAAAQAKAKAYgCQAKgCAGgEIADgCIAAgCQAChIgBhKIAAgBIAAgBIAAgIQACgTAIgOIABAAIAZgBIAAgBQAFgBACgEIAAgCIABAAQABgQgCgOIAAgBQgCgFgFgBIAAgBIi9gBIAAACIgBAAIgGAFIAAABIAAABIgBAAIABAgIAAAAQACAFAGAAIABAAQAzADA2AAIAAAAIAAACQgGAMgCAPIAAAHIAAACIgBAAIABCYgAGyB8IABAAQAZAFAXgHIAAAAQgBgTgNgPQgKgKgJgNIgQgZQApgXAHg5IAAgBIABAAQABgkgCghIAAgBQgDgEgEgCIAAgBIgjgBIAAACIgBAAIgHAFIAAABIAAABIgBAAIAAA7IAAABIAAAKIAAABIAAABQgDAegWAKQgWgegUggQgUgggbgZIAAgBIgngBIAAACIgCABQgEACACADQARAkAXAhIAAABQgkAWgJAxIAAACIAAABIgBAAIAAAJIAAABQgBApADAmIAAAAQAQAGAXgEQAGAAACgHQACgjgBglIAAgCIAAgBIAAgDQAFgcARgOIACgBQAtBAAvBAg");
	this.shape_33.setTransform(-9.125,17.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEFEFE").s().p("AUpKNIjgAAIjgAAIAAgBQBrgFBHgqQBGgpA4g4QA4g4AthDQAthDAghQQAghPAKhlIAACTIAADgIAADgIhMAAgAJqKNIjgAAIjgAAIjfAAIjfAAIjgAAIjgAAIjgAAIjgAAIjgAAIAAi7IAAjgIAAjfIAAjfIAAjgIAAjgIDgAAIDgAAIDgAAIDgAAIDgAAIDfAAIDfAAIDgAAICTAAIgBAAQhvAChdATQheAShWAbQhVAahaAXQhZAVhlALQgzAFg2ABQhvAAhkgKQhngKhogHQhwgJhiASQguAIgmATQg/AhgtA1Qg1A8guBBQguBCgrBFQgqBGgfBQQAABGAVAxQAgBQAoBHIBPCRQAUAkAXAiQAsBDBQAhQBPAgBrAEQBwAFBpgHQBpgJBXgaQA/gTA+gYQBQgeBogJQBvgKBdAXICyAsQBaAXBiAPQBfAQBjAOQBfAOBoAGIjBAAgAVrhHQgQhggihOQgihPgyg9Qgyg/hAgvQhAgwhPgiQhOghhdgTQhdgShsgFIDgAAIDgAAIDgAAIBlAAIAADgIAADgIAADOQgEglgGgkg");
	this.shape_34.setTransform(-9.175,17.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,204,51,0.6)").s().p("AOqLAIhBAAQhcgGhVgKIgmgGQhqgPhngRQhpgRhggYIjBgvQhkgZh3AKQhxAKhWAhQhDAZhEAVQheAchwAJQhyAIh4gFQhzgEhVgjQhXgkgvhIQgZgkgVgnIhWicQgjhAgehHIgNgcQgVg1gBhLQAQgpATgnQAUgrAYgnQAuhKAyhHQAxhHA5hBQAxg3BEgkQApgWAygIQBpgTB5AIQBvAJBvALQBtALB3gBQA7gBA2gFQBugMBfgXQBhgYBcgdQBdgcBkgUIAkgHQBWgNBigCIABgBIBZAAIABAAQBXAEBOAMIAzAJQBlAVBTAkQBWAkBEA0QBGAzA2BCQA2BDAkBVQARAoAOAtQAOAwAJA3QAGAmAEAoIAAA8IAAABQgIBbgZBKIgMAdQgiBWgxBIQgwBJg9A7Qg7A8hMAtQgnAXgxANQgvAMg5ADIAAABIgCAAgAh9BcQABAEACABQALANAcgCQALgCAGgEIACgCIABgFQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAAAIAAgBIAAg8IgBg7IgBh4IgBgBIAAgBQgCgFgFgCIAAgBIgrAAIAAABIgBAAIgHAGIAAABIAAABIgCAAIgBDxgAD7BcQAAAEACABQADADAEACQAMAHAVgBQALgCAEgEQAEgBABgGQAAAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAIgBh4IgBh4IgBgBQgCgGgGgCIAAgBIgrAAIAAABIgBAAIgCACIgCABIAAABIgDACIAAABIAAABIgBAAIgBDxgAknhrIABAAQALABAJADQAeANACAnIAAABIABCTIABAAQAKAMAagCIAOgDIAEgCQACgCABgDIAAAAQABhOgBhKIAAgCQgFg7gogYQgZgQgngBIAAgBIh+AAIAAABIgCAAIgGAGIAAABIAAABIgBAAIAAAgIABAAQABAGAFACIACAAIAEAAQAMgBAHAEIACABIACAAIAAABIAAAAIAAACIgGAjIAAAEIAAABIgBAAIAAANIAAACIAAAOIAAABIAABXIAAABIAAABIAAAAIgBAAIgOAAIgCAAIgNAAIgJAAIAAABIgCAAIgEAFIAAACIAAABIgCAAIABAfIABAAQABAFADABIACAAQAKACAMAAIACgBQAiABAegCIADgBIABgBQADgFgBgLIAAAAIAAgCIAAgMIAAgBIAAgMIAAgBIAAgNIAAgBQABgIgDgFIAAgBIAAgRIAAgBIAAgVIAAgBIAAgsIAAgCIAAgOIAIgjIAAgBIAqAAgABjBhIAAACIAAAAQALAKAZgCQAMgCAFgDIADgDIAAgCQADhOgBhPIAAgCIAAgBIAAgIQACgTAIgPIABgBIABgBIAAAAIAbgCIAAAAIABgBQAFgBACgEIAAgCIABAAQABgRgCgPIAAgBQgDgFgFgCIAAgBIjMAAIAAABIgBAAIgGAGIAAABIAAABIgCAAIABAiIABAAIAAABIABABQACAEAFAAIACAAQA2ADA6AAIAAAAIAAACQgFANgDAQIAAAIIAAABIgBAAIABCjgAIiBmIAAABIABAAQAcAFAZgGIAAgBQgCgUgOgQQgLgMgJgNIgSgcQAtgXAHg/IAAgBIABAAQABgmgCgkIAAgBQgDgFgFgCIAAgBIgmAAIAAABIgBAAIgCACIgDACIgBACIAAABIAAABIgCAAIAABAIAAAAIAAALIAAABIAAACQgDAfgXAMIgEgEQgWgggUgfQgWgjgdgbIAAgBIgqAAIAAABIgCABIgBABIgCACIABADQASAnAZAjIgBABQgmAXgKA2IAAACIAAABIAAAAIAAAJIAAACQgBAsACApIAAAAIAAAAQASAGAZgEQAGAAACgIQACglgBgoIAAgCIAAgCIAAgDQAFgZAOgPIAGgFIABAAQAwBEAzBEg");
	this.shape_35.setTransform(-21,15.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BD9A54").s().p("AAAAlIAAhKIAAAAIAAABQACAmgCAkIAAgBg");
	this.shape_36.setTransform(20.1281,20.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#504223").s().p("AAAAPIAAgdIABAAIAAAbIAAACg");
	this.shape_37.setTransform(-64.475,23.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#69562E").s().p("ADChNIABAAIAAABQABBOgCBMIAAibgAjCBOIAAiPQACBEgBBJIAAACg");
	this.shape_38.setTransform(-25.1107,17.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#473A1F").s().p("AgLAAIAXAAIAAAAIgCABIgFAAQgIAAgIgBg");
	this.shape_39.setTransform(-62.55,25.58);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D5AE5E").s().p("AAAA6IAAh2IABB1QAAABAAABQAAAAAAABQgBAAAAAAQAAABAAAAIAAgDg");
	this.shape_40.setTransform(9.7,18.6125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CEA85B").s().p("AADABIgHAAIAAgBIAHAAIACAAIAAABIgCAAg");
	this.shape_41.setTransform(-60.425,21);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5A4927").s().p("AAAAqIAAhVIAAAAIAAABQABAsgBAqIAAgCg");
	this.shape_42.setTransform(-59.8833,16.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#705B31").s().p("AAAAHIAAgBIAAgMIAAAAIAAAMIAAABIAAAAg");
	this.shape_43.setTransform(-59.9,11.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8D733F").s().p("AAAAQIAAgfIABAAIAAAeIAAABg");
	this.shape_44.setTransform(-62.775,2.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BA9752").s().p("AAAAiIAAhFQACAigCAlIAAAAIAAgCg");
	this.shape_45.setTransform(37.5281,4.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C8A358").s().p("AAOABIgcAAIACgBIAbAAIAAABIgBAAg");
	this.shape_46.setTransform(35.1625,-0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#010000").s().p("ABFCAQgyhEgwhFIgBABIgFAEIgEgEIgBAAQgTAPgFAdIAAAEIAAACIgBAAIAABLIAAACQgCAHgGABQgTADgPgEQgCgoABgsIAAgCIAAgJIABAAIAAgBIAAgDQAJg1AngXIAAgCQgYgigTgnIAAgDIAjAAIACAAQAcAaAWAiQAUAhAXAgIAJgFIADAFQAXgMADgfIAAgCIAAgBIAAgLIAAgBIAAg/IACAAIAAgCIAAgBIACgBIAdAAIABAAQAFACADAEIAAABIAABHIAAACIAAABQgHA8gsAYIARAaQAKANAKAMQAOAPABAUIAAABQgOADgPAAIgLAAg");
	this.shape_47.setTransform(26.6608,12.8395);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AA8B4B").s().p("AAAAQIAAgBIAAgeQABAPgBAQg");
	this.shape_48.setTransform(-0.9833,2.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B89651").s().p("AAAABIAAgBIABAAIgBABIAAAAg");
	this.shape_49.setTransform(-4.3,4.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#352B17").s().p("AAAAPIAAgeIABAAIAAAeIAAABIgBgBg");
	this.shape_50.setTransform(-22.575,2.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C6A258").s().p("ABjABIjGAAIAAgBIDHAAIAAABIgBAAg");
	this.shape_51.setTransform(-11.85,-0.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C7A358").s().p("AGYABIgjAAIABgBIAkAAIAAABIgCAAgAEoABIgpAAIAAgBIADAAIAoAAIAAABIgCAAgAhHABIgpAAIAAgBIArAAIAAABIgCAAgAkfABIh6AAIAAgBIB7AAIAAABIgBAAg");
	this.shape_52.setTransform(-20.95,-0.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag3B3IAAgFIAAjrIAAgCIAAgBIAHgFIABAAIAoAAIACAAQADABACACIAAABIAAABIABB4IABA7IAAA8IAAABIAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAABAAAAIAAAEIgBAAQgFAEgLABIgHABQgWAAgJgLgAFEB/QgEgCgDgEQgCgBAAgEIABjxIABAAIAAgBIAAgBIACgCIABAAIAoAAIACAAQAGACABAGIABABIAAB1IAAB2IAAACQgBAFgDACQgFAEgLABIgHABQgLAAgIgDgAiqB3IAAgCQABhJgDhEIAAgCQgCgqgkgKQgJgEgLgBIgBAAIgrAAIAAABIgHAjIAAAPIAAACIAAArIAAABIAAAVIAAACIAAAQIAAABQADAFgCAIIAAABIAAANIAAABIAAAMIAAABIAAAMIAAACIAAABQABAKgDAFQgbACgegBIAAAAIgYgBIgBAAQgEgBgBgFIAAgCIAAgcIAAgCIAAgBIAFgFIANAAIACAAIANAAIACAAIAAAAIAIAAIABAAIAAgBQACgqgBgsIAAgBIAAgCIAAgNIAAgBIAAgNIAAgBIAAgFIAGghIAAgCQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBgBIAAAAIAAgBIgCAAQgFgCgGgBQgIgDgLAAIgCgFIAAgBIAAgeIAAgCIAAgBIAGgFIABAAIB6AAIABAAQAiABAYAMQAoAYAEA8IAAACQACBJgBBOIgBAAQAAADgCACIgNADIgIAAQgUAAgHgKgACjB6IgBijIABAAIAAgCIAAgHQACgRAGgNIAAgCIAAAAQg7AAg2gDIgCAAQgFAAgCgEIAAgBIAAgfIAAgCIAAgBIAFgFIABAAIDHAAIABAAQAGACACAEIAAACIAAAeIAAABIAAACIgCADIgCAAIAAABIgaABIgBAAIAAABIgCAAIAAABIgBAAQgJAPgCAVIAAAIIAAABIgCAAIAACbIAAABIgDADQgFAEgLACIgIAAQgRAAgJgHg");
	this.shape_53.setTransform(-27.3625,12.9638);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6A572F").s().p("AAAB0IAAjsIABAAIAADsIAAAEQgBgBAAgDg");
	this.shape_54.setTransform(-33.1,12.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FEFEFE").s().p("AVvKwIjsAAIhvAAQAxgNAngXQBMgtA7g8QA9g7AwhJQAxhIAihWIAMgdIAADgIAADsIhQAAgAKKKwIjrAAIjsAAIjrAAIjrAAIjsAAIjsAAIjsAAIjrAAIjrAAIAAjFIAAjrIAAhdQAeBHAjBAIBWCcQAVAnAZAkQAvBIBXAkQBVAjBzAEQB4AFBygIQBwgJBegcQBEgVBDgZQBWghBxgKQB3gKBkAZIDBAvQBgAYBpARQBnARBqAPIAmAGIguAAgA29jXIAAjsIAAjsIDrAAIDrAAIDsAAIDsAAIDsAAIDrAAIDrAAIDaAAIgkAHQhkAUhdAcQhcAdhhAYQhfAXhuAMQg2AFg7ABQh3ABhtgLQhvgLhvgJQh5gIhpATQgyAIgpAWQhEAkgxA3Qg5BBgxBHQgyBHguBKQgYAngUArIAAiOgAWgkIQgkhVg2hDQg2hChGgzQhEg0hWgkQhTgkhlgVIgzgJIA4AAIDsAAIDrAAIBrAAIAADsIAADsIAAAkQgOgtgRgog");
	this.shape_55.setTransform(-21,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-52.7929,y:10.65}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:-53.4,y:15.25}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_13,p:{x:-59.2429,y:5.15}},{t:this.shape_5,p:{x:-59.9,y:9.975}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.4,-54.9,301.9,140.7);


(lib.hit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logohittelem();
	this.instance.setTransform(-76.35,-50.15,0.4959,0.4623);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hit, new cjs.Rectangle(-76.3,-50.1,152.7,100.30000000000001), null);


(lib.xOdot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.xOdot = new lib.Symbol1();
	this.xOdot.name = "xOdot";
	this.xOdot.setTransform(213.4,-86,1,1,0,0,0,66,55);
	new cjs.ButtonHelper(this.xOdot, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("ApzIhIggAAIAAxLIUnAAIAARLI0HAAIJ4oZIqEoUAp/IrIAMgKAJsIDIpnn7IJdoA");
	this.shape.setTransform(116,-88.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.xOdot}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.xOdot, new cjs.Rectangle(46.5,-147.4,139.9,118), null);


(lib.textbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-503,-603.25,0.8847,0.8847,0,0,0,54.3,81.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.TextBox = new lib.TextBox();
	this.TextBox.name = "TextBox";
	this.TextBox.setTransform(-111.6,-463.45,1,1,0,0,0,404.9,120.9);

	this.text = new cjs.Text("סדנת קוקטיילים-בתכלס", "30px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 438;
	this.text.parent = this;
	this.text.setTransform(-101.3,-574.35);

	this.text_1 = new cjs.Text("\nתכירו טכניקות להכנת קוקטיילים, בהמשך תחזיקו שייקרים,תמזגו ותקשטו את המשקאות שהכנתם בעצמכם. סדנה כיפית עם מלא ניחוחות וטעמים.", "23px 'Rubik Medium'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 31;
	this.text_1.lineWidth = 830;
	this.text_1.parent = this;
	this.text_1.setTransform(-115.3541,-570.25,0.9662,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.537)").ss(1,1,1).p("Eg7ggS4MB3BAAAQBjAABGBLQBHBLAABqIAAdwQAABqhHBLQhGBMhjAAMh3BAAAQhjAAhHhMQhGhLAAhqIAA9wQAAhqBGhLQBHhLBjAAg");
	this.shape.setTransform(-117.3,-462.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,255,0.667)").s().p("Eg7gAS5QhjAAhHhMQhFhLAAhqIAA9wQAAhqBFhLQBHhLBjAAMB3BAAAQBjAABGBLQBGBLAABqIAAdwQAABqhGBLQhGBMhjAAg");
	this.shape_1.setTransform(-117.3,-462.975);

	this.text_2 = new cjs.Text("\nמוזיקה היא חובה בכל מסיבה. כאן נכנס התקליטן לשמח ולהקפיץ את המסיבה ", "18px 'Rubik Medium'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 592;
	this.text_2.parent = this;
	this.text_2.setTransform(-119.9,-523.315,1.2751,0.8253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,153,51,0.667)").s().p("Eg7gAS5QhjAAhHhMQhFhLAAhqIAA9wQAAhqBFhLQBHhLBjAAMB3BAAAQBjAABGBLQBGBLAABqIAAdwQAABqhGBLQhGBMhjAAg");
	this.shape_2.setTransform(-109.3,-464.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CCFF").s().p("Eg7gAS5QhjAAhHhMQhFhLAAhqIAA9wQAAhqBFhLQBHhLBjAAMB3BAAAQBjAABGBLQBGBLAABqIAAdwQAABqhGBLQhGBMhjAAg");
	this.shape_3.setTransform(-112.3,-466.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TextBox,p:{y:-463.45}},{t:this.instance,p:{scaleX:0.8847,scaleY:0.8847,x:-503,y:-603.25}}]}).to({state:[{t:this.TextBox,p:{y:-461.4}},{t:this.text_1,p:{scaleX:0.9662,scaleY:1,x:-115.3541,y:-570.25,text:"\nתכירו טכניקות להכנת קוקטיילים, בהמשך תחזיקו שייקרים,תמזגו ותקשטו את המשקאות שהכנתם בעצמכם. סדנה כיפית עם מלא ניחוחות וטעמים.",lineWidth:830,font:"23px 'Rubik Medium'",lineHeight:30.8}},{t:this.text,p:{x:-101.3,y:-574.35,text:"סדנת קוקטיילים-בתכלס",color:"#000000",lineWidth:438}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-510.05,y:-595.3}}]},1).to({state:[{t:this.shape_1},{t:this.shape,p:{x:-117.3,y:-462.975}},{t:this.text_1,p:{scaleX:1.2751,scaleY:0.8253,x:-124.55,y:-563.5,text:"\nכמה זמן? שעה וחצי עד שעתיים\nלמי מיועד? 2-8 אנשים\nאיפה? אצלכם בבית.בחלל ציבורי או במקום פרטי \nכמה? 1000-2500 ש\"ח\nמה כולל? ברמן, ציוד לקוקטיילים, 3 בקבוקי אלכוהול, תוספות וקישוטים",lineWidth:592,font:"23px 'Rubik Medium'",lineHeight:30.8}},{t:this.text,p:{x:-122.3,y:-572.8,text:"סדנת קוקטיילים",color:"#003333",lineWidth:303}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-510.05,y:-595.3}}]},1).to({state:[{t:this.shape_2,p:{x:-109.3,y:-464.975}},{t:this.shape,p:{x:-109.3,y:-464.975}},{t:this.text_2},{t:this.text_1,p:{scaleX:1,scaleY:1,x:-1013.6,y:-592.75,text:"",lineWidth:100,font:"18px 'Rubik-Medium'",lineHeight:24.55}},{t:this.text,p:{x:-123.8,y:-577.9,text:"תקליטן-בתכלס",color:"#003333",lineWidth:215}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-510.05,y:-595.3}}]},1).to({state:[{t:this.shape_2,p:{x:-101.3,y:-464.975}},{t:this.shape,p:{x:-101.3,y:-464.975}},{t:this.text_1,p:{scaleX:1.2751,scaleY:0.8253,x:-115,y:-551.1,text:"\nכמה זמן? כל משך המסיבה\nלמי מיועד? 30 עד 150 אנשים\nאיפה? אצלכם בבית,במקום ציבורי או פרטי סגור/פתוח\nכמה עולה? נע בין 1500-2000 ש\"ח\nמה כולל? מוזיקה איכותית שתתאים לאווירת המסיבה, הגברה ועמדת תקליטן",lineWidth:592,font:"18px 'Rubik Medium'",lineHeight:24.55}},{t:this.text,p:{x:-107.2,y:-573.2,text:"תקליטן",color:"#003333",lineWidth:99}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-510.05,y:-595.3}}]},1).to({state:[{t:this.shape_3},{t:this.shape,p:{x:-112.3,y:-466.975}},{t:this.text_1,p:{scaleX:1.2751,scaleY:0.8253,x:-113.55,y:-535.85,text:"\nבשנים האחרונות הורידו את זמן שירות החובה לגברים מ3  שנים לשנתיים וחצי ",lineWidth:592,font:"18px 'Rubik Medium'",lineHeight:24.55}},{t:this.text,p:{x:-99.45,y:-575.45,text:"הידעת?",color:"#003333",lineWidth:99}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-510.05,y:-595.3}}]},1).to({state:[{t:this.shape_2,p:{x:-99.3,y:-466.975}},{t:this.shape,p:{x:-99.3,y:-466.975}},{t:this.text_1,p:{scaleX:1.2751,scaleY:0.8253,x:-109.9,y:-536.26,text:"\nהתאריך ה29.2 מופיע רק בשנה מעוברת, לכן מי שנולד בו חוגג את יום הולדתו האמיתי רק אחת ל4 שנים.",lineWidth:592,font:"18px 'Rubik Medium'",lineHeight:24.55}},{t:this.text,p:{x:-91.15,y:-579.9,text:"הידעת?",color:"#003333",lineWidth:124}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-510.05,y:-595.3}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1065.6,-730.7,1372.1999999999998,390.70000000000005);


(lib.odot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.hit = new lib.hit();
	this.hit.name = "hit";
	this.hit.setTransform(299.65,-155.95,0.8036,0.8036);

	this.xOdot = new lib.xOdot();
	this.xOdot.name = "xOdot";
	this.xOdot.setTransform(-429.4,-136.55,0.4659,0.4659,0,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.xOdot, 0, 1, 1);

	this.instance = new lib.simpleBalloon();
	this.instance.setTransform(-423.95,-130.95,0.3266,0.3266);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-345.5,-212.3,0.3573,0.3573);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(-435.4,-225.1,0.3573,0.3573);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.xOdot},{t:this.hit}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.odot, new cjs.Rectangle(-435.4,-225.1,819.4,410.2), null);


// stage content:
(lib.InteractiveWhosyourguy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24);
		self.odot.visible = false;
		
		//לצורך החזרת כל המאזינים
		function addAllListeners() {
			self.textBox.addEventListener("click", FrameZeroAll);
			self.odot_btn.addEventListener("click", OdotBox);
			self.odot_btn.addEventListener("click", OdotBox);
			self.odot.xOdot.addEventListener("click", odotClose);
			self.bday.addEventListener("mouseover", bdayMOver);
			self.bday.addEventListener("mouseout", bdayMOut);
			self.bday.addEventListener("click", bdayClick);
			self.barbat.addEventListener("mouseover", barbatMOver);
			self.barbat.addEventListener("mouseout", barbatMOut);
			self.barbat.addEventListener("click", barbatClick);
			self.gius.addEventListener("mouseover", giusMOver);
			self.gius.addEventListener("mouseout", giusMOut);
			self.gius.addEventListener("click", giusClick);
			self.rel.addEventListener("mouseover", relMOver);
			self.rel.addEventListener("mouseout", relMOut);
			self.rel.addEventListener("click", relClick);
			self.ravakot.addEventListener("mouseover", ravakotMOver);
			self.ravakot.addEventListener("mouseout", ravakotMOut);
			self.ravakot.addEventListener("click", ravakotClick);
			self.marry.addEventListener("mouseover", marryMOver);
			self.marry.addEventListener("mouseout", marryMOut);
			self.marry.addEventListener("click", marryClick);
			self.bishul.addEventListener("mouseover", bishulMOver);
			self.bishul.addEventListener("mouseout", bishulMOut);
			self.bishul.addEventListener("click", bishulClick);
			self.cocktail.addEventListener("mouseover", cocktailMOver);
			self.cocktail.addEventListener("mouseout", cocktailMOut);
			self.cocktail.addEventListener("click", cocktailClick);
			self.conditor.addEventListener("mouseover", conditorMOver);
			self.conditor.addEventListener("mouseout", conditorMOut);
			self.conditor.addEventListener("click", conditorClick);
			self.menicoor.addEventListener("mouseover", menicoorMOver);
			self.menicoor.addEventListener("mouseout", menicoorMOut);
			self.menicoor.addEventListener("click", menicoorClick);
			self.standup.addEventListener("mouseover", standupMOver);
			self.standup.addEventListener("mouseout", standupMOut);
			self.standup.addEventListener("click", standupClick);
			self.rav.addEventListener("mouseover", ravMOver);
			self.rav.addEventListener("mouseout", ravMOut);
			self.rav.addEventListener("click", ravClick);
			self.chef.addEventListener("mouseover", chefMOver);
			self.chef.addEventListener("mouseout", chefMOut);
			self.chef.addEventListener("click", chefClick);
			self.dj.addEventListener("mouseover", djMOver);
			self.dj.addEventListener("mouseout", djMOut);
			self.dj.addEventListener("click", djClick);
		}
		//לצורך הסרת כל המאזינים
		function removeAllListeners() {
			self.odot_btn.removeEventListener("click", OdotBox);
			self.odot_btn.removeEventListener("click", OdotBox);
			self.odot.xOdot.removeEventListener("click", odotClose);
			self.bday.removeEventListener("mouseover", bdayMOver);
			self.bday.removeEventListener("mouseout", bdayMOut);
			self.bday.removeEventListener("click", bdayClick);
			self.barbat.removeEventListener("mouseover", barbatMOver);
			self.barbat.removeEventListener("mouseout", barbatMOut);
			self.barbat.removeEventListener("click", barbatClick);
			self.gius.removeEventListener("mouseover", giusMOver);
			self.gius.removeEventListener("mouseout", giusMOut);
			self.gius.removeEventListener("click", giusClick);
			self.rel.removeEventListener("mouseover", relMOver);
			self.rel.removeEventListener("mouseout", relMOut);
			self.rel.removeEventListener("click", relClick);
			self.ravakot.removeEventListener("mouseover", ravakotMOver);
			self.ravakot.removeEventListener("mouseout", ravakotMOut);
			self.ravakot.removeEventListener("click", ravakotClick);
			self.marry.removeEventListener("mouseover", marryMOver);
			self.marry.removeEventListener("mouseout", marryMOut);
			self.marry.removeEventListener("click", marryClick);
			self.bishul.removeEventListener("mouseover", bishulMOver);
			self.bishul.removeEventListener("mouseout", bishulMOut);
			self.bishul.removeEventListener("click", bishulClick);
			self.cocktail.removeEventListener("mouseover", cocktailMOver);
			self.cocktail.removeEventListener("mouseout", cocktailMOut);
			self.cocktail.removeEventListener("click", cocktailClick);
			self.conditor.removeEventListener("mouseover", conditorMOver);
			self.conditor.removeEventListener("mouseout", conditorMOut);
			self.conditor.removeEventListener("click", conditorClick);
			self.menicoor.removeEventListener("mouseover", menicoorMOver);
			self.menicoor.removeEventListener("mouseout", menicoorMOut);
			self.menicoor.removeEventListener("click", menicoorClick);
			self.standup.removeEventListener("mouseover", standupMOver);
			self.standup.removeEventListener("mouseout", standupMOut);
			self.standup.removeEventListener("click", standupClick);
			self.rav.removeEventListener("mouseover", ravMOver);
			self.rav.removeEventListener("mouseout", ravMOut);
			self.rav.removeEventListener("click", ravClick);
			self.chef.removeEventListener("mouseover", chefMOver);
			self.chef.removeEventListener("mouseout", chefMOut);
			self.chef.removeEventListener("click", chefClick);
			self.dj.removeEventListener("mouseover", djMOver);
			self.dj.removeEventListener("mouseout", djMOut);
			self.dj.removeEventListener("click", djClick);
		}
		//סמן עכבר של אין כניסה למלבנים ובלונים שלא פותחה להם כרטיסית תוכן
		function cursorNoEntry() {
			BaddMouseEnabled();
			removeAllListeners();
			self.bishul.cursor = "not-allowed";
			self.conditor.cursor = "not-allowed";
			self.menicoor.cursor = "not-allowed";
			self.standup.cursor = "not-allowed";
			self.rav.cursor = "not-allowed";
			self.chef.cursor = "not-allowed";
			self.barbat.cursor = "not-allowed";
			self.ravakot.cursor = "not-allowed";
			self.marry.cursor = "not-allowed";
		}
		function cursorDefault() {
			self.bishul.cursor = "default";
			self.conditor.cursor = "default";
			self.menicoor.cursor = "default";
			self.standup.cursor = "default";
			self.rav.cursor = "default";
			self.chef.cursor = "not-allowed";
			self.barbat.cursor = "default";
			self.ravakot.cursor = "default";
			self.marry.cursor = "default";
		}
		//מצב מואר של המלבנים
		function kibuaAllR() {
			self.bday.gotoAndStop(1);
			self.barbat.gotoAndStop(1);
			self.gius.gotoAndStop(1);
			self.rel.gotoAndStop(1);
			self.ravakot.gotoAndStop(1);
			self.marry.gotoAndStop(1);
			self.bday.alpha = 1;
			self.barbat.alpha = 1;
			self.gius.alpha = 1;
			self.rel.alpha = 1;
			self.ravakot.alpha = 1;
			self.marry.alpha = 1;
		}
		//מצב מאופרר של המלבנים
		function NokibuaAllR() {
			self.bday.gotoAndStop(0);
			self.barbat.gotoAndStop(0);
			self.gius.gotoAndStop(0);
			self.rel.gotoAndStop(0);
			self.ravakot.gotoAndStop(0);
			self.marry.gotoAndStop(0);
			self.bday.alpha = 0.2;
			self.barbat.alpha = 0.2;
			self.gius.alpha = 0.2;
			self.rel.alpha = 0.2;
			self.ravakot.alpha = 0.2;
			self.marry.alpha = 0.2;
			RaddMouseEnabled();
		}
		
		//מצב מואר בלונים
		function KibuaAllB() {
			self.bishul.gotoAndStop(2);
			self.cocktail.gotoAndStop(2);
			self.conditor.gotoAndStop(2);
			self.menicoor.gotoAndStop(2);
			self.standup.gotoAndStop(2);
			self.rav.gotoAndStop(2);
			self.chef.gotoAndStop(2);
			self.dj.gotoAndStop(2);
		}
		//מצב מאופרר בלונים
		function NokibuaAllB() {
			self.bishul.gotoAndStop(1);
			self.cocktail.gotoAndStop(1);
			self.conditor.gotoAndStop(1);
			self.menicoor.gotoAndStop(1);
			self.standup.gotoAndStop(1);
			self.rav.gotoAndStop(1);
			self.chef.gotoAndStop(1);
			self.dj.gotoAndStop(1);
			BaddMouseEnabled();
		}
		
		
		
		//הוספת אירועי עכבר-בעת שחרור מקיבוע
		function RaddMouseEnabled() {
			//מלבני אירועים
			self.bday.mouseEnabled = true;
			self.barbat.mouseEnabled = true;
			self.gius.mouseEnabled = true;
			self.rel.mouseEnabled = true;
			self.ravakot.mouseEnabled = true;
			self.marry.mouseEnabled = true;
		}
		//הוספת מעבר עכבר לבלונים
		function BaddMouseEnabled() {
			// בלוני אנשי מקצוע
			self.standup.mouseEnabled = true;
			self.conditor.mouseEnabled = true;
			self.rav.mouseEnabled = true;
			self.chef.mouseEnabled = true;
			self.dj.mouseEnabled = true;
			self.menicoor.mouseEnabled = true;
			self.cocktail.mouseEnabled = true;
			self.bishul.mouseEnabled = true;
		}
		
		//הסרת אירועי עכבר למלבנים
		function RremoveMouseEnabled() {
			//מלבני אירועים
			self.bday.mouseEnabled = false;
			self.barbat.mouseEnabled = false;
			self.gius.mouseEnabled = false;
			self.rel.mouseEnabled = false;
			self.ravakot.mouseEnabled = false;
			self.marry.mouseEnabled = false;
		}
		
		
		//הסרת אירועי עכבר לבלונים
		function BremoveMouseEnabled() {
			// בלוני אנשי מקצוע
			self.standup.mouseEnabled = false;
			self.conditor.mouseEnabled = false;
			self.rav.mouseEnabled = false;
			self.chef.mouseEnabled = false;
			self.dj.mouseEnabled = false;
			self.menicoor.mouseEnabled = false;
			self.cocktail.mouseEnabled = false;
			self.bishul.mouseEnabled = false;
		}
		
		//כפתור איפוס
		self.textBox.addEventListener("click", FrameZeroAll);
		
		// מצב התחלתי פריים זירו 
		function FrameZeroAll() {
			BaddMouseEnabled();
			RaddMouseEnabled();
			self.textBox.gotoAndStop(0);
			NokibuaAllR();
			NokibuaAllB();
			addAllListeners();
			self.instructions.text = "העבר את העכבר מעל הבלון או המלבן כדי להתאים בין האירוע לאיש המקצוע";
		}
		
		FrameZeroAll();
		
		//תיבת טקסט וכפתור אודות 
		self.odot_btn.addEventListener("click", OdotBox);
		
		//רצף פונקציות של כפתור אודות
		function OdotBox() {
			RremoveMouseEnabled();
			BremoveMouseEnabled();
			self.odot.visible = true;
			self.odot.hit.cursor = "pointer";
		}
		
		self.odot.hit.addEventListener("click", link);
		
		function link() {
			window.open("https://www.hit.ac.il/telem/overview");
		}
		
		self.odot.xOdot.addEventListener("click", odotClose);
		
		
		function odotClose() {
			RaddMouseEnabled();
			BaddMouseEnabled();
			self.odot.visible = false;
		}
		
		
		self.bday.addEventListener("mouseover", bdayMOver);
		
		function bdayMOver() {
			NokibuaAllR();
			self.instructions.text = "יש ללחוץ על מלבן יום הולדת כדי למצוא איש מקצוע מתאים לאירוע";
			self.textBox.gotoAndStop(6);
			self.bday.alpha = 1;
			self.bday.gotoAndStop(0);
			self.bday.cursor = "pointer";
		}
		
		self.bday.addEventListener("mouseout", bdayMOut);
		
		function bdayMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.bday.cursor = "default";
		}
		
		self.bday.addEventListener("click", bdayClick);
		
		function bdayClick() {
			RremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על בלון של איש מקצוע כדי לקרוא עליו יותר";
			self.bday.gotoAndStop(1);
			self.bday.alpha = 1;
			self.bday.removeEventListener("mouseover", bdayMOver);
			self.bday.removeEventListener("mouseout", bdayMOut);
			KibuaAllB();
			self.menicoor.gotoAndStop(1);
			self.rav.gotoAndStop(1);
		}
		
		
		self.barbat.addEventListener("mouseover", barbatMOver);
		
		function barbatMOver() {
			NokibuaAllR();
			self.textBox.gotoAndStop(0);
			self.barbat.alpha = 1;
			self.barbat.gotoAndStop(0);
			self.barbat.cursor = "pointer";
		}
		
		
		self.barbat.addEventListener("mouseout", barbatMOut);
		
		function barbatMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.barbat.cursor = "default";
		}
		
		self.barbat.addEventListener("click", barbatClick);
		
		function barbatClick() {
			RremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על בלון של איש מקצוע כדי לקרוא עליו יותר";
			self.barbat.gotoAndStop(1);
			self.barbat.alpha = 1;
			self.barbat.removeEventListener("mouseover", barbatMOver);
			self.barbat.removeEventListener("mouseout", barbatMOut);
			KibuaAllB();
			self.conditor.gotoAndStop(1);
			self.cocktail.gotoAndStop(1);
			self.bishul.gotoAndStop(1);
		}
		
		
		self.gius.addEventListener("mouseover", giusMOver);
		
		function giusMOver() {
			NokibuaAllR();
			self.textBox.gotoAndStop(5);
			self.gius.alpha = 1;
			self.gius.gotoAndStop(0);
			self.gius.cursor = "pointer";
		}
		
		
		self.gius.addEventListener("mouseout", giusMOut);
		
		function giusMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.gius.cursor = "default";
		}
		
		self.gius.addEventListener("click", giusClick);
		
		function giusClick() {
			RremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על בלון של איש מקצוע כדי לקרוא עליו יותר";
			self.gius.gotoAndStop(1);
			self.gius.alpha = 1;
			self.gius.removeEventListener("mouseover", giusMOver);
			self.gius.removeEventListener("mouseout", giusMOut);
			KibuaAllB();
			self.menicoor.gotoAndStop(1);
			self.rav.gotoAndStop(1);
		}
		
		self.rel.addEventListener("mouseover", relMOver);
		
		function relMOver() {
			NokibuaAllR();
			self.textBox.gotoAndStop(5);
			self.rel.alpha = 1;
			self.rel.gotoAndStop(0);
			self.rel.cursor = "pointer";
		}
		
		
		self.rel.addEventListener("mouseout", relMOut);
		
		function relMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.rel.cursor = "default";
		}
		
		self.rel.addEventListener("click", relClick);
		
		function relClick() {
			RremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על בלון של איש מקצוע כדי לקרוא עליו יותר";
			self.rel.gotoAndStop(1);
			self.rel.alpha = 1;
			self.rel.removeEventListener("mouseover", relMOver);
			self.rel.removeEventListener("mouseout", relMOut);
			KibuaAllB();
			self.menicoor.gotoAndStop(1);
			self.rav.gotoAndStop(1);
			self.conditor.gotoAndStop(1);
		}
		
		self.ravakot.addEventListener("mouseover", ravakotMOver);
		
		function ravakotMOver() {
			NokibuaAllR();
			self.textBox.gotoAndStop(0);
			self.ravakot.alpha = 1;
			self.ravakot.gotoAndStop(0);
			self.ravakot.cursor = "pointer";
		}
		
		
		self.ravakot.addEventListener("mouseout", ravakotMOut);
		
		function ravakotMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.ravakot.cursor = "default";
		}
		
		self.ravakot.addEventListener("click", ravakotClick);
		
		function ravakotClick() {
			RremoveMouseEnabled();
			self.ravakot.mouseEnabled = true;
			self.instructions.text = "יש ללחוץ על בלון של איש מקצוע כדי לקרוא עליו יותר";
			self.ravakot.gotoAndStop(1);
			self.ravakot.alpha = 1;
			self.ravakot.removeEventListener("mouseover", ravakotMOver);
			self.ravakot.removeEventListener("mouseout", ravakotMOut);
			KibuaAllB();
			self.conditor.gotoAndStop(1);
			self.bishul.gotoAndStop(1);
			self.rav.gotoAndStop(1);
		}
		
		self.marry.addEventListener("mouseover", marryMOver);
		
		function marryMOver() {
			NokibuaAllR();
			self.textBox.gotoAndStop(0);
			self.marry.alpha = 1;
			self.marry.gotoAndStop(0);
			self.marry.cursor = "pointer";
		}
		
		
		self.marry.addEventListener("mouseout", marryMOut);
		
		function marryMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.marry.cursor = "default";
		}
		
		self.marry.addEventListener("click", marryClick);
		
		function marryClick() {
			RremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על בלון של איש מקצוע כדי לקרוא עליו יותר";
			self.marry.gotoAndStop(1);
			self.marry.removeEventListener("mouseover", marryMOver);
			self.marry.removeEventListener("mouseout", marryMOut);
			self.marry.alpha = 1;
			KibuaAllB();
			self.menicoor.gotoAndStop(1);
			self.rav.gotoAndStop(1);
			self.standup.gotoAndStop(1);
			self.bishul.gotoAndStop(1);
			self.dj.gotoAndStop(1);
			//אינטראקציה של בלונים
		}
		
		//מעבר עכבר וקליקים על בלונים
		self.bishul.addEventListener("mouseover", bishulMOver);
		
		function bishulMOver() {
			NokibuaAllB();
			self.textBox.gotoAndStop(0);
			self.bishul.gotoAndStop(0);
			self.bday.gotoAndStop(0);
			self.bday.alpha = 1;
			self.gius.gotoAndStop(0);
			self.gius.alpha = 1;
			self.rel.gotoAndStop(0);
			self.rel.alpha = 1;
			self.bishul.cursor = "pointer";
		}
		
		
		self.bishul.addEventListener("mouseout", bishulMOut);
		
		function bishulMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.bishul.cursor = "default";
		}
		
		self.bishul.addEventListener("click", bishulClick);
		
		function bishulClick() {
			BremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על אחד האירועים כדי לקרוא עליו יותר";
			self.bishul.mouseEnabled = true;
			self.bishul.removeEventListener("mouseover", bishulMOver);
			self.bishul.removeEventListener("mouseout", bishulMOut);
			self.bishul.gotoAndStop(2);
			kibuaAllR();
			self.barbat.gotoAndStop(0);
			self.barbat.MouseEnabled = false;
			self.barbat.alpha = 0.2;
			self.ravakot.gotoAndStop(0);
			self.ravakot.MouseEnabled = false;
			self.ravakot.alpha = 0.2;
			self.marry.gotoAndStop(0);
			self.marry.MouseEnabled = false;
			self.marry.alpha = 0.2;
		
		}
		
		self.cocktail.addEventListener("mouseover", cocktailMOver);
		
		function cocktailMOver() {
			NokibuaAllB();
			self.textBox.gotoAndStop(1);
			self.cocktail.gotoAndStop(0);
			self.gius.gotoAndStop(0);
			self.gius.alpha = 1;
			self.rel.gotoAndStop(0);
			self.rel.alpha = 1;
			self.ravakot.gotoAndStop(0);
			self.ravakot.alpha = 1;
			self.marry.gotoAndStop(0);
			self.marry.alpha = 1;
			self.cocktail.cursor = "pointer";
		}
		
		
		self.cocktail.addEventListener("mouseout", cocktailMOut);
		
		function cocktailMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.cocktail.cursor = "default";
		}
		
		self.cocktail.addEventListener("click", cocktailClick);
		
		function cocktailClick() {
			BremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על אחד האירועים כדי לקרוא עליו יותר";
			self.cocktail.mouseEnabled = true;
			self.textBox.gotoAndStop(2);
			self.cocktail.removeEventListener("mouseover", cocktailMOver);
			self.cocktail.removeEventListener("mouseout", cocktailMOut);
			self.cocktail.gotoAndStop(2);
			kibuaAllR();
			self.bday.gotoAndStop(0);
			self.bday.alpha = 0.2;
			self.barbat.gotoAndStop(0);
			self.barbat.alpha = 0.2;
		}
		
		self.conditor.addEventListener("mouseover", conditorMOver);
		
		function conditorMOver() {
			NokibuaAllB();
			self.textBox.gotoAndStop(0);
			self.conditor.gotoAndStop(0);
			self.bday.gotoAndStop(0);
			self.bday.alpha = 1;
			self.gius.gotoAndStop(0);
			self.gius.alpha = 1;
			self.rel.gotoAndStop(0);
			self.rel.alpha = 1;
			self.conditor.cursor = "pointer";
		}
		
		
		self.conditor.addEventListener("mouseout", conditorMOut);
		
		function conditorMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.conditor.cursor = "default";
		}
		
		self.conditor.addEventListener("click", conditorClick);
		
		function conditorClick() {
			BremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על אחד האירועים כדי לקרוא עליו יותר";
			self.conditor.mouseEnabled = true;
			self.textBox.gotoAndStop(0);
			self.conditor.removeEventListener("mouseover", conditorMOver);
			self.conditor.removeEventListener("mouseout", conditorMOut);
			self.conditor.gotoAndStop(2);
			kibuaAllR();
			self.barbat.gotoAndStop(0);
			self.barbat.alpha = 0.2;
			self.ravakot.gotoAndStop(0);
			self.ravakot.alpha = 0.2;
			self.marry.gotoAndStop(0);
			self.marry.alpha = 0.2;
		}
		
		self.menicoor.addEventListener("mouseover", menicoorMOver);
		
		function menicoorMOver() {
			NokibuaAllB();
			self.textBox.gotoAndStop(0);
			self.menicoor.gotoAndStop(0);
			self.barbat.gotoAndStop(0);
			self.barbat.alpha = 1;
			self.ravakot.gotoAndStop(0);
			self.ravakot.alpha = 1;
			self.menicoor.cursor = "pointer";
		}
		
		
		self.menicoor.addEventListener("mouseout", menicoorMOut);
		
		function menicoorMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.menicoor.cursor = "default";
		
		}
		
		self.menicoor.addEventListener("click", menicoorClick);
		
		function menicoorClick() {
			BremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על אחד האירועים כדי לקרוא עליו יותר";
			self.menicoor.mouseEnabled = true;
			self.textBox.gotoAndStop(0);
			self.menicoor.removeEventListener("mouseover", menicoorMOver);
			self.menicoor.removeEventListener("mouseout", menicoorMOut);
			self.menicoor.gotoAndStop(2);
			kibuaAllR();
			self.bday.gotoAndStop(0);
			self.bday.alpha = 0.2;
			self.gius.gotoAndStop(0);
			self.gius.alpha = 0.2;
			self.rel.gotoAndStop(0);
			self.rel.alpha = 0.2;
			self.marry.gotoAndStop(0);
			self.marry.alpha = 0.2;
		}
		
		self.standup.addEventListener("mouseover", standupMOver);
		
		function standupMOver() {
			NokibuaAllB();
			self.textBox.gotoAndStop(0);
			self.standup.gotoAndStop(0);
			self.bday.gotoAndStop(0);
			self.barbat.gotoAndStop(0);
			self.gius.gotoAndStop(0);
			self.rel.gotoAndStop(0);
			self.ravakot.gotoAndStop(0);
			self.marry.gotoAndStop(0);
			self.bday.alpha = 1;
			self.barbat.alpha = 1;
			self.gius.alpha = 1;
			self.rel.alpha = 1;
			self.ravakot.alpha = 1;
			self.marry.alpha = 1;
			self.standup.cursor = "pointer";
		}
		
		
		self.standup.addEventListener("mouseout", standupMOut);
		
		function standupMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.standup.cursor = "default";
		
		}
		
		self.standup.addEventListener("click", standupClick);
		
		function standupClick() {
			BremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על אחד האירועים כדי לקרוא עליו יותר";
			self.standup.mouseEnabled = true;
			self.textBox.gotoAndStop(0);
			self.standup.removeEventListener("mouseover", standupMOver);
			self.standup.removeEventListener("mouseout", standupMOut);
			self.standup.gotoAndStop(2);
			kibuaAllR();
		
		}
		
		self.rav.addEventListener("mouseover", ravMOver);
		
		function ravMOver() {
			NokibuaAllB();
			self.textBox.gotoAndStop(0);
			self.rav.gotoAndStop(0);
			self.barbat.gotoAndStop(0);
			self.barbat.alpha = 1;
			self.rav.cursor = "pointer";
		}
		
		
		self.rav.addEventListener("mouseout", ravMOut);
		
		function ravMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.rav.cursor = "default";
		
		}
		
		self.rav.addEventListener("click", ravClick);
		
		function ravClick() {
			BremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על אחד האירועים כדי לקרוא עליו יותר";
			self.rav.mouseEnabled = true;
			self.textBox.gotoAndStop(0);
			self.rav.removeEventListener("mouseover", ravMOver);
			self.rav.removeEventListener("mouseout", ravMOut);
			self.rav.gotoAndStop(2);
			kibuaAllR();
			self.bday.gotoAndStop(0);
			self.bday.alpha = 0.2;
			self.gius.gotoAndStop(0);
			self.gius.alpha = 0.2;
			self.rel.gotoAndStop(0);
			self.rel.alpha = 0.2;
			self.ravakot.gotoAndStop(0);
			self.ravakot.alpha = 0.2;
			self.marry.gotoAndStop(0);
			self.marry.alpha = 0.2;
		}
		
		self.chef.addEventListener("mouseover", chefMOver);
		
		function chefMOver() {
			NokibuaAllB();
			self.textBox.gotoAndStop(0);
			self.chef.gotoAndStop(0);
			self.bday.gotoAndStop(0);
			self.barbat.gotoAndStop(0);
			self.gius.gotoAndStop(0);
			self.rel.gotoAndStop(0);
			self.ravakot.gotoAndStop(0);
			self.marry.gotoAndStop(0);
			self.bday.alpha = 1;
			self.barbat.alpha = 1;
			self.gius.alpha = 1;
			self.rel.alpha = 1;
			self.ravakot.alpha = 1;
			self.marry.alpha = 1;
			self.chef.cursor = "pointer";
		}
		
		
		self.standup.addEventListener("mouseout", standupMOut);
		
		function chefMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.chef.cursor = "default";
		
		}
		
		self.chef.addEventListener("click", chefClick);
		
		function chefClick() {
			BremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על אחד האירועים כדי לקרוא עליו יותר";
			self.chef.mouseEnabled = true;
			self.textBox.gotoAndStop(0);
			self.chef.removeEventListener("mouseover", chefMOver);
			self.chef.removeEventListener("mouseout", chefMOut);
			self.chef.gotoAndStop(2);
			kibuaAllR();
			self.barbat.gotoAndStop(0);
			self.barbat.alpha = 0.2;
		
		}
		
		self.dj.addEventListener("mouseover", djMOver);
		
		function djMOver() {
			NokibuaAllB();
			self.textBox.gotoAndStop(0);
			self.dj.gotoAndStop(0);
			self.bday.gotoAndStop(0);
			self.barbat.gotoAndStop(0);
			self.gius.gotoAndStop(0);
			self.rel.gotoAndStop(0);
			self.ravakot.gotoAndStop(0);
			self.bday.alpha = 1;
			self.barbat.alpha = 1;
			self.gius.alpha = 1;
			self.rel.alpha = 1;
			self.ravakot.alpha = 1;
			self.dj.cursor = "pointer";
		}
		
		
		self.dj.addEventListener("mouseout", djMOut);
		
		function djMOut() {
			self.textBox.gotoAndStop(0);
			FrameZeroAll();
			self.dj.cursor = "default";
		
		}
		
		self.dj.addEventListener("click", djClick);
		
		function djClick() {
			BremoveMouseEnabled();
			self.instructions.text = "יש ללחוץ על אחד האירועים כדי לקרוא עליו יותר";
			self.dj.mouseEnabled = true;
			self.textBox.gotoAndStop(4);
			self.dj.removeEventListener("mouseover", djMOver);
			self.dj.removeEventListener("mouseout", djMOut);
			self.dj.gotoAndStop(2);
			kibuaAllR();
			self.marry.gotoAndStop(0);
			self.marry.alpha = 0.2;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ODOT
	this.odot = new lib.odot();
	this.odot.name = "odot";
	this.odot.setTransform(696.7,412.9,1.3992,1.3992,0,0,0,0.1,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.odot).wait(1));

	// instructions1
	this.instructions = new cjs.Text("העבר את העכבר מעל הבלון או הקוביה כדי להתאים בין האירוע לאיש המקצוע המתאים", "22px 'Rubik Medium'");
	this.instructions.name = "instructions";
	this.instructions.textAlign = "right";
	this.instructions.lineHeight = 30;
	this.instructions.lineWidth = 789;
	this.instructions.alpha = 0.49803922;
	this.instructions.parent = this;
	this.instructions.setTransform(1165.95,348.1);

	this.timeline.addTween(cjs.Tween.get(this.instructions).wait(1));

	// textBox
	this.textBox = new lib.textbox();
	this.textBox.name = "textBox";
	this.textBox.setTransform(882.8,738.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.537)").ss(7,1,1).p("EA9dgAmMh66ABN");
	this.shape.setTransform(782,298.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.textBox}]}).wait(1));

	// bday
	this.bday = new lib.bday();
	this.bday.name = "bday";
	this.bday.setTransform(141.85,166.8,0.6909,0.6912,0,0,0,-3.9,-37.9);

	this.timeline.addTween(cjs.Tween.get(this.bday).wait(1));

	// barbat
	this.barbat = new lib.barbat();
	this.barbat.name = "barbat";
	this.barbat.setTransform(141.8,253.2,0.6549,0.6549,0,0,0,1.6,3.4);

	this.timeline.addTween(cjs.Tween.get(this.barbat).wait(1));

	// gius
	this.gius = new lib.army();
	this.gius.name = "gius";
	this.gius.setTransform(141.75,338.8,0.7143,0.7143,0,0,0,-9,-2);

	this.timeline.addTween(cjs.Tween.get(this.gius).wait(1));

	// rel
	this.rel = new lib.release();
	this.rel.name = "rel";
	this.rel.setTransform(204.6,437.3,0.7143,0.7143);

	this.timeline.addTween(cjs.Tween.get(this.rel).wait(1));

	// ravakot
	this.ravakot = new lib.RAVAKOT();
	this.ravakot.name = "ravakot";
	this.ravakot.setTransform(141.85,513.95,0.6805,0.6805,0,0,0,-25.9,-78);

	this.timeline.addTween(cjs.Tween.get(this.ravakot).wait(1));

	// marry
	this.marry = new lib.marry();
	this.marry.name = "marry";
	this.marry.setTransform(154.1,597.1,0.6792,0.6792,0,0,0,0.5,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.marry).wait(1));

	// bishul
	this.bishul = new lib.bishul();
	this.bishul.name = "bishul";
	this.bishul.setTransform(1212.5,555.75,1,1,0,0,0,79.2,162.7);

	this.timeline.addTween(cjs.Tween.get(this.bishul).wait(1));

	// cocktail
	this.cocktail = new lib.cocktail();
	this.cocktail.name = "cocktail";
	this.cocktail.setTransform(1122.35,782.15,1.5499,1.5499,0,0,0,29.9,235.2);

	this.timeline.addTween(cjs.Tween.get(this.cocktail).wait(1));

	// conditor
	this.conditor = new lib.conditor();
	this.conditor.name = "conditor";
	this.conditor.setTransform(901.4,748.7);

	this.timeline.addTween(cjs.Tween.get(this.conditor).wait(1));

	// menicoor
	this.menicoor = new lib.menicoor();
	this.menicoor.name = "menicoor";
	this.menicoor.setTransform(854.45,758.5);

	this.timeline.addTween(cjs.Tween.get(this.menicoor).wait(1));

	// standup
	this.standup = new lib.standup();
	this.standup.name = "standup";
	this.standup.setTransform(634.55,733.65);

	this.timeline.addTween(cjs.Tween.get(this.standup).wait(1));

	// rav
	this.rav = new lib.rav();
	this.rav.name = "rav";
	this.rav.setTransform(606.05,776.05,0.8718,0.8013);

	this.timeline.addTween(cjs.Tween.get(this.rav).wait(1));

	// chef
	this.chef = new lib.chef_1();
	this.chef.name = "chef";
	this.chef.setTransform(462.7,732.8);

	this.timeline.addTween(cjs.Tween.get(this.chef).wait(1));

	// dj
	this.dj = new lib.dj();
	this.dj.name = "dj";
	this.dj.setTransform(340.6,760.4,0.791,0.791,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.dj).wait(1));

	// EVENTS_BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,255,0.667)").s().p("EgQ+ArYQhOAAg3hOQg3hOAAhvMAAAhOZQAAhuA3hPQANgTAPgOQAugtA7AAMAh8AAAQBOAAA4BOQANATAKAVQAgBCAABTMAAABOZQAABUggBBQgKAVgNATQg4BOhOAAg");
	this.shape_1.setTransform(143.125,391.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// STAGE
	this.text = new cjs.Text("התאם בין אירוע לאיש מקצוע", "25px 'Rubik Medium'", "#8D00CE");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 545;
	this.text.alpha = 0.79215686;
	this.text.parent = this;
	this.text.setTransform(782.4853,72.75,1.048,1);

	this.odot_btn = new lib.odot_btn();
	this.odot_btn.name = "odot_btn";
	this.odot_btn.setTransform(128.6,53.2,0.5811,0.5811);
	new cjs.ButtonHelper(this.odot_btn, 0, 1, 1);

	this.text_1 = new cjs.Text("?מי האיש שלך", "45px 'Rubik Medium'", "#4E00C9");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 58;
	this.text_1.lineWidth = 688;
	this.text_1.alpha = 0.79215686;
	this.text_1.parent = this;
	this.text_1.setTransform(782.5026,27.5613,0.8314,0.8314);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(25.85,28.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.odot_btn},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(655.6,381.3,644.1999999999999,670.9000000000001);
// library properties:
lib.properties = {
	id: 'F365D13824487D4586C124973F6F2A1A',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/Interactive Who_s your guy_atlas_1.png", id:"Interactive Who_s your guy_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F365D13824487D4586C124973F6F2A1A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;