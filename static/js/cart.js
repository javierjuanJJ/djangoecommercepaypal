var upsateBtns = document.getElementsByClassName('update-cart')

function updateUserOrder(productId, action) {
    console.log('User is authenticated, sending data... ')

    var url = '/update_item/'

    fetch(url,  {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken' : csrftoken,
        },
        body:JSON.stringify({
            'productId': productId,
            'action': action
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log('Data: ', data)
            location.reload()
        })
    })

}

for (let i = 0; i < upsateBtns.length; i++) {
    upsateBtns[i].addEventListener('click', function () {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId: ', productId, 'Action: ', action)
console.log('USER: ', user)
        if (user == 'AnonymousUser'){
            console.log('USER is not authenticated ')
        }
        else {
            // console.log('USER is authenticated, sending data ... ')
            updateUserOrder(productId, action)
        }
    })
}