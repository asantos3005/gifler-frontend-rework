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

  const onSubmit = (data: any) => {
    const title = data.title;
    const files: FileList = data.images;

    console.log("Title:", title);
    console.log("Selected files:", files);

    // You can now send `title` and `files` to the backend (e.g. via FormData)
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