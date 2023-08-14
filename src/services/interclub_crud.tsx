import supabase from "./supabase";
import { BlogPost } from "../components/Data/Verslag_Data";

// READ
export async function fetchICData() {
  const { data, error } = await supabase.from("interclub_verslag").select("*");
  return { data, error };
}

export async function fetchICDataByID(id: number) {
  const { data, error } = await supabase
    .from("interclub_verslag")
    .select("*")
    .eq("id", id)
    .single();
  return { data, error };
}

// CREATE
export async function createICData(title: string, content: string) {
  const { data: createdData, error } = await supabase
    .from("interclub_verslag")
    .insert([{ title, content }]);
  return { createdData, error };
}

// UPDATE
export async function updateICData(newData: BlogPost) {
  const { data, error } = await supabase
    .from("interclub_verslag")
    .update(newData)
    .eq("id", newData.id);
  return { data, error };
}

// DELETE
export async function deleteICData(id: Number) {
  const { data, error } = await supabase
    .from("interclub_verslag")
    .delete()
    .eq("id", id);
  return { data, error };
}
