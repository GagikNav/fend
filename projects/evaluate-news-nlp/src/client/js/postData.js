//// function checkForName(inputText) {
//   //
// //}

//Post Data to server Function
//
console.log('::: Running PostData :::', inputText);
async function postData(url, data = {}) {
   console.log(data, `Post Function`);
   const response = await fetch('/myPostRoute', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
   });

   try {
      const newData = await response.json();
      console.log(newData, `Form post`);
      return newData;
   } catch (error) {
      console.error('Error!!', error);
   }
}

export { postData };
