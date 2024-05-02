'use server';

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export async function ShareMeal(formData) {
  const meal = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    image: formData.get('image'),
    instructions: formData.get('instructions'),
    summary: formData.get('summary'),
    title: formData.get('title'),
  }

  await saveMeal(meal);
  redirect('/meals');
}