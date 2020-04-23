//Post Data to server Function
//
console.log('::: Running PostData :::');
async function postData(url, data = {}) {
   const response = await fetch(`http://localhost:30001/myPostRoute`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
   });

   try {
      const newData = await response.json();
      return newData;
   } catch (error) {
      console.error('Error!!', error);
   }
}

export { postData };
