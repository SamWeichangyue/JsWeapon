 calcCpu() {
     var t = Date.now()
     this.timerID = setInterval(function() { 
         var result = Date.now() - t
         t = Date.now()
         console.log(result)
     }, 500)
 }