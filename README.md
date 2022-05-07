# Securing Keys Event

Katakanlah misalkan message brokers yang kita punya itu kena hack dan bisa akses oleh orang yang tidak di kenal (mantan karyawan), mereka tau account username dan password tetapi mereka tidak bisa mengakses dahsboardnya karena port defaultnya sudah diganti dan parahnya si admin lupa ganti username dan password sebelumnya, jadi ketika si orang yang tidak dikenal itu membuat sebuah script untuk mengakses publisher dan si orang yang tidak di kenal tau nama event namenya apa, contoh misalkan `payment:midtrans`, maka si orang tidak di kenal tersebut bisa mengakses setiap transaksi yang masuk melalui message brokers tersebut, tetapi jika event namenya kita berikan secretkey sebagai prefix contoh misalkan `payment:midtrans:${process.env.RABBITMQ_SECRET}`, maka si orang yang tidak di kenal tersebut tidak dapat mengakses event brokers tersebut, dikarenakan si orang tersebut tidak mempunyai secretkey nya, jadi bisa dibilang menjadi sedikit lebih amanlah dari pada tidak menggunakan secretkey sebagai prefixnya.

## Image One

Berikut adalah tampilan event name di berikan secret key sebagai prefixnya.

<img src="/images/1.png">


## Image Two

Berikut adalah tampilan ketika kita ingin mengakses subsciber tersebut tetapi event name yang di panggil tidaklah sesuai, maka data tidak akan pernah di subscribe.

<img src="/images/4.png">
<img src="/images/2.png">


## Image Three

Berikut adalah tampilan ketika kita ingin mengakses subsciber tersebut tetapi event name yang di panggil sesuai, maka data akan berhasil di subscriber.

<img src="/images/5.png">
<img src="/images/6.png">