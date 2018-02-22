/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */ 
 var first, second, third, f_p, s_p, th_p, mass = [], count = 0;
module.exports = function getLoveTrianglesCount(preferences = []) {
 
	for (var i = 0; i < preferences.length; i++){
  	
  	first = preferences[i];
  	f_p = i + 1;
	  	
		  	if (mass.indexOf(f_p) == -1 && first != f_p){

			  	second = preferences[first-1];
			  	s_p = first-1;

			  	
				  	if (mass.indexOf(s_p) == -1 && second != s_p){

					  	third = preferences[second-1];
					  	th_p = second - 1;

					  	if (mass.indexOf(th_p) == -1 && third != th_p){

						  	if (third == f_p) {
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
