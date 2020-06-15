// / *?:::::::::::::::random 5 nombres pour la facture      * /

        var num = Math.floor(Math.random() * 90 + 10);
        
        document.getElementById('random').innerHTML=num;


    /************** */
//    var digit= Math.floor(Math.random() * 1000000));
//    document.getElementById('dossier').innerHTML= digit;

//    console.log(digit);

//    console.log(
//     Math.floor(Math.random() * 1000000)
//     );


    $('#print').click(function(){
        $('.container-paper').printThis();
    })
