const loadPhones = async (searchText,dataLimit) => {
  //   const url = `./phoneDb.json`;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  const response = await fetch(url);
  const data = await response.json();
  // console.log(data.data);
  displayPhones(data.data, dataLimit);
};

const displayPhones = (phones,dataLimit) => {
  // console.log(phones);
  const phoneContainer = document.getElementById("phone-container");

  //todo: after every search
  phoneContainer.textContent = "";

  //todo: display the number of phones
  const showAll = document.getElementById("show-all");
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0, 6);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }

  //todo: handle no result found case
  const noPhone = document.getElementById("not-found");
  if (phones.length === 0) {
    noPhone.classList.remove("d-none");
  } else {
    noPhone.classList.add("d-none");
  }

  //todo: append child based on search result
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    // const {image,phone_name}=phone;
    phoneDiv.innerHTML = `
        
        <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <h3>${phone.brand}</h3>
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <h6 class="card-title">${phone.slug}</h6>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
        </div>
      </div>
        `;

    phoneContainer.appendChild(phoneDiv);
  });

  // stop loader
  toggleSpinner(false);
};

const processSearch=(dataLimit)=>{

    toggleSpinner(true);
    const searchField = document.getElementById("search-field");
    const getSearchFieldText = searchField.value;
    loadPhones(getSearchFieldText,dataLimit); 
}





//todo: button search function implementing
document.getElementById("btn-search").addEventListener("click", () => {
    processSearch(10)
  /* //todo: start loader
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const getSearchFieldText = searchField.value;
  loadPhones(getSearchFieldText); */
});

//todo: spinner function implementation
const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};

//todo: have to work on it for best

document.getElementById("btn-show-all").addEventListener("click", () => {

    processSearch();

 /*  //todo: start loader
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const getSearchFieldText = searchField.value;
  loadPhones(getSearchFieldText); */
});

// loadPhones();
