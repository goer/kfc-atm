//testdate.js

 var today=new Date();
 var yesterday=new Date();
 yesterday.setDate(today.getDate()-1);

 var d = yesterday.getDate();
 var m = yesterday.getMonth();

 console.log(d+'-'+(m+1))