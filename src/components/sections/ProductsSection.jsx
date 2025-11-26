
import React from 'react';
import ProductCard from '../ProductCard';

const ProductsSection = ({ products }) => (
  <section>
    <h2 className="text-2xl font-bold text-white mb-6">
      Products ({products.length})
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

export default ProductsSection;