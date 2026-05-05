import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://grmvablffojjcnfohtql.supabase.co";
const supabaseKey = "sb_publishable_P_AjspSvHvdAF7U0rA4H6A_n7Bizdz1";

export const supabase = createClient(supabaseUrl, supabaseKey);