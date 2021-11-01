//pascal function dimana ketika masukan 0 => 1; 1 => 2
const pascalFunction = (val)=>{
    const constant = 1;
    for(i=0;i<val;i++){
        for(j=0;j<=i;j++){
            document.write(constant);
        }
        document.write('<br>')
    }
}

pascalFunction(5)