import supabase, { supabaseUrl } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }


  console.log(data);
  console.log("yes");
  return data;
}
