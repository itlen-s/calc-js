const iputANode = document.querySelector('.js-input-a');
const iputBNode = document.querySelector('.js-input-b');
const selectOperationNode = document.querySelector('.js-select-operation');
const btnResultNode = document.querySelector('.js-btn-result');
const outputNode = document.querySelector('.js-output');

btnResultNode.addEventListener('click', function(){
    const a = Number(iputANode.value);
    const b = Number(iputBNode.value);
    const operation = selectOperationNode.value;

    const result = calculate({a, b, operation});
    // console.log(result);
    outputNode.innerHTML = result;
});

