var firebase = require('firebase')
// var database = firebase.database()
// var postsRef = database.ref('kanban')

// var config = {
//     apiKey: "AIzaSyDY5idbtw11RqyGmOwJ2ZBbuoXNSEIqU7o",
//     authDomain: "blog-9ae16.firebaseapp.com",
//     databaseURL: "https://blog-9ae16.firebaseio.com",
//     // projectId: "blog-9ae16",
//     storageBucket: ""
//     // messagingSenderId: "158136942127"
// };
//   firebase.initializeApp(config);


  function Add(){
      // var username = 'setiaanggraeni'
    // var database = firebase.database()
    // var postsRef = database.ref('blog/blogs')
    // // var usersRef = postsRef.child('-LIVk3CDQHoV45NSIz-I/blogs')
    // var blogs = []

    // var ref = firebase.database().ref('blog/'+'')

    // postsRef.push({
    //     title : "Project Wing dari Google",
    //     content :`Google kembali memperkenalkan teknologi canggih terbaru buatannya, yakni Project Wing yang akan dikomersialisasikan pada 2017.

    //     Project Wing adalah teknologi drone (pesawat tanpa awak) berupa robot berbentuk pesawat terbang yang dapat mengantarkan barang melalui layanan udara.
        
    //     Perusahaan multinasional tersebut telah bekerja sama dengan Federal Aviation Administration (FAA). Leader for Google Project Wing David Vos mengatakan, perusahaan ingin memiliki ruang terbang ketinggian rendah 14.500 kaki yang kebetulan dijuluki Class G dan telah disediakan untuk UAV agar Drone bisa terbang di atas kota.
        
    //     Cara kerja teknologi Project Wing seperti pesawat terbang namun dengan kemampuan layaknya sebuah helikopter. Bisa dilihat saat Project Wing melakukan take off dan landing, drone ini tidak bergerak layaknya pesawat terbang bersayap yang bergerak secara horizontal.
        
    //     Namun drone ini bergerak secara vertikal, setelah mencapai titik ketinggian yang telah ditentukan barulah pesawat anpa awak satu ini bergerak secara horizontal.`,
    //     comments:''
    // })


    // usersRef.push({
    //     title : "Fenomena Pergeseran Bahasa Indonesia di Era Global dan Implikasi Terhadap Pembelajaran",
    //     content :`1. Uraian Permasalahan

    //     Dalam era globalisasi seperti sekarang ini berbagai kemajuan teknologi informasi dan komunikasi, seharusnya bisa kita manfaatkan dalam pemertahanan bahasa Indonesia. Namun, akibat derasnya arus globalisasi batas negara menjadi kabur dan akhirnya hilang. Tekanan arus globalisasi yang melanda bangsa-bangsa yang sedang berkembang menimbulkan perubahan yang semakin cepat dan luas dalam berbagai wilayah kehidupan.
        
    //     Arus global berimbas pula pada penggunaan dan keberadaan bahasa Indonesia di masyarakat. Penggunaan bahasa di dunia maya, internet, memberi banyak perubahan bagi sturktur bahasa Indonesia. Masyarakat mulai kehilangan rasa bangga menggunakan bahasa nasional. Hal tersebut memunculkan istilah baru, yaitu ‘Indoglish’ kependekan dari ‘Indonesian-English’ untuk fenomena bahasa yang kian menghantam bahasa Indonesia. Sulit dipungkiri memang, bahasa asing kini telah menjamur penggunaannya. Mulai dari judul film, judul buku, judul lagu, sampai pemberian nama merk produk dalam negeri. Kita pun merasa lebih bangga jika lancar dalam berbicara bahasa asing.
        
    //     2. Implementasi Bahasa Indonesia di Era Global
        
    //     Cara yang paling efektif untuk mengatai agar eksistensi bahasa indonesia tidak sampai mengalami pergeseran adalah melalui jalur pendidikan formal, alangkah pentingnya bahasa indonesia selalu dijadikan pokok pelajaran yang wajib dari mulai tingkat SD,SMP,SMA hingga perguruan tinggi, pembelajaran bahasa Indonesia tidak lepas dari belajar membaca, menulis, menyimak, berbicara, dan kemampuan bersastra. Aktivitas membaca merupakan awal dari setiap pembelajaran bahasa. Dengan membaca, mahasiswa dilatih mengingat, memahami isi bacaan, meneliti kata-kata istilah dan memaknainya. Selain itu, mahasiswa juga akan menemukan informasi yang belum diketahuinya. Namun pasti tidak sedikit dari siswa ataupun pengajar yang hanya menganggap mata pelajaran tersebut hanyalah formalitas belaka setelah itu dilupakan begitu saja tanpa memikirkan nilai-nilai yang terkandung dan apa essensinya dari pembelajaran bahasa indonesia.. Tidak hanya sebatas itu, siswa juga memiliki keinginan kuat dan gairah untuk mempertahankan eksistensi bahasa Indonesia serta mengamalkannya dengan penggunaan bahasa indonesia yang baik dan di keseharian mereka.`,
    //     comments:''
    // })
    var config = {
        apiKey: "AIzaSyDY5idbtw11RqyGmOwJ2ZBbuoXNSEIqU7o",
        authDomain: "blog-9ae16.firebaseapp.com",
        databaseURL: "https://blog-9ae16.firebaseio.com",
        // projectId: "blog-9ae16",
        storageBucket: ""
        // messagingSenderId: "158136942127"
        };
      firebase.initializeApp(config);
      var payload = '-LIX74HsqABm5ndXisrp'
      var ref = firebase.database().ref('blog/blogs/'+payload)
      
      ref.on('value',function(snapshot){
        var oneBlog = snapshot.val()
        // let oneBlog = oneBlog
        console.log(oneBlog);
        
        // commit('oneBlog',payload)
      })
  }
  Add()