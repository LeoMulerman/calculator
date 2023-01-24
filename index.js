// функция для добавления элемента в инпут
function insert (elem) {
    document.form.textview.value = document.form.textview.value + elem;
}
// функция для очистки инпута
function clean () {
    document.form.textview.value = ''
}
// функция для удаления одного элемента 
function deleteElem () {
 let elem =   document.form.textview.value
 document.form.textview.value = elem.substring(0, elem.length - 1)
}
// фуекция для высчисления
function equal () {
    let elem = document.form.textview.value;
   if (elem) {
     document.form.textview.value = eval(elem)
   }
   
}
