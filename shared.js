// Shared Navigation HTML
const navigationHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
            <img src="https://placehold.co/80x80" alt="Shop Logo" style="width: 50px; height: 50px; margin-right: 10px;">
            <div>
                <span class="fw-bold fs-3">Fashion Store</span>
                <br>
                <small class="text-muted" style="font-size: 0.8rem;">Style for everyone</small>
            </div>
        </a>
        
        <!-- Mobile Menu Button -->
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Menu Items -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item mx-2">
                    <a class="nav-link fw-medium" href="index.html">
                        <i class="bi bi-house-door me-1"></i>Trang chủ
                    </a>
                </li>
                <li class="nav-item mx-2 dropdown">
                    <a class="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown">
                        <i class="bi bi-grid me-1"></i>Danh mục
                    </a>
                    <ul class="dropdown-menu border-0 shadow-sm">
                        <li><a class="dropdown-item" href="category.html"><i class="bi bi-gender-male me-2"></i>Nam</a></li>
                        <li><a class="dropdown-item" href="category-women.html"><i class="bi bi-gender-female me-2"></i>Nữ</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="category-accessories.html"><i class="bi bi-bag-heart me-2"></i>Phụ kiện</a></li>
                    </ul>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link fw-medium" href="category.html">
                        <i class="bi bi-bag me-1"></i>Sản phẩm
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link fw-medium" href="about.html">
                        <i class="bi bi-info-circle me-1"></i>Về chúng tôi
                    </a>
                </li>
            </ul>
            
            <!-- Right Icons -->
            <div class="d-flex align-items-center gap-3">
                <div class="position-relative">
                    <input type="search" class="form-control border-0 bg-light ps-4 pe-5" placeholder="Tìm kiếm...">
                    <i class="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3"></i>
                </div>
                
                <a href="#" class="btn btn-light position-relative p-2" data-bs-toggle="tooltip" title="Giỏ hàng">
                    <i class="bi bi-cart fs-5"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        0
                        <span class="visually-hidden">sản phẩm trong giỏ</span>
                    </span>
                </a>
                
                <div class="vr"></div>
                
                <div class="dropdown">
                    <button class="btn btn-light p-2" type="button" data-bs-toggle="dropdown">
                        <i class="bi bi-person-circle fs-5"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end border-0 shadow-sm">
                        <li><a class="dropdown-item" href="account.html"><i class="bi bi-person me-2"></i>Tài khoản</a></li>
                        <li><a class="dropdown-item" href="#"><i class="bi bi-heart me-2"></i>Yêu thích</a></li>
                        <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Cài đặt</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="login.html"><i class="bi bi-box-arrow-right me-2"></i>Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>`;

// Shared Footer HTML
const footerHTML = `
<footer class="bg-dark text-white py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h5>Phat Fashion Store</h5>
                <p>Thời trang dành cho giới trẻ</p>
                <div class="social-links">
                    <a href="https://facebook.com/phat" class="text-white me-3"><i class="bi bi-facebook"></i></a>
                    <a href="https://instagram.com/phat" class="text-white me-3"><i class="bi bi-instagram"></i></a>
                    <a href="https://tiktok.com/@phat" class="text-white me-3"><i class="bi bi-tiktok"></i></a>
                </div>
            </div>
            <div class="col-md-4">
                <h5>Liên Kết Nhanh</h5>
                <ul class="list-unstyled">
                    <li><a href="about.html" class="text-white">Về chúng tôi</a></li>
                    <li><a href="category.html" class="text-white">Sản phẩm</a></li>
                    <li><a href="#" class="text-white">Chính sách bảo hành</a></li>
                    <li><a href="#" class="text-white">Hướng dẫn mua hàng</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h5>Thông Tin Liên Hệ</h5>
                <ul class="list-unstyled">
                    <li><i class="bi bi-geo-alt me-2"></i>Số 4 Cầu Giấy, Phường Láng Thượng, Quận Đống Đa, Hà Nội</li>
                    <li><i class="bi bi-telephone me-2"></i>0123 456 789</li>
                    <li><i class="bi bi-envelope me-2"></i>phat@fashion.com</li>
                    <li><i class="bi bi-clock me-2"></i>Thứ 2 - Chủ nhật: 9:00 - 21:00</li>
                </ul>
            </div>
        </div>
    </div>
