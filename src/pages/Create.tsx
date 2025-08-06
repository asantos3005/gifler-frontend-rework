import { useForm } from "react-hook-form";
import { useState } from "react";

function Create() {
  return (
    <main>
      <MyForm />
    </main>
  );
}

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [previews, setPreviews] = useState<string[]>([]);

  const onSubmit = async (data: any) => {
  const title = data.title;
  const files: FileList = data.images;

  const formData = new FormData();
  formData.append("title", title);

  // Append each file individually
  Array.from(files).forEach((file) => {
    formData.append("images", file); // multiple files under the same field name
  });

  try {
    const response = await fetch("http://localhost:3000/gif/create", {
      method: "POST",
      body: formData,
      // Note: DO NOT manually set Content-Type when using FormData — browser handles it
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error uploading gif:", error);
  }
};

  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = event.target.files;
  if (files) {
    const urls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setPreviews((prev) => {
      // Clean up old previews
      prev.forEach((url) => URL.revokeObjectURL(url));
      return urls;
    });
  }
};

  return (
    <div>
      <h2>Create a GIF</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title:</label>
        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="Enter a title"
        />
        {errors.title && <p>This field is required</p>}

        <br />

        <label>Upload Images:</label>
        <input
          type="file"
          accept="image/*"
          multiple
          {...register("images", { required: true })}
          onChange={handleFileChange}
        />
        {errors.images && <p>Please upload at least one image</p>}

        {/* Image previews */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {previews.map((src, idx) => (
            <img key={idx} src={src} width={100} alt={`preview-${idx}`} />
          ))}
        </div>

        <br />
        <input type="submit" value="Create GIF" />
      </form>
    </div>
  );
}

export default Create;