function canWin(n){
    if(n < 2){
        return false
    }

    let stoneTakes = [2, 3, 5]

    for(let i = 0; i < stoneTakes.length; i++){
        let stoneTake = stoneTakes[i]

        if(n - stoneTake >= 0){
            let recursiveCallResult = canWin(n - stoneTake)
            if (recursiveCallResult === false){
                return true
            }
        }
    }
    return false
}

for(let i = 0; i < 20; i++){
    console.log('With ' + i + ' stones: ' + canWin(i))
}
