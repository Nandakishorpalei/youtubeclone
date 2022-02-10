document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Youtube navbar</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
        body{
            background-color:#181818;
            padding:0;
            margin:0;
        }
        #navContainer{
            height:80px;
            width:100%;
            background-color: greenyellow;
            background-color:#202020;
            border-bottom: 0.2px solid grey;
            margin-top:-30px;
            padding-top:5px;
            position:fixed;
        }
        #navbar{
            height:40px;
            margin-top:20px;
            display: flex;
        }
        #leftNav{
            margin-top:2px;
            display: flex;
            width:14%;
            margin-left:20px;
        }
        #nav-button{
            height:36px;
            width:36px;
        }
        #youtubeIcon{
            height:36px;
            width:36px;
            margin-left:24px;
        }
        #youtubeHeading{
            color:white;
            font-family: 'Bebas Neue', cursive;
            margin-top:5px;
            margin-left:5px;
        }
        #rightNav{
            display: flex;
            height:80px;
            width:100%;
            margin-left:230px;
        }
        #inputDiv{
            height:40px;
            width:55%;
            background-color: #313131;
        }
        #searchBar{
            height:100%;
            width:86%;
            background-color: #121212;
            border:0;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
            font-size:21px;
            color:white;
            padding-left:34px;
        }
        input::placeholder{
            font-size:21px;
        }
        #searchIcon{
            color:white;
            height:30px;
            width:30px;
            background-color: #313131;
            margin:5px 0 0 10px;
            position:absolute;
        }
        #mic{
            height:42px;
            width:42px;
            background-color: #121212;
            margin-left: 14px;
            text-align: center;
            border-radius: 50%;
        }
        #mic img{
            background-color: #121212;
            height:36px;
            width:36px;
            margin-top:4px;
            border-radius: 50%;
        }
        #menuDot{
            height:42px;
            width:42px;
            margin-left: 144px;
            text-align: center;
        }
        #menuDot img{
           
            height:42px;
            width:42px;
        }
        #kebabMenu{
            height:42px;
            width:42px;
            margin-left: 36px;
            text-align: center;
        }
        #kebabMenu img{
           
            height:42px;
            width:42px;
        }
       
    </style>
</head>
<body>

    <div id="navContainer">
    <div id="navbar">
        <div id="leftNav">
            <img id="nav-button" src="images/menuBar.png" alt="">
            <img id="youtubeIcon" src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="">
            <h2 id="youtubeHeading">YOUTUBE</h2>
        </div>
        <div id="rightNav"> 
            <div id="inputDiv">
                <input type="text" id="searchBar" placeholder="Search">
                <span><img id="searchIcon" src="images/searchIcon.png" alt=""></span>
            </div>
            <div id="mic">
                <img src="data:image/png;base64,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" alt="" >
            </div>
         
            <div id="menuDot">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHjT2gN-UIvpDjsq-2i3vbNAJ29TmirSv4JaFYGWv7iDBX6_ZcGh6FwbuYSheJA1VrX8&usqp=CAU" alt="">
            </div>

            <div id="kebabMenu">
            <img src="images/videoCamera.png" alt="">
        </div>
        <div id="kebabMenu">
            <img src="images/bellIcon.png" alt="">
        </div>

        </div>
        
    </div>
</div>

</body>
</html>
`);