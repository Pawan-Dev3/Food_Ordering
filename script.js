const orderButton = document.querySelector('.order-button');
        const orderInfo = document.getElementById('order-info');
        const orderIdDisplay = document.getElementById('order-id');
        const foodImagesContainer = document.getElementById('food-images');
        const foodItems = document.querySelectorAll('.food-items input');

        // Image URLs for food items
        const foodImages = {
            'burger': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
            'fries': 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            'drink': 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            'dessert': 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
        };

        orderButton.addEventListener('click', () => {
            // Hide previous order details
            orderInfo.style.display = 'none';
            orderIdDisplay.textContent = '';
            foodImagesContainer.innerHTML = '';

            const selectedItems = Array.from(foodItems)
                .filter(item => item.checked)
                .map(item => item.value);

            if (selectedItems.length === 0) {
                alert('Please select at least one item!');
                return;
            }

            // Display loading message
            orderButton.textContent = 'Preparing your order...';

            // Simulate order preparation
            const preparationTime = Math.floor(Math.random() * 3000) + 2000;

            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(selectedItems);
                }, preparationTime);
            }).then((items) => {
                // Generate a random order ID
                const orderId = 'BK-' + Math.floor(Math.random() * 100000);
                orderIdDisplay.textContent = orderId;

                // Display the images of all selected items
                items.forEach(item => {
                    const img = document.createElement('img');
                    img.src = foodImages[item];
                    img.alt = item.charAt(0).toUpperCase() + item.slice(1);
                    foodImagesContainer.appendChild(img);
                });

                // Show the order info
                orderInfo.style.display = 'block';
                orderButton.textContent = 'Order Food';
            });
        });