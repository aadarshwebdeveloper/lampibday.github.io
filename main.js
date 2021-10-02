
    setInterval(function() {
      
    let dest = new Date("Oct 8, 2021 12:00:00").getTime();

      
      
      let d1 = new Date().getTime();


      let diff = dest - d1;


      let days = Math.floor(diff/ (1000
        *60 *60 *24));

      let hrs = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      var seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("day").innerHTML = `${days}`;

      document.getElementById("hour").innerHTML = `${hrs}`;

      document.getElementById("mins").innerHTML = `${minutes}`;

      document.getElementById("sec").innerHTML = `${seconds}`;
    }, 1000);





window.onload=function() {
  
  document.getElementById("loader").style.display = "none";

      //alert("ready");
      let wish_arr = ["Sada Khush Raho Tum Aaye Na Kabhee Koee Gam Jahaan Bhee Rakho Tum Kadam Tum Jo Kaho Vo Khavaahish Pooree Ho Tumhaare Janmadin Par Bas Yahee Dua Hai Hamaaree.","A very Happy Birthday to the sweetest kid in all  the world","Have a wonderful birthday, my wonderful brother"]


      let i = Math.floor(Math.random()*wish_arr.length);


      let wishes = document.getElementById('wishes');

      wishes.innerText = wish_arr[i];
      

    };


