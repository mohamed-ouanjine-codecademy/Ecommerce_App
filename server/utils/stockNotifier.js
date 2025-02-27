// /serverutils/stockNotifier.js
const checkStockLevels = async () => {
  const lowStockProducts = await Product.find({
    stock: { $lte: '$safetyStock' }
  }).populate('supplier');

  lowStockProducts.forEach(product => {
    console.log(`Low stock alert for ${product.name}!`);
    // Add email/SMS notification logic here
  });
};

// Run daily at 9 AM
nodeCron.schedule('0 9 * * *', checkStockLevels);