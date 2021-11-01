const isPrime = (num)=>{
    if(num < 2){
        return false; // angka 1 hilang
    }
    for(let i =2;i<num;i++){
        if(num % i===0){
            return false; // angka yg mod ada hasil 0 maka bukan prima
        }
    }
    return true
}

const printPrime = (kolom,baris)=>{
    const c = kolom;
    const b = baris;
    let num = 1; // variable yg masuk ke fungsi isPrime.
    for(let n = 1; n <= c;n++){
        for(let m = 1;m <= b;){
            if(isPrime(num)){
                document.write(num + ', ');
                m++;
            }
            num++; // num bertambah setiap iterasi baris.
        }
        document.write('<br>');
    }
}

// Cetak dilayar printPrime
printPrime(4,2);


