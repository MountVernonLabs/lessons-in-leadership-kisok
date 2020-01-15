var bg_array = [];
bg_array[1] = "Boldly-stills/Boldly-still_01.jpg";
bg_array[2] = "Boldly-stills/Boldly-still_02.jpg";
bg_array[3] = "Boldly-stills/Boldly-still_03.jpg";
bg_array[4] = "Boldly-stills/Boldly-still_04.jpg";
bg_array[5] = "Boldly-stills/Boldly-still_05.jpg";
bg_array[6] = "Boldly-stills/Boldly-still_06.jpg";
bg_array[7] = "Boldly-stills/Boldly-still_07.jpg";
bg_array[8] = "Boldly-stills/Boldly-still_08.jpg";
bg_array[9] = "Boldly-stills/Boldly-still_09.jpg";
bg_array[10] = "Boldly-stills/Boldly-still_10.jpg";

bg_array[11] = "Change-stills/Change-still_01.jpg";
bg_array[12] = "Change-stills/Change-still_02.jpg";
bg_array[13] = "Change-stills/Change-still_03.jpg";
bg_array[14] = "Change-stills/Change-still_04.jpg";
bg_array[15] = "Change-stills/Change-still_05.jpg";
bg_array[16] = "Change-stills/Change-still_06.jpg";
bg_array[17] = "Change-stills/Change-still_07.jpg";
bg_array[18] = "Change-stills/Change-still_08.jpg";
bg_array[19] = "Change-stills/Change-still_09.jpg";

bg_array[20] = "Dream-stills/Dream-still_01.jpg";
bg_array[21] = "Dream-stills/Dream-still_02.jpg";
bg_array[22] = "Dream-stills/Dream-still_03.jpg";
bg_array[23] = "Dream-stills/Dream-still_04.jpg";
bg_array[24] = "Dream-stills/Dream-still_05.jpg";
bg_array[25] = "Dream-stills/Dream-still_06.jpg";
bg_array[26] = "Dream-stills/Dream-still_07.jpg";
bg_array[27] = "Dream-stills/Dream-still_08.jpg";

bg_array[28] = "Failure-stills/Failure-still_01.jpg";
bg_array[29] = "Failure-stills/Failure-still_02.jpg";
bg_array[30] = "Failure-stills/Failure-still_03.jpg";
bg_array[31] = "Failure-stills/Failure-still_04.jpg";
bg_array[32] = "Failure-stills/Failure-still_05.jpg";
bg_array[33] = "Failure-stills/Failure-still_06.jpg";
bg_array[34] = "Failure-stills/Failure-still_07.jpg";
bg_array[35] = "Failure-stills/Failure-still_08.jpg";
bg_array[36] = "Failure-stills/Failure-still_09.jpg";
bg_array[37] = "Failure-stills/Failure-still_10.jpg";
bg_array[38] = "Failure-stills/Failure-still_11.jpg";

bg_array[39] = "Integrity-stills/Integrity-still_01.jpg";
bg_array[40] = "Integrity-stills/Integrity-still_02.jpg";
bg_array[41] = "Integrity-stills/Integrity-still_03.jpg";
bg_array[42] = "Integrity-stills/Integrity-still_04.jpg";
bg_array[43] = "Integrity-stills/Integrity-still_05.jpg";
bg_array[44] = "Integrity-stills/Integrity-still_06.jpg";
bg_array[45] = "Integrity-stills/Integrity-still_07.jpg";

bg_array[46] = "Risks-stills/Risks-still_01.jpg";
bg_array[47] = "Risks-stills/Risks-still_02.jpg";
bg_array[48] = "Risks-stills/Risks-still_03.jpg";
bg_array[49] = "Risks-stills/Risks-still_04.jpg";
bg_array[50] = "Risks-stills/Risks-still_05.jpg";
bg_array[51] = "Risks-stills/Risks-still_06.jpg";

