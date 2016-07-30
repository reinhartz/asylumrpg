function main () {
    
    var limit = 6000000;
    var i = 0;
    var sum = 0;
    var mean = [0, 0, 0, 0, 0];
    
    function d10 () {
        return Math.floor(10*Math.random() + 1);
    }
    
    function explodeX (floor) {
        var result = 0
        result = d10();
        var total = 0;
        total += result;
        if (result <= floor) {
            total += explodeX(floor);
        }
        return total;
    }
    
    while (i < limit) {
        sum += explodeX(3);
        i ++;
    }
    mean[0] = sum/limit;
    alert("Reliability 3 averages "  + mean[0]);
    
    i = 0;
    sum = 0;
    
    while (i < limit) {
        sum += explodeX(4);
        i ++;
    }
    mean[1] = sum/limit;
    alert("Reliability 4 averages " + mean[1]);
}