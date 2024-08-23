import React from 'react';
import {
    Card,
    // CardContent,
    CardDescription,
    // CardFooter,
    CardTitle,
    CardHeader,
    CardContent,
    
  } from "@/components/ui/card" ;
import Link from 'next/link';


export default async function page() {
  async function fetchRecipes(){
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    
    return data?.recipes;
  }
  const recipeList = await fetchRecipes();
  return (
    <>
    <h1 className='text-3xl font-semibold m-4'>Recipe List</h1>
    <Link href={"/"} className='m-4 '>Go to Home</Link>
    <div className='flex justify-center items-center flex-wrap h-screen gap-3'>
        
        {
            recipeList.map((recipe) => {
                return (
                    <div key={recipe.id} className='w-1/5 m-2'>
                        <Card >
                            <CardHeader>
                                <CardTitle>
                                    {recipe.name}
                                </CardTitle>
                                <CardDescription>
                                    {recipe.cuisine}
                                </CardDescription>
                                <CardContent>
                                <img src={recipe.image} className='w-44 h-22' alt={"image of a" + recipe.name}></img>                    
                                <CardDescription>
                                    {recipe.instructions}
                                </CardDescription>      
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}
