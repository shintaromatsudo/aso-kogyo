import Title from '../components/Title'

const Product = () => (
  <div className="product">
    <Title title={'製品'} />
    <p>製品</p>
    <style jsx>{`
      p {
        text-align: center;
      }
      .product {
        animation:fadeIn 3s;
      }
      @keyframes fadeIn {
        0% { 
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `}</style>
  </div>
)

export default Product
