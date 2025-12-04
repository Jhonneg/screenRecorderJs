"use client";
import FormField from "@/components/FormField";
import FileInput from "../../../components/FileInput";
import { useState } from "react";

export default function Page() {
  const [error, setError] = useState(null);

  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>
      {error && <div className="error-field">{error}</div>}

      <form
        className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"
        action=""
      >
        <FormField />
        <FileInput />
      </form>
    
      
      </div>
  );
}
