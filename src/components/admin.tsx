import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { v4 as uuidv4 } from "uuid";
import "../styles/admin.css";

export default function Admin() {
  const supabase = useSupabaseClient();
  const user = useUser();
  var [tech, setTech] = useState("");
  var [longDescription, setLongDescription] = useState("");

  interface FormData {
    name: string;
    github: string;
    demo: string;
    tech: string[];
    shortDescription: string;
    img: File | null;
    longDescription: string[];
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    github: "",
    demo: "",
    tech: [],
    shortDescription: "",
    img: null,
    longDescription: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      if (name === "tech") {
        return {
          ...prevFormData,
          tech: [...prevFormData.tech, value], // Append new value to the array
        };
      }

      return {
        ...prevFormData,
        longDescription: [...prevFormData.longDescription, value], // Handle regular fields
      };
    });
  };

  async function login(e: React.FormEvent) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/admin",
      },
    });

    if (error) {
      alert(
        "Error communicating with supabase, make sure to use a real email address!"
      );
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }

  return (
    <>
      <style>{`.App {
    grid-template-columns: 1fr;
    }`}</style>
      <div></div>
      <div className="container">
        {user === null ? (
          <form onSubmit={(e) => login(e)} className="login-card">
            <h1>Sign In</h1>
            <button type="submit">Log In</button>
          </form>
        ) : user?.user_metadata.email === process.env.REACT_APP_EMAIL ? (
          <>
            <button onClick={() => signOut()} className="signout-btn">
              Sign Out
            </button>
            <div className="project-form-container">
              <form>
                <div className="input-container">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="github">Github</label>
                  <input
                    type="text"
                    name="github"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="demo">Demo</label>
                  <input
                    type="text"
                    name="demo"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="tech">Tech Stack</label>
                  <input
                    type="text"
                    name="tech"
                    onChange={(e) => setTech(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="shortDescription">Short Description</label>
                  <input
                    type="text"
                    name="shortDescription"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="longDescription">Long Description</label>
                  <input
                    type="text"
                    name="longDescription"
                    onChange={(e) => setLongDescription(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="image">Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </form>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
