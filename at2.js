function IdadeDias(idade){
    if (idade < 0)return "Erro!" 
    var dias = idade * 365
    return dias  
} 
console.log (IdadeDias(17))