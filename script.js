function checkout(productName, price) {
    const paypalForm = document.createElement('form');
    paypalForm.action = 'https://www.paypal.com/cgi-bin/webscr';
    paypalForm.method = 'post';
    paypalForm.target = '_blank';

    const cmd = document.createElement('input');
    cmd.type = 'hidden';
    cmd.name = 'cmd';
    cmd.value = '_xclick';

    const business = document.createElement('input');
    business.type = 'hidden';
    business.name = 'business';
    business.value = 'youremail@example.com'; // Replace this with your PayPal email address

    const item_name = document.createElement('input');
    item_name.type = 'hidden';
    item_name.name = 'item_name';
    item_name.value = productName;

    const amount = document.createElement('input');
    amount.type = 'hidden';
    amount.name = 'amount';
    amount.value = price;

