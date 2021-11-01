// array integer
// fungsi return array dimana elemen pertama jumlah angka positif dan elemen kedua jumlah angka negatif

const jumlahArray = (array)=>{
    if(array.length !== 0){
        const pos = array.filter(val => val > 0);
        const neg = array.filter(val => val < 0);
        let totalP = 0;
        let totalN = 0;
        arr = [];

        pos.forEach((val)=>{
            totalP += val;
        })
        arr.push(totalP);
        neg.forEach((val)=>{
            totalN += val;
        })
        arr.push(totalN);

        return arr;
        // console.log(totalP);
        // console.log(totalN);
    }
    return null;
}

arr = [2, 3, 4, 1, 2, -2, -3, -5];
console.log(jumlahArray(arr));
document.write(jumlahArray(arr)); // [12],[-10]
