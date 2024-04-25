export default function MealDetails({params}) {
  return (
    <>
      <h1>Dynamic Meals page</h1>
      <p>{params.slug}</p>
    </>
  )
}