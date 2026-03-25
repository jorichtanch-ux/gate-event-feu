import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import { useState, useEffect } from "react";
import { supabase } from "./utils/supabase";
import { SessionContext } from "./contexts/SessionContext";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import EditPage from "./pages/EditPage";

function App() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("event", event);
      console.log("session", session);
      if (event === "SIGNED_OUT") {
        setSession(null);
      } else if (session) {
        setSession(session);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  useEffect(() => {
          const fetchProfile = async () => {
              const { data, error } = await supabase
                  .from("profiles")
                  .select()
                  .eq("id", session.user.id)
                  .single();
  
              if (error) {
              }
  
              if (data) {
  
                  setProfile(data);
                  console.log("data", data);
              }
          };
  
          if (session?.user?.id) {
              fetchProfile();
          }
      }, [session]);

  return (
    <SessionContext.Provider value={{session, profile}}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditPage />} />

      </Routes>
    </SessionContext.Provider>
  );
}

export default App;