// Utility functions for the inventory management system

/**
 * Cleans up invalid products from localStorage
 * Removes products that don't have a valid name
 * @returns {Array} - Array of valid products
 */
function cleanInvalidProducts() {
    try {
        let products = JSON.parse(localStorage.getItem('inventoryProducts')) || [];
        
        // Filter out invalid products (those without a name)
        const validProducts = products.filter(product => 
            product && product.name && product.name.trim() !== ''
        );
        
        // Only update localStorage if we actually removed some products
        if (validProducts.length !== products.length) {
            localStorage.setItem('inventoryProducts', JSON.stringify(validProducts));
            console.log(`Cleaned up ${products.length - validProducts.length} invalid products`);
        }
        
        return validProducts;
    } catch (error) {
        console.error('Error cleaning invalid products:', error);
        return [];
    }
}

/**
 * Validates a product object
 * @param {Object} product - The product to validate
 * @returns {Boolean} - True if the product is valid, false otherwise
 */
function isValidProduct(product) {
    return product && 
           product.name && 
           product.name.trim() !== '' &&
           typeof product.quantity === 'number' &&
           !isNaN(product.quantity) &&
           product.quantity >= 0;
}

// Make functions available globally
if (typeof window !== 'undefined') {
    window.cleanInvalidProducts = cleanInvalidProducts;
    window.isValidProduct = isValidProduct;
}