var title_array = [];
title_array[1] = "Boldly";
title_array[2] = "Boldly";
title_array[3] = "Boldly";
title_array[4] = "Boldly";
title_array[5] = "Boldly";
title_array[6] = "Boldly";
title_array[7] = "Boldly";
title_array[8] = "Boldly";
title_array[9] = "Boldly";
title_array[10] = "Boldly";
title_array[11] = "Change";
title_array[12] = "Change";
title_array[13] = "Change";
title_array[14] = "Change";
title_array[15] = "Change";
title_array[16] = "Change";
title_array[17] = "Change";
title_array[18] = "Change";
title_array[19] = "Change";
title_array[20] = "Dream";
title_array[21] = "Dream";
title_array[22] = "Dream";
title_array[23] = "Dream";
title_array[24] = "Dream";
title_array[25] = "Dream";
title_array[26] = "Dream";
title_array[27] = "Dream";
title_array[28] = "Failure";
title_array[29] = "Failure";
title_array[30] = "Failure";
title_array[31] = "Failure";
title_array[32] = "Failure";
title_array[33] = "Failure";
title_array[34] = "Failure";
title_array[35] = "Failure";
title_array[36] = "Failure";
title_array[37] = "Failure";
title_array[38] = "Failure";
title_array[39] = "Integrity";
title_array[40] = "Integrity";
title_array[41] = "Integrity";
title_array[42] = "Integrity";
title_array[43] = "Integrity";
title_array[44] = "Integrity";
title_array[45] = "Integrity";
title_array[46] = "Risks";
title_array[47] = "Risks";
title_array[48] = "Risks";
title_array[49] = "Risks";
title_array[50] = "Risks";
title_array[51] = "Risks";


var count = 1;
var lastactive = "Boldly";

function changeImage() {
	document.getElementById("background_img").src = 'img/stills/'+bg_array[count];
	document.getElementById("title_img").src = 'img/title-'+title_array[count]+'.png';

	setActive(title_array[count]);
	setTimeout(function(){
		document.getElementById("background_img").className = "transition_on";
	}, 800);
	setTimeout(function(){
    	document.getElementById("background_img").className = "transition_off";
	}, 6000);
	count = count + 1;
	if (count > 51){
		count = 1;
	}
}

function playVideo(name){
	document.getElementById("video").src = 'video/'+name+'.mp4';
	document.getElementById("caption").src = 'caption/'+name+'.vtt';
	document.getElementById('video_player').style.display = 'block';
	document.getElementById('video').play();
}

function closeVideo() {
	document.getElementById('video').pause();
	document.getElementById('video_player').style.display = 'none';
	document.getElementById("video").src = '';
	document.getElementById("caption").src = '';
}

function setActive(name) {
	document.getElementById("video-Boldly").className = "";
	document.getElementById("video-Change").className = "";
	document.getElementById("video-Dream").className = "";
	document.getElementById("video-Failure").className = "";
	document.getElementById("video-Integrity").className = "";
	document.getElementById("video-Risks").className = "";
	document.getElementById("video-"+name).className = "highlight_video";
	document.getElementById("video-Boldly").src = "img/stills/Boldly-stills/Boldly-still_01.jpg";
	document.getElementById("video-Change").src = "img/stills/Change-stills/Change-still_01.jpg";
	document.getElementById("video-Dream").src = "img/stills/Dream-stills/Dream-still_01.jpg";
	document.getElementById("video-Failure").src = "img/stills/Failure-stills/Failure-still_01.jpg";
	document.getElementById("video-Integrity").src = "img/stills/Integrity-stills/Integrity-still_01.jpg";
	document.getElementById("video-Risks").src = "img/stills/Risks-stills/Risks-still_01.jpg";
	document.getElementById("video-"+name).src = "img/stills/"+name+"-stills/"+name+"-still_01_play.jpg";
	if (lastactive != name && name != "Boldly") {
		scrollDiv('r', 420);
	} 
	if (lastactive == "Risks" && name == "Boldly"){
		scrollDiv('l', 3000);
	}
	lastactive = name;
}

function scrollDiv(dir, px) {
    var scroller = document.getElementById('carosel');
    if (dir == 'l') {
        scroller.scrollLeft -= px;
    }
    else if (dir == 'r') {
        scroller.scrollLeft += px;
    }
}

setInterval(changeImage, 7000);