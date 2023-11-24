export default async function Catalog() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/moisesnetouou')
  const user = await response.json()

  return <h1>Catalog</h1>
}
