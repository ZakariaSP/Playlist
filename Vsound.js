class Vsound{
    constructor(){
        this.sound_file = document.getElementById("sound_file");
        this.sound_file.volume = 50/100;
        this.Vrange = document.getElementById("Vrange");
        this.Vrange.addEventListener("change", ()=>{
            this.sound_file.volume = this.Vrange.value/100;
        });
        this.sound_file.playbackRate = 1;
        this.Srange = document.getElementById("Srange");
        this.Srange.addEventListener("change", ()=>{
            this.sound_file.playbackRate = this.Srange.value/100;
        });
    }
}

onload = new Vsound();