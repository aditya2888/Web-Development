let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener('click', () => {
    console.log("div was clicked");
});

ul.addEventListener('click', (e) => {

    e.stopPropagation();
    console.log("ul was clicked");
});

for (let li of lis) {
    li.addEventListener('click', (e) => {

        e.stopPropagation();
        console.log("li was clicked");
    });
}
