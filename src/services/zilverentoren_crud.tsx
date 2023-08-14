import supabase from "./supabase";
import { BlogPost } from "../components/Data/Verslag_Data";

// READ
export async function fetchZTData() {
  const { data, error } = await supabase
    .from("zilverentoren_verslag")
    .select("*");
  return { data, error };
}

export async function fetchZTDataByID(id: number) {
  const { data, error } = await supabase
    .from("zilverentoren_verslag")
    .select("*")
    .eq("id", id)
    .single();
  return { data, error };
}

// CREATE
export async function createZTData(title: string, content: string) {
  const { data: createdData, error } = await supabase
    .from("zilverentoren_verslag")
    .insert([{ title, content }]);
  return { createdData, error };
}

// UPDATE
export async function updateZTData(newData: BlogPost) {
  const { data, error } = await supabase
    .from("zilverentoren_verslag")
    .update(newData)
    .eq("id", newData.id);
  return { data, error };
}

// DELETE
export async function deleteZTData(id: Number) {
  const { data, error } = await supabase
    .from("zilverentoren_verslag")
    .delete()
    .eq("id", id);
  return { data, error };
}
