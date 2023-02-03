function fibonacciGenerator (n) {

        var fibArray = [0, 1];
        var calcul;
        
        for(var i = 0; i < n ; i++){
            calcul = fibArray[i] + fibArray[i+1];
            fibArray.push(calcul)
        }
    

        console.log(fibArray);

    }
    
    