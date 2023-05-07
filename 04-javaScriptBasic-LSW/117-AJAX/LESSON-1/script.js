function loadData() {
    //create a new request
    const xhr = new XMLHttpRequest();

    //what to do when response arrives
    xhr.onload =function(){
        const container =document.getElementById('demo');
        container.innerHTML=xhr.responseText; 
    };

    //prepare request
    xhr.open("GET","./data/data.txt");

    //send data
    xhr.send()
   
  }