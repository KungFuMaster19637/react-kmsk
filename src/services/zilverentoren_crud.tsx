import supabase from "./supabase";
import { BlogPost } from "../components/Data/Verslag_Data";

// READ
export async function fetchData() {
  const { data, error } = await supabase
    .from("zilverentoren_verslag")
    .select("*");
  return { data, error };
}

// CREATE
export async function createData(data: BlogPost) {
  const { data: createdData, error } = await supabase
    .from("zilverentoren_verslag")
    .insert([data]);
  return { createdData, error };
}

// UPDATE
export async function updateData(id: Number, newData: BlogPost) {
  const { data, error } = await supabase
    .from("zilverentoren_verslag")
    .update(newData)
    .eq("id", id);
  return { data, error };
}

// DELETE
export async function deleteData(id: Number) {
  const { data, error } = await supabase
    .from("zilverentoren_verslag")
    .delete()
    .eq("id", id);
  return { data, error };
}
