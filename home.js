let input = document.getElementById('task')

function getValue() {
    // div

    let div = document.createElement('div')
    let attDiv = document.createAttribute('class')

    attDiv.value = 'divId'
    div.setAttributeNode(attDiv)

    // RESULT

    let result = document.createElement('h4')
    let att = document.createAttribute('class')

    att.value = 'pId'
    result.innerHTML = input.value

    result.setAttributeNode(att)

    // Remove button

    let btnRemove = document.createElement("input");
    let attBut = document.createAttribute('class') 

    btnRemove.value = "X";
    btnRemove.type = "button";

    attBut.value = 'attButton'
    btnRemove.setAttributeNode(attBut)

    // Change Button
    
    let btnChange = document.createElement("input");
    let attChange = document.createAttribute('class') 

    btnChange.value = "Edit";
    btnChange.type = "button";

    attChange.value = 'attChange'
    btnChange.setAttributeNode(attChange)

    // Remove Element
     
    btnRemove.onclick = function () {
    div.parentNode.removeChild(div);
    };

    div.appendChild(result)
    div.appendChild(btnRemove)

    // endless input and other possibilities

    let letters = /[^ ]/g

    if(result.innerHTML.length > 20) {
      result.innerHTML = result.innerHTML.slice(0, 20) + '...'
      result.appendChild(btnRemove)
      result.appendChild(btnChange)
      document.body.appendChild(div)

    } else if(result.innerHTML.length == 0) {
      alert('Write something')

    } else if(result.innerHTML.match(letters)) {
      result.appendChild(btnRemove)
      result.appendChild(btnChange)
      document.body.appendChild(div);
    } else {
      alert('Write something')
    }

    // change color

    let colorArr = ['rgb(101, 211, 68)', 'rgb(170, 68, 211)']
    let i = 0

    result.addEventListener('click', function() {
      result.style.backgroundColor = colorArr[i]
      i = (i + 1) % colorArr.length;
    })

    // Delete after input

    document.getElementById('task').value = "";

    // Edit

    btnChange.onclick = function () {
        let change = prompt('Change it')
  
        if(change == null) {
        result.innerHTML = result.innerHTML
        } else {
          result.innerHTML = change
        }
  
        if(result.innerHTML.length > 20) {
          result.innerHTML = result.innerHTML.slice(0, 20) + '...'
          result.appendChild(btnRemove)
          result.appendChild(btnChange)
  
        } else if(result.innerHTML.length == 0) {
          alert('Write something')
          result.innerHTML = 'Change me!'
          result.appendChild(btnRemove)
          result.appendChild(btnChange)
  
        } else if(result.innerHTML.match(letters)) {
          result.appendChild(btnRemove)
          result.appendChild(btnChange)
  
        } else {
          alert('Write something')
          result.innerHTML = 'Change me!'
          result.appendChild(btnRemove)
          result.appendChild(btnChange)
        }
    }

}

// Trigger button after enter

function forEnter(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    document.getElementById('butt').click();
    return false;

  } else {
    return true;
  }
}