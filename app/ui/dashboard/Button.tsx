import React, { ReactElement } from "react";

type Props = {
  icon?: ReactElement;
  text: string;
  type?: string;
  action?: string;
};

export default function Button({ icon, text, type, action }: Props) {
  const btnClasses =
    action === "cancelled"
      ? "bg-btn-cancelled"
      : action === "pending"
      ? "bg-btn-pending"
      : action === "done"
      ? "bg-btn-done"
      : action === "view"
      ? "bg-teal"
      : action === "delete"
      ? "bg-crimson"
      : "";

  if (type === "action")
    return (
      <button
        className={`${btnClasses} flex px-1 items-center rounded-sm w-max cursor-pointer text-sm`}
      >
        {text}
      </button>
    );

  return (
    <button className="bg-btn-blue flex gap-1.5 px-2 py-0 items-center rounded-sm w-max cursor-pointer text-sm">
      <span className="">{icon} </span>
      {text}
    </button>
  );
}
