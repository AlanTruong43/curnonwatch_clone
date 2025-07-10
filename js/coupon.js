// coupon.js
$(function() {
    // Danh sách mã giảm giá hợp lệ
    const validCoupons = [
        { code: "GIAM10", discount: 10, type: "percent" },
        { code: "GIAM50K", discount: 50000, type: "fixed" },
        { code: "FREESHIP", discount: 0, type: "freeship" }
    ];

    let appliedCoupon = null;

    // Xử lý sự kiện check mã giảm giá
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

    // Xử lý sự kiện thanh toán
    $('#checkout-btn').on('click', function() {
        if (confirm('Xác nhận thanh toán?')) {
            // Xử lý thanh toán ở đây
            alert('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        }
    });

    // Cập nhật giỏ hàng với mã giảm giá
    function updateCartWithCoupon() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let subtotal = calculateSubtotal(cart);
        let discount = 0;
        let total = subtotal;
        let shippingFee = 30000; // Phí ship mặc định

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

        // Hiển thị thông tin
        $('#subtotal-amount').text(formatPrice(subtotal));
        $('#discount-amount').text(formatPrice(discount));
        $('#shipping-fee').text(formatPrice(shippingFee));
        $('#total-amount').text(formatPrice(total));
    }

    // Tính tổng tiền hàng
    function calculateSubtotal(cart) {
        return cart.reduce((sum, item) => {
            const price = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
            return sum + (price * item.quantity);
        }, 0);
    }

    // Định dạng tiền
    function formatPrice(amount) {
        return amount.toLocaleString('vi-VN') + ' ₫';
    }

    // Gọi hàm cập nhật khi trang được tải
    updateCartWithCoupon();
});