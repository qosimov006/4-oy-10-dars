









 //1-misol
 //Savol :   sifatida qabul qiladigan va shu satrning teskari versiyasini qaytaradigan funksiya yozing.
 //Misol uchun, agar "salom" bo'lsa, chiqish "olleh" bo'lishi kerak.
 //Javob
 /*
 function teskariSatr(arr) {
         return arr.split('').reverse().join('');
     }
     const satr = "hello";
     console.log(teskariSatr(satr));
     */
    
//2-misol
//Savol : Satrni  kiritish  sifatida qabul qiluvchi  va qatoridagi  unlilarni sonini (a, e, o, u) qaytaruvchi funksiya yozing.
//Katta harflarni e'tibor bermang va katta va kichik unlilarni korib chiqing.
//Javob
/*
function unliSon(arr) {
         const unlilar = arr.match(/[aeiouf]/gi);
         return unlilar ? unlilar.length : 0;
     }
     const testSatr = "salomeiomfr";
     console.log(unliSon(testSatr));

     */


//3-misol
//Savol : Berilgan satr palindrom yoki yo'qligini tekshiradigan funktsiyani yozing. Palindrom - bu oldinga qarab orqaga qarab
//o'qiladigan so'z, ibora  yoki belgilar ketma-ketligi. Masalan, "radar" - palindrom.

//Javob
/*
function palindromTekshir(satr) {
         const res = satr.split('').reverse().join(''); 
         return satr === res; 
       }
       const testSatr1 = "Kamera";
       const testSatr2 = "salom";
       console.log(palindromTekshir(testSatr1)); 
       console.log(palindromTekshir(testSatr2));
       */





//4-misol
//Savol : Gapni (satrni) kiritish sifatida qabul qiladigan va shu gapdagi eng uzun so'zni
//qaytaradigan funksiya yozing. Agar maksimal uzunligi bir xil bo'lgan bir necha so'z 
//bo'lsabirinchisini qaytaring.
//Tinch belgilariga e'tibor bermang va so'zni bo'sh joy bo'lmagan belgilar ketma-ketligi deb hisoblanadi.

//Javob

/*
function engUzunSoz(arr) {
         const sozlar = arr.split(' '); 
         let engUzun = sozlar[0]; 
      
         for (let i = 1; i < sozlar.length; i++) {
           if (sozlar[i].length > engUzun.length) {
             engUzun = sozlar[i]; 
           }
         }
         return engUzun;
       }
       const test = "Mirjalol bugun kun yahshi ish qildi ";
       console.log(engUzunSoz(test))
*/



//5-misol
//Savol : Gapni (satrni) kiritish sifatida qabul qiladigan va har bir so'zning biribchi harfi
//bosh harfi bilan  yangi gaoni qaytaradigan funktsiyani yozing.
//Misol uchun, agar kirish "salom dunyo" bo'lsa chiqish "Salom dunyo" bo'lishi kerak.


//Javob

/*
function HarfKatta(arr) {
         const res = arr.split(' '); 
        
         for (let i = 0; i < res.length; i++) {
           res[i] = res[i][0].toUpperCase() + res[i].substring(1); 
         }
      
         return res.join(' '); 
       }
        const test = "salom dunyo";
       console.log(HarfKatta(test));
       */






 