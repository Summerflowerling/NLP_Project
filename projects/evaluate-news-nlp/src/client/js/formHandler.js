
function updateUi (data){
    const agreement = document.getElementById("agreement")
    const subjectivity = document.getElementById("subjectivity")
    const confidence = document.getElementById("confidence")
    const irony = document.getElementById("irony")
    agreement.innerHTML = `<h3>Agreement: <span>${data.agreement.toLowerCase()}</span></h3>`
    subjectivity.innerHTML = `<h3>Subjectivity: <span>${data.subjectivity.toLowerCase()}</span></h3>`
    confidence.innerHTML = `<h3>Confidence: <span>${data.confidence.toLowerCase()}</span> % </h3>`
    irony.innerHTML = `<h3>Irony: <span>${data.irony.toLowerCase()}</span></h3>`
  
}

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('text').value
    Client.checkForContent(formText)
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
    .then(json=>{
        console.log(json)
        updateUi(json)
       
    })
    
}


export { handleSubmit, updateUi}

