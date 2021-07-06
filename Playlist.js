    var width = screen.width;
    var height = screen.height;
	
 if(width<=500){
 
     document.getElementById("Content").style.width = width+"px";
     document.getElementById("Content").style.height = height+"px";

    }
   
       var sound_file = document.getElementById("sound_file");
        var sound_title = document.getElementById("text");
        var paly = document.getElementById("play");
        var isPlayed;
         play.onclick = ()=>{
            this.play_pause();
        }
    
       var radio = [];
       radio[0] = "Arab-zik";
       radio[1] = "Oriental";
       radio[2] = "Fx-Arab";
       radio[3] = "All-Orient";
       radio[4] = "BarBlues";
       radio[5] = "Classica";
       radio[6] = "RapFR";
       radio[7] = "RapUS";
       radio[8] = "Floor";
       radio[9] = "Chillout";
       radio[10] = "Zen";
       
       var source = [];
       source[0] = "http://streaming.radionomy.com/JamendoLounge?r=051254?retry=0";
       source[1] = "http://oriental-high.rautemusik.fm";
       source[2] = "http://icecast.omroep.nl/funx-arab-bb-mp3?_=1423232790";
       source[3] = "https://allzic33.ice.infomaniak.ch/allzic33.mp3?s=1461414498";
       source[4] = "https://streamingv2.shoutcast.com/JamendoLounge";
       source[5] = "https://classicfm.ice.infomaniak.ch/classic-fm.mp3?tok=25951806j4h%2FQ%2FizXv6QCrSV8bu1lUv3dBdmiC5KR19JAAAAAAAAAAAAAAAAAA%3D";
       source[6] = "https://allzic02.ice.infomaniak.ch/allzic02.mp3?auth=5303998589-3512-4bq3e57m-cf15c748445c770a73e741d738a2a1bd";
       source[7] = "https://allzic01.ice.infomaniak.ch/allzic01.mp3?_=1453998995";
       source[8] = "https://allzic07.ice.infomaniak.ch/allzic07.mp3?s=1442280473";
       source[9] = "https://allzic53.ice.infomaniak.ch/allzic53.mp3?token=5c4b317972ba2f15c2a7b21d92f07e6d%2F01b45091";
       source[10] = "https://allzic20.ice.infomaniak.ch/allzic20.mp3?token=c75a4f8d13ea441296d4771ea54619d4%2Fbfe955a4"; 

     var server = 0;
    getsource();

    document.getElementById("next").addEventListener("click", ()=>{
        if(server<source.length-1){
            ++server;
            isPlayed=false;
        }else{
            server=0;
            isPlayed=false;
        }
        localStorage.setItem("fix-server",server);
        getsource();
    })

    document.getElementById("back").addEventListener("click", ()=>{
        if(server>0){
            --server;
            isPlayed=false;
        }else{
            server=source.length-1;
            isPlayed=false;
        }
        localStorage.setItem("fix-server",server);
        getsource();
    })

    function getsource(){
        if(localStorage.getItem("fix-server")!=null){
            server = localStorage.getItem("fix-server");
        }
        sound_file.src = source[server]; 
        sound_title.innerHTML = radio[server]; 
        play_pause();
    } 

  function  play_pause(){
        if(isPlayed == false){
            play.src="pause.png";  
          sound_file.play(); 
          isPlayed=true;
        }else{
            play.src="play.png";
            sound_file.pause();
            isPlayed=false; 
        }
       }
    


