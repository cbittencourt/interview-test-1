const inputs = ["a","b","c","d","e"],
      map = {"a":"e","e":"c","c":"d","d":"e","b":"b"};

function answerQuestions(){
	//for each input, find the key in map and feed value as key in to map
	let output = [], dupeCount = {}, dupe = "", dupeindex;

	for (let input of inputs){
		
		output.push(input);
		
		while (true){
			input = map[input];
			if (output.indexOf(input)>0)
			{
				output.push(input);
				break;
			}
			else
			{
				output.push(input);
			}
		}
		
		console.log("output:", output.toString());
		break;
	}
	
	for (let i=0; i<output.length; i++)//(let item of output)
	{
		let item = output[i];
		if (dupeCount.hasOwnProperty(item))
		{
			dupe = item;
			dupeIndex = i;
			break;
		}
		dupeCount[item] = i;
	}
	
	console.log("first dupe:",dupe,"occurrence:",dupeCount[dupe] + 1, "number between dupes:", dupeIndex-dupeCount[dupe]);
}
answerQuestions();
