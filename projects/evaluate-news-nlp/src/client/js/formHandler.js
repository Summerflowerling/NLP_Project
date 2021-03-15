
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    const dataToSend = {content:formText}
    
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/addData',{
        method: 'POST',
        credentials: 'same-origin',
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        }, 
        body:JSON.stringify(dataToSend),
        
    })
    .then(res=> res.json())
    .then(json=>{console.log(json)})
   
    
}
export { handleSubmit }

