const weekDay = (day, K) => {

    let week = new Map()
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    for(let i=0; i<days.length; i++){
        week.set(i+1, days[i])
    }
    
    console.log(week)
    let N = 0 
    for(let [key,value] of week){
        if(week.get(key) == day){
            N = (key + K) % 7
            if( N == 0) N = key + 1
        }
    }
    
    console.log(week.get(N))



}

//weekDay("Wednesday", 8)
//weekDay("Monday", 7)
weekDay("Sunday", 5)