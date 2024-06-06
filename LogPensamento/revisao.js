function resultado (n1, n2, n3, n4, n5) {
    media = (n1 + n2 + n3 + n4 + n5)/5

    if (media >= 7){
        console.log("Você foi aprovado! Sua média é", media)
    }
    else if (media < 7 && media < 5){
        console.log("Você esta em recuperação.")  
    }
    else {
        console.log("Você foi reprovado!!")
    }
}
    
resultado(5, 10, 8, 6, 7)




