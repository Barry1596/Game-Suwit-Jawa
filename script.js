var startGame = confirm('Selamat datang di permainan game suit jawa, apakah anda ingin memulai permainan ? ');

while (startGame) {
    //define suit user
    var suitUser = prompt('Pilih antara Batu, Gunting, Kertas : ');

    //define suit komputer
    var randomNumber = Math.random();
    var suitKomputer = '';

    if (randomNumber <= 0.34) {
        suitKomputer = 'Batu';
    } else if (randomNumber > 0.34 && randomNumber <= 0.67) {
        suitKomputer = 'Gunting';
    } else if (randomNumber > 0.67) {
        suitKomputer = 'Kertas';
    }

    console.log(suitKomputer);

    //define status (menang kalah atau seri)
    var status = '';

    if (suitUser === 'Batu') {
        (suitKomputer === 'Gunting') ? status = 'MENANG': (suitKomputer === suitUser) ? status = 'SERI' : status = 'KALAH';
        alert(`status game : ${status} komputer memilih ${suitKomputer}`);
    } else if (suitUser === 'Gunting') {
        (suitKomputer === 'Kertas') ? status = 'MENANG': (suitKomputer === suitUser) ? status = 'SERI' : status = 'KALAH';
        alert(`status game : ${status} komputer memilih ${suitKomputer}`);
    } else if (suitUser === 'Kertas') {
        (suitKomputer === 'Batu') ? status = 'MENANG': (suitKomputer === suitUser) ? status = 'SERI' : status = 'KALAH';
        alert(`status game : ${status} komputer memilih ${suitKomputer}`);
    } else {
        status = 'Masukkan Kata (Gunting / Batu / Kertas) agar permainan berjalan dengan benar !';
        alert(`status game : ${status}`);
    }



    startGame = confirm('Ingin bermain lagi ? ');

}