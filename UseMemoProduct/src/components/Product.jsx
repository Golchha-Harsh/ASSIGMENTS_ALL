//here {products} are filtered products coming from parent we will map and print all value in list
const ProductList = ({ products }) => {
    return (
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    );
  };
  
  export default ProductList;
  