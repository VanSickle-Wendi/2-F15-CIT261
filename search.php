
<?php 

$input=$_GET['str'];//getting 'str' from form

//itemes to be searched..stored in arrays
$product[0]="test3";
$product[1]="indiana jones";
$product[2]="rags";
$product[3]="clothes";
$product[4]="freebies";
$product[5]="computers";

$value=false;//$value stores whether there is a match for the input or not..currently it's set to false

for($i=0;$i<6;$i++){  //this loop matches the input and products one by one
	
	for($x=0;$x<20;$x++){//it checks alphaets of the words one by one...
		//If it finds a matching alphabet,the following executes
  		if($input==substr($product[$i],$x,strlen($input)) && !empty($input))
		 {
			 //Displays the product name and makes the alphabet(s) bold that was searched...
			 //This is done in three parts
			 //First-displays the text found before the matched alphabets
			 //Second-displays the  matched alphabets and makes them bold
			 //Third-displays the text found after the matched alphabets
  			echo substr($product[$i],0,$x)."<b style='font-size:18px;'>".substr($product[$i],$x,strlen($input))."</b>".
			substr($product[$i],$x+strlen($input))."</br>";
			$value=true;//As the loop finds a match, the value of this variable is set true
 		 }
	}
}


//if no results found and the input is not empty
if(!$value && !empty($input)){echo"This movie is not in your Movie Library: ".$input;}
?>
