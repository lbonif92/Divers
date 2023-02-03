function whosPaying(names) {
    
        var length = names.length;
        var PositionScore = Math.random() * length;
        PositionScore = Math.floor(PositionScore);
        
        return(names[PositionScore] + " is going to buy lunch today!");
         
    }