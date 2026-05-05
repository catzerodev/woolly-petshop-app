import { supabase } from "./supabaseClient";

export const getProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Error al cargar productos");
  }

  return data;
};