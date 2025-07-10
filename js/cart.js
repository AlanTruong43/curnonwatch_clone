// cart.js
$(function() {
    // Kiểm tra jQuery
    if (typeof jQuery == 'undefined') {
        console.error('jQuery chưa được load!');
        return;
    }

    // Load giỏ hàng khi trang được tải
    loadCart();
    if (typeof updateCartWithCoupon === 'function') {
    updateCartWithCoupon();
}
    // Xử lý sự kiện tăng/giảm số lượng
    $(document).on('click', '.quantity-btn', function() {
        const action = $(this).data('action');
        const productName = $(this).closest('tr').data('name');
        updateQuantity(productName, action);
    });
});

function loadCart() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const $cartBody = $('#cart-body');
        let html = '';
        let total = 0;
        
        if (cart.length === 0) {
            html = '<tr><td colspan="4">Giỏ hàng trống</td></tr>';
        } else {
            cart.forEach(item => {
                const price = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
                const itemTotal = price * item.quantity;
                total += itemTotal;
                
                html += `
                    <tr data-name="${item.name}">
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td class="quantity-controls">
                            <button class="quantity-btn" data-action="decrease">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" data-action="increase">+</button>
                        </td>
                        <td>${itemTotal.toLocaleString('vi-VN')} ₫</td>
                    </tr>
                `;
            });
        }
        
        $cartBody.html(html);
$('#products-total').text(total.toLocaleString('vi-VN') + ' ₫');
        
    } catch (e) {
        console.error('Lỗi khi load giỏ hàng:', e);
        $('#cart-body').html('<tr><td colspan="4">Có lỗi xảy ra khi tải giỏ hàng</td></tr>');
    }
}

function updateQuantity(productName, action) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.name === productName);
    
    if (productIndex !== -1) {
        if (action === 'increase') {
            cart[productIndex].quantity += 1;
        } else if (action === 'decrease') {
            if (cart[productIndex].quantity > 1) {
                cart[productIndex].quantity -= 1;
            } else {
                if (confirm('Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?')) {
                    cart.splice(productIndex, 1);
                } else {
                    return;
                }
            }
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
        loadCart();
    }
}