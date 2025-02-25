// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fbdxyerktysuywykwdry.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiZHh5ZXJrdHlzdXl3eWt3ZHJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MzI3ODIsImV4cCI6MjA0ODEwODc4Mn0.CrPLsoOqvcFwiM_wp2Av_ANa2L-tZpuXf9TMui024XU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
