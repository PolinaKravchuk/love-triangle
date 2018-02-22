/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */ 
 var first, second, third, f_p, s_p, th_p, mass = [], count = 0 , ts, tth, tf; 
module.exports = function getLoveTrianglesCount(preferences = []) {
 
	for (var i = 0; i < preferences.length; i++){

  	f_p = i;
  	first = preferences[f_p];
  	tf = f_p + 1;
	  	
		  	if (mass.indexOf(f_p) == -1 && first != tf){

			  	s_p = first-1;
			  	second = preferences[s_p];
			  	ts =s_p + 1;
			  	
				  	if (mass.indexOf(s_p) == -1 && second != ts){

					  	
					  	th_p = second - 1;
					  	third = preferences[th_p];
					  	tth =  th_p+1;

					  	if (mass.indexOf(th_p) == -1 && third != tth){

						  	if (third == tf) {
						  		count++;
						  		mass.push(f_p);
						  		mass.push(s_p);
						  		mass.push(th_p);
						  	}
					  	}
				  	}
						 	 
		 	}
    }
    return count;
};
