exports.getDay=function (){
    var today = new Date();

    var option ={
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        
    }
    
    var day = today.toLocaleDateString("en-US", option);
    return day;
}

exports.getDate=function (){
    var today = new Date();

    var option ={
        weekday: 'long' 
    }
    
    var day = today.toLocaleDateString("en-US", option);
    return day;
}


