let data = JSON.parse(localStorage.getItem("videoData"));
console.log('data:', data);

let videoDiv = document.getElementById("videoDetails")

let iframe= document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${data.videoId}`;
iframe.setAttribute("allowfullscreen",true);
iframe.style.height="84%";
iframe.style.width = "100%";

var title = document.createElement("h2");
title.textContent = data.snippet.title;
title.style.color="white";
title.style.paddingLeft="30px";

videoDiv.append(iframe,title);


var suggestVideo = data.data;

suggestVideo.forEach(({id:{videoId}}) => {
    var div = document.createElement("div");
    var iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    div.append(iframe);

    document.getElementById("recomendations").append(div);
});
