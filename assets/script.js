



const generate_btn = document.querySelector("#generate-btn");
const copy_btn = document.querySelector('#copy-btn');


const getData = () => {
    const nama = document.querySelector('#nama');
    const nama_fans = document.querySelector('#nama-fans');
    const status = document.querySelector('#status');
    const kekurangan = document.querySelector("#kekurangan");
    const kelebihan = document.querySelector("#kelebihan");

    return {
        nama : nama.value.toUpperCase(),
        nama_fans : nama_fans.value.toUpperCase(),
        status : status.value.toUpperCase(),
        kekurangan : kekurangan.value.toUpperCase(),
        kelebihan : kelebihan.value.toUpperCase(),
    };
};

generate_btn.addEventListener('click',event => {
    event.preventDefault();

    const data = getData();

    const text = `MAKSUD LO APA HINA2 ${data.nama} HAH!? GUE MESTI KASIH TAU YA ${data.nama} ITU ${data.status}! ${data.nama} ITU ${data.kelebihan}. ${data.kekurangan} LU GAADA APA2NYA DIBANDING SAMA ${data.nama}. ${data.nama_fans} BAKAL NGINCAR LO SAMPE ELO GABAKAL ADA DI BUMI INI! CAMKAN KATA KATA ${data.nama_fans}!!!! LU PIKIR LU BISA SEENAK NYA NGATAIN ${data.nama} BEGITU AJA? PIKIR ULANG NJING! PAS GUA NGETIK INI GUA UDAH HUBUNGIN DAN MEMANGGIL SELURUH ${data.nama_fans} DI SEKOJUR DUNIA DAN MUKA LU UDAH GW LACAK BUAT UU ITE! ${data.nama_fans} ADA DIMANA-MANA KAPAN AJA DAN BISA BULLY ELU DENGAN SEGALA CARA, COBA AJA LO GAK NGEHINA ${data.nama} ATAU LU BISA JAGA MULUT. LO NGGA BISA KAN? ${data.nama_fans} BAKAL HANCUR SAMA KAWAN2 LO YANG LAIN YANG HINA ${data.nama}, LU BAKAL MATI`;

    console.log(text);
    const text_el = document.querySelector('#text');
    text_el.innerText = text;

    

    /* 
    nama

     */
});

copy_btn.addEventListener('click',event => {
    const text = document.querySelector('#text');
    text.select();
    text.setSelectionRange(0,99999);
    document.execCommand("copy");

    document.querySelector('#copy-alert').innerText = '*tercopy*';
});