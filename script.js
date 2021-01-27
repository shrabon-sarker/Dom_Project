let header = document.getElementById('header-content');
// console.log(header.textContent)
// console.log(header.innerText);
// console.log(header.innerHTML)

// header.style.color = 'red'
// console.dir(document)
// console.log(document.getElementsByClassName('item'))

// let itemUL = document.getElementById('items')
// let items = itemUL.getElementsByClassName('item')
// for(let i = 0; i < items.length; i++){
//     items[i].style.color = 'red'
// }

// let tag = document.getElementsByTagName('label');
// console.log(tag)

// let items = document.querySelector('#items')
// let head = items.querySelectorAll('.item:nth-child(2)')

// for(hed of head){
//     hed.style.color = 'red';
//     hed.style.color = 'blue'
// }
// console.log(head)

// //let item = document.querySelectorAll('.item')
// let btn = document.querySelectorAll('.update');
// console.log(btn)
// for(up of btn) {
//     up.style.background = 'red';
// }
// let greandparent = document.querySelector('.incomplete');
// //let parent = greandparent.children;
// //console.log(parent)
// let children = greandparent.querySelectorAll('.update');
// console.log(children)


//const childrenOne = document.querySelector('.item');
//const parent  = children.parentElement;

// //const greandparent = children.closest('.incomplete')
// // console.log(greandparent)

// const childrenTow = childrenOne.nextElementSibling;
// console.log(childrenTow)
// childrenTow.style.background = "red"


// const childrenTow = document.querySelector('.item').nextElementSibling;
// console.log(childrenTow)
// childrenTow.style.color = 'red'

// const childrenOne = childrenTow.previousElementSibling;
// childrenOne.style.color = 'blue'

// const childrenThree = childrenTow.nextElementSibling;
// childrenThree.style.color = 'green'

// const haderingTitle = document.querySelector('#header-content');
// const allBody = haderingTitle.parentElement;
// console.log(allBody)

// const childrenHead = allBody.children;
// console.log(childrenHead)


// const getclildren = document.querySelector('.item');
// const a = getclildren.closest('.incomplete');
// console.log(a)

// const BigParent = a.parentElement;
// console.log(BigParent)

// const allchildren = BigParent.children;
// console.log(allchildren)

//========================================
// create element
// const divEl = document.createElement('div');
// divEl.className = 'red'
// divEl.setAttribute('id', 'red')
// divEl.setAttribute('title', 'red div')

// const incom = document.querySelector('.incomplete')
//console.log(incom)
// const h2Element = incom.querySelector('h2')
// incom.insertBefore(divEl, h2Element)
// console.log()

//incom.appendChild(divEl)
//incom.append("this is")

// incom.appendChild(divEl, "this is ", document.createElement('p'))
//  incom.append(divEl, "this is ", document.createElement('p'))

//=================
// Event listener

const headerElement = document.querySelector('#header-title');

headerElement.addEventListener('mouseover ', (event) => {
    console.log(event)
})