</footer>`;

// Add to Cart Modal HTML
const addToCartModalHTML = `
<div class="modal fade" id="addToCartModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header border-0">
                <h5 class="modal-title">Thêm vào giỏ hàng</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form id="addToCartForm">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <img src="" id="modalProductImage" class="img-fluid rounded" alt="Product">
                        </div>
                        <div class="col-md-8">
                            <h5 id="modalProductName" class="mb-3"></h5>
                            <p id="modalProductPrice" class="text-danger fw-bold mb-3"></p>
                            
                            <!-- Size Selection -->
                            <div class="mb-3">
                                <label class="form-label fw-medium">Kích thước:</label>
                                <div class="d-flex gap-2">
                                    <input type="radio" class="btn-check" name="size" id="sizeS" value="S">
                                    <label class="btn btn-outline-dark" for="sizeS">S</label>
                                    
                                    <input type="radio" class="btn-check" name="size" id="sizeM" value="M">
                                    <label class="btn btn-outline-dark" for="sizeM">M</label>
                                    
                                    <input type="radio" class="btn-check" name="size" id="sizeL" value="L">
                                    <label class="btn btn-outline-dark" for="sizeL">L</label>
                                    
                                    <input type="radio" class="btn-check" name="size" id="sizeXL" value="XL">
                                    <label class="btn btn-outline-dark" for="sizeXL">XL</label>
                                </div>
                            </div>
                            
                            <!-- Color Selection -->
                            <div class="mb-3">
                                <label class="form-label fw-medium">Màu sắc:</label>
                                <div class="d-flex gap-2">
                                    <input type="radio" class="btn-check" name="color" id="colorBlack" value="black">
                                    <label class="btn btn-outline-dark" for="colorBlack">
                                        <i class="bi bi-circle-fill text-dark"></i>
                                    </label>
                                    
                                    <input type="radio" class="btn-check" name="color" id="colorWhite" value="white">
                                    <label class="btn btn-outline-dark" for="colorWhite">
                                        <i class="bi bi-circle-fill text-white"></i>
                                    </label>
                                    
                                    <input type="radio" class="btn-check" name="color" id="colorBlue" value="blue">
                                    <label class="btn btn-outline-dark" for="colorBlue">
                                        <i class="bi bi-circle-fill text-primary"></i>
                                    </label>
                                    
                                    <input type="radio" class="btn-check" name="color" id="colorRed" value="red">
                                    <label class="btn btn-outline-dark" for="colorRed">
                                        <i class="bi bi-circle-fill text-danger"></i>
                                    </label>
                                </div>
                            </div>
                            
                            <!-- Quantity -->
                            <div class="mb-3">
                                <label class="form-label fw-medium">Số lượng:</label>
                                <div class="input-group" style="width: 140px;">
                                    <button type="button" class="btn btn-outline-dark" onclick="decreaseQuantity()">
                                        <i class="bi bi-dash"></i>
                                    </button>
                                    <input type="number" class="form-control text-center" id="quantity" value="1" min="1" max="10">
                                    <button type="button" class="btn btn-outline-dark" onclick="increaseQuantity()">
                                        <i class="bi bi-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-dark" onclick="addToCart()">
                    <i class="bi bi-cart-plus me-2"></i>Thêm vào giỏ
                </button>
            </div>
        </div>
    </div>
</div>`;

// Function to initialize shared components
function initSharedComponents() {
    // Insert navigation
    const navPlaceholder = document.querySelector('#nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navigationHTML;
    }

    // Insert footer
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // Insert add to cart modal
    const modalPlaceholder = document.createElement('div');
    modalPlaceholder.innerHTML = addToCartModalHTML;
    document.body.appendChild(modalPlaceholder);

    // Set active menu item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(tooltip => {
        new bootstrap.Tooltip(tooltip);
    });

    // Initialize add to cart buttons
    initAddToCartButtons();
}

// Function to initialize add to cart buttons
function initAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productImage = productCard.querySelector('img').src;
            const productName = productCard.querySelector('.card-title').innerText;
            const productPrice = productCard.querySelector('.text-danger') ? 
                               productCard.querySelector('.text-danger').innerText :
                               productCard.querySelector('.fw-bold').innerText;

            // Set modal content
            document.getElementById('modalProductImage').src = productImage;
            document.getElementById('modalProductName').innerText = productName;
            document.getElementById('modalProductPrice').innerText = productPrice;

            // Show modal
            const modal = new bootstrap.Modal(document.getElementById('addToCartModal'));
            modal.show();
        });
    });
}

// Quantity control functions
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue < 10) {
        quantityInput.value = currentValue + 1;
    }
}

// Add to cart function
function addToCart() {
    const form = document.getElementById('addToCartForm');
    const size = form.querySelector('input[name="size"]:checked')?.value;
    const color = form.querySelector('input[name="color"]:checked')?.value;
    const quantity = document.getElementById('quantity').value;
    
    if (!size || !color) {
        alert('Vui lòng chọn kích thước và màu sắc');
        return;
    }

    // Here you would typically send this data to your backend
    const productData = {
        name: document.getElementById('modalProductName').innerText,
        price: document.getElementById('modalProductPrice').innerText,
        size: size,
        color: color,
        quantity: quantity,
        image: document.getElementById('modalProductImage').src
    };

    // For now, just show a success message
    alert('Đã thêm sản phẩm vào giỏ hàng!');
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addToCartModal'));
    modal.hide();

    // Update cart count
    updateCartCount(1);
}

// Update cart count
function updateCartCount(increment) {
    const cartBadge = document.querySelector('.bi-cart').nextElementSibling;
    const currentCount = parseInt(cartBadge.innerText);
    cartBadge.innerText = currentCount + increment;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initSharedComponents); 