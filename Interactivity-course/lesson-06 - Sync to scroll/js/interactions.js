LottieInteractivity.create({
	mode:"scroll",
	player:'#lottie-lighthouse',
	actions: [
		{
			visibility:[0,1],
			type: "seek",
			frames: [0, 300],
		},
	]
});