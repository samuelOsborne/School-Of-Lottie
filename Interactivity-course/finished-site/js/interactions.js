LottieInteractivity.create({
	mode:"scroll",
	player:'#firstLottie',
	actions: [{
		visibility:[0,1],
		type: "seek",
		frames: [0, 300],
	},]
});

LottieInteractivity.create({
	mode:"cursor",
	player: "#blueprint",
	actions: [
		{
			position: { x: [0, 1], y: [0, 1] },
			type: "seek",
			frames: [0, 42]
		}
	]
});