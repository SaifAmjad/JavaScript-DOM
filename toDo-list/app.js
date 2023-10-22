const input=document.getElementById('text');
const btn=document.querySelector('#btn');
const textBox=document.querySelector('.main');

btn.addEventListener('click',()=>{
    const inputText=input.value;
    
    if(!inputText || inputText.length<4){
        alert('Please enter text at required length');
        return;
    }

    if(textBox.children.length!==0){
       
        for (let i= 0; i < textBox.children.length; i++) {
            
            let preText=textBox.children[i].firstChild.innerText;
            
            if(preText===inputText){
                alert(`${inputText} already exist`);
                return;
            }
            
        }

    }
    

    const span=document.createElement('span');
    span.setAttribute('class','span-art')
    const title=document.createElement('h2');
    const removeBtn=document.createElement('button');
    removeBtn.innerText='Remove'
    removeBtn.setAttribute('class','remove-btn')

    title.innerText=inputText;

    span.append(title,removeBtn)

    textBox.appendChild(span);

    removeBtn.addEventListener('click',()=>{
        span.remove();
    })
    
})

