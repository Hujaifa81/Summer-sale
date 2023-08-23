let listCount = 1;
let price = 0.00;
let flag = 0
document.querySelector('.purchase-btn').setAttribute('disabled', true)
document.querySelector('.apply-btn').setAttribute('disabled', true)
document.querySelector('.text-field').value = ''
let arr=[]
function calculation(target) {
    const listName = target.querySelector('.prodName').innerText;
    const listElement = document.createElement('li')
    listElement.innerHTML = `${listCount}. ${listName}`
    document.querySelector('.cart').appendChild(listElement)
    listCount++

    const priceText = target.querySelector('.price').innerText
    const priceNumber = parseFloat(priceText)
    price = price + priceNumber;
    document.querySelector('.totalPrice').innerText = price.toFixed(2)
    document.querySelector('.total').innerText = price.toFixed(2)
    if (price > 0) {
        document.querySelector('.purchase-btn').removeAttribute('disabled')
        if (price >= 200) {
            document.querySelector('.apply-btn').removeAttribute('disabled')
            document.querySelector('.total').innerText = (parseFloat(document.querySelector('.totalPrice').innerText) - parseFloat(document.querySelector('.discount').innerText)).toFixed(2)
        }
    }

}

function discount(target) {
    const beforeDiscountNumber = parseFloat(document.querySelector('.totalPrice').innerText)
    if (document.querySelector('.text-field').value === 'SELL200') {
        const afterDiscount = (beforeDiscountNumber - (beforeDiscountNumber * 0.20)).toFixed(2)
        document.querySelector('.discount').innerText = (beforeDiscountNumber * 0.20).toFixed(2)
        document.querySelector('.total').innerText = afterDiscount
        
    }
    
    else {
        alert('Wrong coupon')

    }
    


}
function home(target) {
    document.querySelector('.totalPrice').innerText = '0.00'
    document.querySelector('.total').innerText = '0.00'
    document.querySelector('.discount').innerText = '0.00'
    price = 0
    listCount = 1
    document.querySelector('ul').innerText = ''
    document.querySelector('.apply-btn').setAttribute('disabled', true)
    document.querySelector('.purchase-btn').setAttribute('disabled', true)
    document.querySelector('.text-field').value = ''
}