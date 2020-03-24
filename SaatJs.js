var daillines = document.getElementsByClassName('diallines');
var clockE1 = document.getElementsByClassName('clock')[0];

//document.getElementsByClassName('dot')[0].style.backgroundColor = "blue";  Javascript css özelliği bu şekilde kullanılır.


$('.dot').css("background-color", "blue"); // JQUERY kullanarak değiştirme



for (var i = 0; i < 60; i++) {
    clockE1.innerHTML += "<div class='diallines'></div>"  // Her bir dakikaya bu divi işler(60 adet)


    /*Her dakika başına 6 derece rotate işlemi uygulanır. Yani 5 dakika 30 derece yapar */
    daillines[i].style.transform = "rotate(" + 6 * i + "deg)"

}

function Clock() {
    var weekday = new Array(7),
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        mouth = d.getMonth() + 1,           //İndex değeri 0 dan başladığı için 1 arttırılır.
        year = d.getFullYear(),


        /*
            Rotate işlemi derece değeriyle çalışır. Burada hesaplanan sonuç 360'a bölünür ve derece hesaplanır.
                           
       
           Saat 360 derece olduğu için her saat başı 30 derecedir. Dolayısıyla bilgisayardan aldığımız değer 30 ile çarpılır.
           (saati 00:00 olarak ele alırsak 0*30 + 0 * (360/720) değeri 0 çıkar. Dolayısıyla derece değerimiz 0'dır.)
 
 
           hDeg de dakika değerini ele almamızın sebebi ise örneğim 00:30 durumda saatin 00:00 ile 01:00 ortasında olmasıdır.
           yani dakika değeri 15 derece olarak eklenir
           (saati 00:30 olarak ele alırsak 0*30 + 30* (360/720) hesabından 15 değeri çıkar ve 15 derecelik rotate işlemi uygulanır.)
       
       */

        hDeg = h * 30 + m * (360 / 720),
        mDeg = m * 6 + s * (360 / 3600),
        sDeg = s * 6,

        hE1 = document.querySelector('.hour-hand'), //class ı hour-hand olan div tag'inin tamamını seçer
        mE1 = document.querySelector('.minute-hand'),
        sE1 = document.querySelector('.second-hand'),

        dateE1 = document.querySelector('.date'),
        dayE1 = document.querySelector('.day');


    weekday[0] = "Pazartesi";
    weekday[1] = "Salı";
    weekday[2] = "Çarşamba";
    weekday[3] = "Perşembe";
    weekday[4] = "Cuma";
    weekday[5] = "Cumartesi";
    weekday[6] = "Pazar";


    var day = weekday[d.getDay() - 1]; //

    hE1.style.transform = "rotate(" + hDeg + "deg)"; //seçilen div tag'inin tamamına rotate işlemi uygularız.
    mE1.style.transform = "rotate(" + mDeg + "deg)";
    sE1.style.transform = "rotate(" + sDeg + "deg)";
    dateE1.innerHTML = date + "/" + mouth + "/" + year;
    dayE1.innerHTML = day;

}

setInterval("Clock()", 100);

