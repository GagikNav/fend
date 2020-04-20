async function handleSubmit(event) {
   event.preventDefault();
   const inputText = document.getElementById('inputText').value;
   let formInput = { inputText };
   //validating URL format must begin with http
   if (Client.urlCheck(inputText)) {
      //If true sends url from html form to server then updates UI
      Client.postData('/myPostRoute', formInput).then(Client.updateUI());
      console.log('::: Form Submitted :::');
   } else {
      alert('Please enter a valid URL!!!');
   }
}

//************************************************** */

//
export { handleSubmit };
