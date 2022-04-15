
function getNumbers() {

    

    // get input and split into an Array
    const val = document.getElementById("myNumbers").value;
    const array = val.split(' ');

    const evenNumbers = [];
    const oddNumbers = [];

    // check if Array got an empty item at the beginning or the end
    if (array[array.length-1] === ''){
        array.splice(-1)
    }

    if (array[0] === ''){
        array.splice(0,1)
    }

    // sort the array
    array.sort(function(a, b){
        return a - b;
    })

    // convert Array into Numbers and sort into even and odd
    for(const number of array){
        if (Number(number) % 2 == 0){
            evenNumbers.push(Number(number))
        } else {
            oddNumbers.push(Number(number))
        }
      
    }

    const body = document.body

    // create athe list of even Numbers in the HTML file

    if(document.getElementById('evenList')){
        document.getElementById('evenList').remove() 

    }
    const evenList = document.createElement('div')
    evenList.setAttribute("id", "evenList")
    body.append(evenList)


    const evenDiv = document.createElement('div')
    evenList.append(evenDiv)
    evenDiv.innerText = 'List of even Numbers'

    const evenUl = document.createElement('ul')
    evenList.append(evenUl)

    for (const list of evenNumbers ){
        const evenLi = document.createElement('li')
        evenUl.append(evenLi)
        evenLi.innerText = list
    }
    
    // create athe list of odd Numbers in the HTML file

    if(document.getElementById('oddList')){
        document.getElementById('oddList').remove()
    }

    const oddList = document.createElement('div')
    oddList.setAttribute("id", "oddList")
    body.append(oddList)

    const oddDiv = document.createElement('div')
    oddList.append(oddDiv)
    oddDiv.innerText = 'List of odd Numbers'

    const oddUl = document.createElement('ul')
    oddList.append(oddUl)

    for (const list of oddNumbers ){
        const oddLi = document.createElement('li')
        oddUl.append(oddLi)
        oddLi.innerText = list
    }

    
  }