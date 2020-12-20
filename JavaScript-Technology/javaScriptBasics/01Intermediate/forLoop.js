const days = ['mon','tue','wed', 'thr','fri','sat']

//for loop
for(let index = days.length; index < days.length; index++){
    console.log(days[index])
}

//for each loop
days.forEach(function(day, index){
    console.log(`start with ${index + 1} -- ${days}`)
})

