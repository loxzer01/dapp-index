/*Preloader*/
    $('#pre').hide('fade');
/*Scripts Start*/
$(document).ready(function(){
    /////////Control del login
    //Open
    $('#open-login').click(function(){
        $('.pdo').show('fade',function(){
            $('.conect').show('drop',{direction: 'up'});
        });
    });
    //Close
    $('#close-login').click(function(){
        $('.conect').hide('drop',{direction: 'up'},function(){
            $('.pdo').hide('fade');
        });
    });
});
const calculateinput = document.getElementById('calculateinput');
const resultC = document.getElementById('result_C');
const day = [56,112,224];
let multNumber = 56;
function changeTime(index){
    let claseDelete = document.getElementsByClassName('bt-active');
    let claseAdd = document.getElementsByClassName('calculateClases')[index];
    claseDelete[0].classList.remove('bt-active');
    claseAdd.classList.add('bt-active');
    multNumber = day[index];
}
calculateinput.addEventListener('input',function(e){
    let value = (e.target.value).replace(/[^0-9.]/g, '');
    let free = (value * 22 / 10000) * 28/100;
    let result = (value * 22 / 10000)-free;
    resultC.innerHTML = (result * multNumber).toFixed(2);
})