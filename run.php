<?php
//date_default_timezone_set('Asian/Jakarta');
$i=0;
while(true){
	
 	echo 'count:'.$i;
 	$t1=time();
	$r=system('node test2.js');
	$t2=time();
	echo 'Start: '.date('d M Y H:i:s',$t1).' End: '.date('d M Y H:i:s',$t2).' time: '.$t2-$t1;
	echo 'response:';
	echo $r;
 	sleep(120);
 	$i++;

}


?>