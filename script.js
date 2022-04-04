window.addEventListener('load', () => {
    const btn = document.querySelector("#btn");
    const img = document.querySelector(".img-con");
    const s = document.querySelector(".stop");
    const stopBtn = document.querySelector("#stopbtn");
    var audio = document.querySelector('#audio');
    var count = 0;

    // alert
    const q = prompt("Do you want to enter?\n(type \"yes\" if you want  \"no\" if you don't)");

    
    if (q.toLowerCase() === 'yes') {
        // typing script
        var typed = new Typed(".typing", {
            strings: ["Ano nga ba sasabihin ko?", "hahahaha joke lang", "pero ito na talaga kalog🤣", "Gusto ko lang sana sabihin kalog😊", "ikaw ang pinaka maganda sa lahat😊", "kahit kalog ka maganda ka🥰","at kahit ano ka pa mahal kita kalog💝", "ikaw ang dahilan bakit palagi akong lumalaban", "lumalaban sa araw araw", "kahit hindi kita laging kasama", "o kausap", "ikaw lang ang laging nasa isip ko💖", "ikaw ang babaeng kumukompleto sa bawat araw ko💗", "ikaw ang mundo ko🥰", "ikaw ang nagpapasaya sa mga araw ko", "mahal na mahal kita kalog💘", "wag ka sanang mag sawa sakin😊", "kahit sana anong mangyare wag kang sumuko💪🏾", "laban lang tayo🤗", "magkasama natin labanan lahat ng problema na darating🤗", "mga bawat pagsubok na darating", "walang iwanan🤗", "malalampsan natin lahat", "ng mga pagsubok na yan💓.", "Darating din ang panahon", "na lagi na tayong magkasama",  "sa ngayon ay tiis muna tayo", "na minsan lang tayo magkita😊", "kahit naman minsan lang tayong magkita", "alam ko naman naiintindahan mo yun😊", "lagi mo lang basta tandaan", "na MAHAL na MAHAL kita kalog❤️", "wala man tayo ma matopic minsan kalog", "ay hindi pala minsan🤣", "Parang madalas pala kalog😂","Pero kahit na ganun", "ok lang yun kalog", "ang mahalaga alam natin na", "mahal natin ang isat isa😍", "may tiwala din tayo sa isat isa😍", "at hinding hindi ko sisirain ang tiwala ng binigay mo sakin💝", "kahit anong mangyare", "ikaw at ikaw pa din ang pipiliin ko🤗", "kaya naman dito ka lang sa piling ko🥰", "dito ka lang🤗", "ay nasa kanta pala yun", "pero yun nga kalog", "pangako sayong sayo lang ako❤️‍🩹", "dito lang ako lagi para sayo🤗", "kung may mga problema ka", "magsabi ka lang kalog", "kasi problema mo", "ay problema ko na din🤗", "GIRLFRIEND kita eh🥰", "at soon WIFE na💝💝", "kaya kalog", "wag ka na mahiya sakin😊", "alam kong nahihiya ka pa din😂", "pero alam ko din naman na", "hindi na tulad ng dati", "kasi nagagawa mo na", "akong awayin ng walang dahilan🤣", "pero ok lang yung kalog haha", "naiintindihan ko naman yun 😊", "at walang magbabago sa pagmamahal ko sayo💓", "balik tayo sa hiya mo🤣", "alam ko balang araw", "mawawala na yan ng tuluyan😂", "pag dumating yun", "alam kong mas kalog ka pa nun hahha", "pero tulad ng sabi ko di magbabago yung", "yung pagmamahal ko sayo💞", "sayo lang ako💖", "wag kang susuko ha", "wag ka din sana magbago💟", "I Love You So Much Kalog💝", "and", "I Miss You So Much Kalog ko🥰💝😍❤️‍🩹"],
            typeSpeed: 45,
            backSpeed: 30, 
            startDelay: 17000,
            loop: true
        });
        
        var typed = new Typed(".typing2", {
            strings: ["Hello Kalog", "May gusto lang", "Akong Sabihin", "pindutin mo yung button"],
            typeSpeed: 100,
            backSpeed: 40,
            startDelay: 1000,
            loop: false
        });

        // image
        let kalog = document.querySelector("#kalog");
        let images = ['kalog/image1.jpeg', 'kalog/image2.jpeg', 'kalog/image3.jpeg', 'kalog/image4.jpeg', 'kalog/image5.jpeg', 'kalog/image6.jpeg', 'kalog/image7.jpeg', 'kalog/image8.jpeg', 'kalog/image9.jpeg', 'kalog/image10.jpeg', 'kalog/image11.jpeg', 'kalog/image12.jpeg','kalog/image13.jpeg', 'kalog/image14.jpeg','kalog/image15.jpeg', 'kalog/image16.jpeg', 'kalog/image17.jpeg', 'kalog/image18.jpeg', 'kalog/image19.jpeg','kalog/image20.jpeg', 'kalog/image21.jpeg', 'kalog/image22.jpeg', 'kalog/image23.jpeg'];
        let cover = document.querySelector('#cv');
        

        // button show
        const myTimeout = setTimeout(showbtn, 15000);
        
        function showbtn() {
            if (btn.classList.contains("hide")) {
                btn.classList.add("show");
                btn.classList.remove("hide");
            } else{
                btn.classList.add("hide");
                btn.classList.remove("show");
            }
        }
        
        
        const hiding = {
            getPicShow(){
                if(btn.innerHTML === "Show Message &#9658;"){
                    btn.innerHTML = "Hide Message &#9208;";
                } else{
                    btn.innerHTML = "Show Message &#9658;";
                }
        
                if (img.classList.contains("hide")) {
                    img.classList.add("show");
                    img.classList.remove("hide");
                } else{
                    img.classList.add("hide");
                    img.classList.remove("show");
                }
                
            },
            getBtnShow(){
                if (s.classList.contains("hide")) {
                    s.classList.add("show");
                    s.classList.remove("hide");
                } else{
                    s.classList.add("hide");
                    s.classList.remove("show");
                }
            },
            getAudio(){
                if(count == 0){
                    count = 1;
                    audio.play();
                    btn.innerHTML = "Hide Message &#9208;";
                } else {
                    count = 0;
                    audio.pause();
                    btn.innerHTML = "Show Message &#9658;";
                }
            }
        }
        
        
        // 1st button
        btn.addEventListener('click', () => {
        
            hiding.getPicShow();
            hiding.getBtnShow();
            hiding.getAudio();
            
            setInterval(() => {
                let random = Math.floor(Math.random() * 23);
                let url = images[random];

                if (kalog.src == undefined) {
                    kalog.src = "kalog/image1.jpeg";
                } else {
                    kalog.src = url;
                    cover.style.backgroundImage = `url(${url})`;
                }
            }, 3000);

            
        
        });
        
        // stop button for audio
        stopBtn.addEventListener('click', () => {
            hiding.getAudio();
            audio.pause();
            audio.currentTime = 0;
            hiding.getPicShow();
            hiding.getBtnShow();
            btn.innerHTML = "Show Message &#9658;";
        });
    } else {
        document.querySelector(".msg").innerHTML = "<h4>Unfortunately, this page was not able to be loaded,<br/>still Thank you for taking the time to visit my simple webpage.</h4>";
        return false;
    }
});