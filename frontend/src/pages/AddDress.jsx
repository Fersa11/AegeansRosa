import { useState } from "react";

function AddDress() {
  const [form, setForm] = useState({ productName: "", price: "", image: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("/api/dresses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Dress added!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="productName"
        placeholder="Product Name"
        onChange={handleChange}
      />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="image" placeholder="Image URL" onChange={handleChange} />
      <button type="submit">Add Dress</button>
    </form>
  );
}

export default AddDress;
