

let formBtn = document.querySelector('.btn');
let formInput = document.querySelector('.form-control');
let formSelect = document.querySelector('.form-select');
let multiResult = document.querySelector('.multi-result');


formBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    if(formInput.value == '') {
        alert(' Hello! \n You did not give any value');
    }
    else {
        const colElement = document.createElement('div');
        colElement.className = `col-xl-${formSelect.value}`;
        multiResult.appendChild(colElement);

        const designElement = document.createElement('div');
        designElement.className = 'p-3 bg-dark rounded-3 mb-4';
        colElement.appendChild(designElement);

        const listElement = document.createElement('ul');
        listElement.className = 'list-group';
        designElement.appendChild(listElement);

        for(let i=1; i<=10; i++) {
            const listItemClass = 'list-group-item rounded-3 mb-1 mt-1 fw-bold border-0';
            listElement.innerHTML += `<li class="${listItemClass}"> ${formInput.value} x ${i} = ${formInput.value * i} </li>`;
        }
        formInput.value = '';
    }
});