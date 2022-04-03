// code your solution here

    

    function superbowlWin(record){
      
        let isWinningYear = (record) => record.result ==="W"
       
        const winningYearObject = record.find(isWinningYear)
        
        if (winningYearObject){
            return winningYearObject.year
        }

    }