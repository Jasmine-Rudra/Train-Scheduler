// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWKvSXwD0GKk3FZtJiN-QjQbwP8yhAVzk",
    authDomain: "train-scheduler-dfe8f.firebaseapp.com",
    databaseURL: "https://train-scheduler-dfe8f.firebaseio.com",
    projectId: "train-scheduler-dfe8f",
    storageBucket: "train-scheduler-dfe8f.appspot.com",
    messagingSenderId: "128086520644"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
    var database = firebase.database();

    $(document).ready(function(){

    database.ref().on("child_added",function(snapshot){
    	console.log(snapshot.val());
    	var val=snapshot.val();
    		console.log(val);
    		
    var table = document.getElementById("schedule");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    // var expires = moment(val.startDate).format('YYYY-MM-DD');
    // 	var current=moment(new Date());
    // 	var duration=moment.duration(current.diff(expires));
    // 	console.log(duration.asMonths(),expires,current);
    cell1.innerHTML = val.name;
    cell2.innerHTML = val.destination;
    cell3.innerHTML = val.startTime;
    cell4.innerHTML = 1;
    cell5.innerHTML = val.frequency;
    cell6.innerHTML = 2;

    });

  	$("#submit").click(function(event){
    	event.preventDefault();
    	var name=$("#name").val();
    	var destination=$("#destination").val();
    	var startTime=$("#startTime").val();
    	var frequency=$("#frequency").val();
    	
    	database.ref().push({
    		name: name,
    		destination: destination,
    		startTime: startTime,
    		frequency: frequency
    	});
    	console.log("yes done");
    	document.getElementById("trainform").reset();

    });

    });

