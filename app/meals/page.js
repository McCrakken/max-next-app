import classes from './page.module.css';
import Link from "next/link";
import MealsGrid from "@/components/meals/meal-grid";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}

export const metadata = {
  title: 'All Meals',
  description: 'Browse meals shared by the community.',
};

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe adn cook it yourself. It is easy and affordable!
        </p>
        <p className={classes.cta}>
          <Link href={'/meals/share'}>
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}