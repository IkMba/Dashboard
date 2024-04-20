import Button from "@/app/ui/dashboard/Button";
import React from "react";

export default function addUserPage() {
  return (
    <div className="bg-bg-light rounded-lg mt-5 px-6 py-4">
      <form className="flex flex-wrap gap-8">
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="5"
          placeholder="Address"
        ></textarea>
        <div className="flex justify-end w-full">
          <Button text="Add user" />
        </div>
      </form>
    </div>
  );
}
