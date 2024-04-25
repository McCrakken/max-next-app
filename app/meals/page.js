import Link from "next/link";

export default function MealsPage(props) {
  return (
    <>
      <h1>Meals Page</h1>
      <Link href={'meals/share'}>Share</Link>
    </>
  )
}