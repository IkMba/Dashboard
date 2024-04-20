import Button from "@/app/ui/dashboard/Button";
import React from "react";

export default function addProductPage() {
  return (
    <div className="bg-bg-light rounded-lg mt-5 px-6 py-4">
      <form className="flex flex-wrap gap-8">
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          required
          name="desc"
          id="desc"
          rows={16}
          placeholder="Description"
        ></textarea>
        <div className="flex justify-end w-full">
          <Button text="Add Product" />
        </div>
      </form>
    </div>
  );
}
