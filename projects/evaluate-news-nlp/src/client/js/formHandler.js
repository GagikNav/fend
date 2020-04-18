async function handleSubmit(event) {
   event.preventDefault();
   const inputText = document.getElementById('inputText').value;
   let txt = { inputText };
   console.log('::: Form Submitted :::');
   // console.log(txt);  it is working here

   Client.postData('/myPostRoute', txt).then(Client.updateUI());
}

//************************************************** */

//

export { handleSubmit };
