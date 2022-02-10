let api = `AIzaSyCsLqW0VHLI3J20UfcRWH1vcz_lYcP2oaE`;

const searchVideos = async () =>{
try{


 let name = document.getElementById("searchBar").value || "trendingsongs";

let url = `https://youtube.googleapis.com/youtube/v3/search?q=${name}&key=${api}&type=video&maxResults=20&part=snippet`;

let res= await fetch(url);
let data = await res.json();
console.log(data);
let arrayVideo = data.items;

displayData(arrayVideo);
}
catch(error){
    console.log('error:', error)
    
}  
finally{
    console.log()
}
}

searchVideos();

document.getElementById("searchIcon").addEventListener("click",searchVideos);

const displayData = async (data) =>{

// const data = await searchVideos();

//   item.id.videoId == {id:{ videoId }}  is similar to below destructuring


document.getElementById("container").innerHTML=null;
data.forEach(({snippet,id:{videoId}}) => {
// console.log('snippet:', snippet)

var titleDiv = document.createElement("div");
titleDiv.setAttribute("id","titleDiv");
var title = document.createElement("h4");
title.textContent=snippet.title;
var image = document.createElement("img");
image.src = snippet.thumbnails.medium.url;



var thumbnail = document.createElement("div");
titleDiv.append(title);
thumbnail.append(image,titleDiv);

let video_data = {
    data,snippet,videoId
}

thumbnail.onclick = ()=>{
    showVideo(video_data);
}

document.getElementById("container").append(thumbnail);


});
}


// const showVideo = (video_data) =>{

// let iframe= document.createElement("iframe");
// iframe.src = `https://www.youtube.com/embed/${video_data.videoId}`;
// iframe.setAttribute("allowfullscreen",true);
// var close = document.createElement("img");
// close.src = "https://www.nicepng.com/png/detail/47-470104_high-contrast-dialog-close-close-button-png-icon.png";
// close.setAttribute("id","close");

// iframe.setAttribute("allowfullscreen",true);
// document.getElementById("showVideo").innerHTML=null;
// document.getElementById("showVideo").append(close,iframe);
// document.getElementById("showVideo").style.display = "inline-block";
// document.getElementById("container").style.opacity ="0.0";
// document.getElementById("container").style.pointerEvents="none";

// document.getElementById("close").addEventListener("click",function(){
//     document.getElementById("showVideo").style.display = "none"; 
//     document.getElementById("container").style.opacity ="1";
// document.getElementById("container").style.pointerEvents="auto";
// })
// }




const showVideo = (video_data) =>{

localStorage.setItem("videoData",JSON.stringify(video_data));

    window.open("video.html");
}




