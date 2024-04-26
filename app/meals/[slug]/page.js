export default function MealDetails({params}) {
  return (
    <>
      <h1>Meal Details</h1>
      <p>{params.slug}</p>
    </>
  )
}