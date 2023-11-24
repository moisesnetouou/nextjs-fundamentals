'use client'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  console.log('Ola', params)

  function addToCard() {
    console.log('Adicionou no carrinho')
  }

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>color: {color}</p>

      <button onClick={addToCard}>Carrinho</button>
    </div>
  )
}
