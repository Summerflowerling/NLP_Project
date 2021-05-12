
function updateUi (data){
    const agreement = document.getElementById("agreement")
    const subjectivity = document.getElementById("subjectivity")
    const confidence = document.getElementById("confidence")
    const irony = document.getElementById("irony")
    const resultList = document.getElementById("result-list")
    const sectionResult = document.getElementById("section-result")
    

    

    

    if(data.status.code != "201"){
        if (sectionResult.firstElementChild.classList.contains("result-no-resource")){
            sectionResult.removeChild(sectionResult.firstChild);
        }
        
        resultList.style.display ="block"
        agreement.innerHTML = `<span class="result-list-title">Agreement</span>: ${data.agreement.toLowerCase()}`
        subjectivity.innerHTML = `<span class="result-list-title">Subjectivity</span>: ${data.subjectivity.toLowerCase()}`
        confidence.innerHTML = `<span class="result-list-title">Confidence</span>: ${data.confidence.toLowerCase()}  % `
        irony.innerHTML = `<span class="result-list-title">Irony</span>: ${data.irony.toLowerCase()}`
        

        if(!sectionResult.firstElementChild.classList.contains("result-list-section-title")){
            resultList.insertAdjacentHTML("beforebegin", `<h3 id="result-list-title" class="result-list-section-title">This is your results</h3>`) 
            
            } else {
                document.getElementById("result-list-title").style.display="block"   
            }

    }else {
        if(!sectionResult.firstElementChild.classList.contains("result-no-resource")){
            sectionResult.insertAdjacentHTML("afterbegin", `<h1 id="no-result" class="result-no-resource">${"Sorry there is no result for your content"}</h3>`)    
            resultList.style.display ="none"
            document.getElementById("result-list-title").style.display="none"
        } else{
            return
        }
        

    }
    
   //Double check here
    
  
    document.getElementById('text').value = ""
  
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
        console.log("This is json from handle submit", json)
        updateUi(json)
        
       
    })
    
}


export {handleSubmit, updateUi}

