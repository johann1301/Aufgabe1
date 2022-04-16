
function getNumbers() {

    

    // get input and split it into an array
    const val = document.getElementById("myNumbers").value;
    const array = val.split(' ');

    const evenNumbers = [];
    const oddNumbers = [];

    // sort the array
    array.sort(function(a, b){
        return a - b;
    })

    // convert array to numbers and sort by even and odd
    for(const number of array){

        // check if array contains an empty element and remove doubtful numbers
        if(!number || isNaN(number)){

        } else if (Number(number) % 2 == 0 && Number(number) !== evenNumbers[evenNumbers.length-1]){
            evenNumbers.push(Number(number))
        } else if (Number(number) % 2 !== 0 && Number(number) !== oddNumbers[oddNumbers.length-1]) {
            oddNumbers.push(Number(number))
        }
      
    }

    // paste the lists into the HTML file to display them

    const container = document.getElementById('container')

    // create div/box for both lists
    const list = document.createElement('div')
    list.setAttribute("id", "list")
    list.setAttribute("class", "listBox")
    container.append(list)

    // create the list of even numbers in the HTML file

    // remove old list when a new list is created 
    if(document.getElementById('evenList')){
        document.getElementById('evenList').remove() 

    }
    
    // create div for even list
    const evenList = document.createElement('div')
    evenList.setAttribute("id", "evenList")
    evenList.setAttribute("class", "evenListBox")
    list.append(evenList)

    // create a headline
    const evenDiv = document.createElement('h3')
    evenList.append(evenDiv)
    evenDiv.innerText = 'List of even numbers'

    // create the HTML list
    const evenUl = document.createElement('ul')
    evenList.append(evenUl)

    // create for each number a point
    for (const list of evenNumbers ){
        const evenLi = document.createElement('li')
        evenLi.setAttribute("class", "evenListPoints")
        evenUl.append(evenLi)
        evenLi.innerText = list
    }

    
    // create the list of odd numbers in the HTML file

    // remove old list when a new list is created
    if(document.getElementById('oddList')){
        document.getElementById('oddList').remove()
    }

    // create div/box for odd list
    const oddList = document.createElement('div')
    oddList.setAttribute("id", "oddList")
    oddList.setAttribute("class", "oddListBox")
    list.append(oddList)

    // create a headline
    const oddDiv = document.createElement('h3')
    oddList.append(oddDiv)
    oddDiv.innerText = 'List of odd numbers'

    // create the HTML list
    const oddUl = document.createElement('ul')
    oddList.append(oddUl)

    // create for each number a point
    for (const list of oddNumbers ){
        const oddLi = document.createElement('li')
        oddLi.setAttribute("class", "oddListPoints")
        oddUl.append(oddLi)
        oddLi.innerText = list
    }

    
  }