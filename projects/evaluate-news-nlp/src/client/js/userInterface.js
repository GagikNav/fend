//User interface function
//This function getting data from server and  updates user interface in HTML file
//
async function updateUI() {
   // console.log('UI called');
   console.log('::: Running UI function :::');
   const request = await fetch('/myGetRoute');
   try {
      const allData = await request.json();

      // console.log(allData, 'alldata');

      document.getElementById('polarity').innerHTML = `polarity: ` + allData.polarity;
      document.getElementById('subjectivity').innerHTML = `subjectivity: ` + allData.subjectivity;
      document.getElementById('text').innerHTML = `User text: ` + allData.text;
      document.getElementById('polarity_confidence').innerHTML = `polarity confidence: ` + allData.polarity_confidence;
      document.getElementById('subjectivity_confidence').innerHTML =
         `subjectivity_confidence: ` + allData.subjectivity_confidence;
   } catch (error) {
      console.log('error', error);
   }
}

export { updateUI };
