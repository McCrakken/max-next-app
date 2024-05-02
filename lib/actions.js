'use server';

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function ShareMeal(prevState, formData) {
  const meal = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    image: formData.get('image'),
    instructions: formData.get('instructions'),
    summary: formData.get('summary'),
    title: formData.get('title'),
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.creator) ||
    !meal.creator_email.includes('@') ||
    !meal.image || meal.image.size === 0
  ) {
      return {
        message: 'Invalid input'
      }
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}