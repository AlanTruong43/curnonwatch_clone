$(function() {
    const validCoupons = [
        { code: "GIAM10", discount: 10, type: "percent" },
        { code: "GIAM50K", discount: 50000, type: "fixed" },
        { code: "FREESHIP", discount: 0, type: "freeship" }
    ];

    let appliedCoupon = null;

    $('#apply-coupon').on('click', function() {
        const couponCode = $('#coupon-code').val().trim();
        const foundCoupon = validCoupons.find(c => c.code === couponCode);
        
        if (foundCoupon) {
            appliedCoupon = foundCoupon;
            updateCartWithCoupon();
            $('#coupon-message').text('Áp dụng mã giảm giá thành công!').css('color', 'green');
        } else {
            appliedCoupon = null;
            updateCartWithCoupon();
            $('#coupon-message').text('Mã giảm giá không hợp lệ').css('color', 'red');
        }
    });

    $('#checkout-btn').on('click', function() {
        if (confirm('Xác nhận thanh toán?')) {
            alert('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        }
    });

    function updateCartWithCoupon() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let subtotal = calculateSubtotal(cart);
        let discount = 0;
        let total = subtotal;
        let shippingFee = 30000; 

        if (appliedCoupon) {
            switch(appliedCoupon.type) {
                case "percent":
                    discount = subtotal * appliedCoupon.discount / 100;
                    break;
                case "fixed":
                    discount = appliedCoupon.discount;
                    break;
                case "freeship":
                    shippingFee = 0;
                    break;
            }
            total = subtotal - discount + shippingFee;
        } else {
            total = subtotal + shippingFee;
        }

        $('#subtotal-amount').text(formatPrice(subtotal));
        $('#discount-amount').text(formatPrice(discount));
        $('#shipping-fee').text(formatPrice(shippingFee));
        $('#total-amount').text(formatPrice(total));
    }

    function calculateSubtotal(cart) {
        return cart.reduce((sum, item) => {
            const price = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
            return sum + (price * item.quantity);
        }, 0);
    }

    function formatPrice(amount) {
        return amount.toLocaleString('vi-VN') + ' ₫';
    }

    updateCartWithCoupon();
});

