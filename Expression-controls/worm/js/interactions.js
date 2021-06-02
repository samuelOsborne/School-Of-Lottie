var ready = false;

var animationData = lottie.loadAnimation({
	container: document.getElementById('worm-container'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animations/worm-3-layers-PRETTY.json'
})

function reloadAnimation(newAnimationData) {
	animationData.destroy();
	animationData = undefined;
	animationData = lottie.loadAnimation({
		container: document.getElementById('worm-container'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		animationData: newAnimationData
	});
}

animationData.addEventListener('data_ready', () => {
	ready = true;
});

function callChangeStrokeWidth(strokeWidth) {
	changeStrokeWidthSlider(animationData.animationData, strokeWidth);
}

function changeStrokeWidthSlider(animationData, strokeWidth) {
	if (animationData !== null && ready) {
		animationData.layers[0].ef[0].ef[0].v.k = parseInt(strokeWidth);
		reloadAnimation(animationData);
	}
	return null;
}

function callChangeStrokeColor(strokeColorHex, layerId) {
	var strokeColorRGB = hexToRgbA(strokeColorHex);

	changeStrokeColor(animationData.animationData, strokeColorRGB, layerId);
}

function  changeStrokeColor(animationData, strokeColor, layerId) {
	var data = animationData.data;

	if (animationData !== null && ready) {
		if (layerId === 0)
			animationData.layers[0].ef[1].ef[0].v.k = strokeColor;
		else if (layerId === 1)
			animationData.layers[0].ef[2].ef[0].v.k = strokeColor;
		reloadAnimation(animationData);
	}
	return null;
}

function scaleRGB(n) {
	return Math.round((n / 255 ) * 100) / 100;
}

function hexToRgbA(hex) {
	var c;
	var list = [];

	hex = hex.trim();
	if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
		c= hex.substring(1).split('');
		if(c.length== 3){
			c= [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c= '0x' + c.join('');
		list.push(this.scaleRGB(c>>16&255));
		list.push(this.scaleRGB(c>>8&255));
		list.push(this.scaleRGB(c&255));
		list.push(1);
		return list;
	}
	return (this.hexToRgbA("#000000"))
}

function printStructure(animationData) {
	if ( typeof animationData == "object" ) {
		Object.entries(animationData).forEach(([key, value]) => {
			console.log("key: " + key + " | " + value);
			printStructure(value);
		});
	}
}