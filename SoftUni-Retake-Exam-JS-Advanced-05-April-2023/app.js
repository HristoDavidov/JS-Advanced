window.addEventListener("load", solve);

function solve() {

    let name = document.getElementById('gem-name');
    let color = document.getElementById('color');
    let carats = document.getElementById('carats');
    let price = document.getElementById('price');
    let type = document.getElementById('type');
    let addBtn = document.getElementById('add-btn');
    let previewList = document.getElementById('preview-list');
    let collectionList = document.getElementById('collection');

    addBtn.addEventListener('click', add);

    function add() {

        if (name.value == '' ||
            color.value == '' ||
            carats.value == '' ||
            price.value == '' ||
            type.value == '' ||
            type.value == '') {
            return;
        };

        let liEl = document.createElement('li');
        liEl.setAttribute('class', 'gem-info');

        let articleEl = document.createElement('article');

        let h4 = document.createElement('h4');
        h4.textContent = `${name.value}`;
        articleEl.appendChild(h4);

        let p1 = document.createElement('p');
        p1.textContent = `Color: ${color.value}`;
        articleEl.appendChild(p1);

        let p2 = document.createElement('p');
        p2.textContent = `Carats: ${carats.value}`;
        articleEl.appendChild(p2);

        let p3 = document.createElement('p');
        p3.textContent = `Price: ${price.value} $`;
        articleEl.appendChild(p3);

        let p4 = document.createElement('p');
        p4.textContent = `Type: ${type.value}`;
        articleEl.appendChild(p4);

        liEl.appendChild(articleEl);
        previewList.appendChild(liEl);

        let saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'save-btn');
        saveBtn.textContent = 'Save to Collection';
        liEl.appendChild(saveBtn);

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit Information';
        liEl.appendChild(editBtn);

        let cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('class', 'cancel-btn');
        cancelBtn.textContent = 'Cancel';
        liEl.appendChild(cancelBtn);


        let editName = name.value;
        let editColor = color.value;
        let editCarats = carats.value;
        let editPrice = price.value;
        let editType = type.value;

        name.value = '';
        color.value = '';
        carats.value = '';
        price.value = '';
        type.value = '';

        addBtn.disabled = true;

        editBtn.addEventListener('click', edit);

        function edit() {

            name.value = editName;
            color.value = editColor;
            carats.value = editCarats;
            price.value = editPrice;
            type.value = editType;

            liEl.remove();
            addBtn.disabled = false;

        }

        saveBtn.addEventListener('click', save);

        function save(){

            let liEl2 = document.createElement('li');

            let p5 = document.createElement('p');
            p5.setAttribute('class', 'collection-item');
            p5.textContent = `${editName} - Color: ${editColor}/ Carats: ${editCarats}/ Price: ${editPrice}$/ Type: ${editType}`;
            liEl2.appendChild(p5);
            collectionList.appendChild(liEl2);
            liEl.remove();
            addBtn.disabled = false;
        }

        cancelBtn.addEventListener('click', cancel);
         
        function cancel(){
            liEl.remove();
            addBtn.disabled = false;
        }

    }


}
