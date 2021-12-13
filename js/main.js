
	document.querySelector('#audio-btn').addEventListener("click",function(){

				var isplaying = document.querySelector('.audio');

				// isplaying.forEach(playing =>{

					if(isplaying.getAttribute('src')=="Beach Music Classics.mp3"){
				     	isplaying.setAttribute("src", " ");
					}
					else{
						isplaying.setAttribute("src", "Beach Music Classics.mp3");
					}
					// });

	});




    $('body').on('click touchstart', function () {
        const videoElement = document.querySelector('.audio');

        // videoElement.forEach(element =>{

            if (videoElement.playing) {
            }
            else {
                videoElement.play();
            }
    //    });
    });
