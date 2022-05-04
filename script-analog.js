		
		const hr=document.getElementById('hr');
		const mn=document.getElementById('mn');
		const sc=document.getElementById('sc');
	setInterval(()=>{   
		const day = new Date();

		//Analog Clock
		let hour = day.getHours();
        let second = day.getSeconds()*6; // 60sec = 360deg and 60min = 360deg
		let minute = day.getMinutes();
        hr.style.transform = `rotateZ(${hour>=12?(((hour-12)*30)+(minute*.5)):((hour*30)+(minute*.5))}deg)`;
		/*
		The hour rotate associate with minutes
		here 1 hour = 30 deg(12hr = 360deg )
        30deg for 60min/1hr
		so Hour need to rotate .5deg per minute  
		*/
		mn.style.transform = `rotateZ(${minute*6}deg)`;
		sc.style.transform = `rotateZ(${second}deg)`;
       }, 100);


    //Digital Clock


	 //Hello, If you find any mistake or want to contribute more feel free to contatact with me :)