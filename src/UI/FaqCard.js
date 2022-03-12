import React, { useState } from "react";

export default function FaqCard(props) {
  const { title, content } = props.data;
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = (
    <svg
      class="w-6 h-6 text-blue-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20 12H4"
      ></path>
    </svg>
  );

  const closeMenu = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 4v16m8-8H4"
      />
    </svg>
  );

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <hr className="my-8 border-gray-200" />
      <div>
        <button
          onClick={handleOpen}
          className="flex items-center focus:outline-none"
        >
          {isOpen ? openMenu : closeMenu}{" "}
          <h1
            className="mx-4 text-xl text-gray-700"
            dangerouslySetInnerHTML={{ __html: title.rendered }}
          />
        </button>
        {isOpen && (
          <div className="flex mt-8 mx-10">
            <span className="border border-blue-500"></span>

            <p
              className="max-w-3xl px-4 text-gray-500"
              dangerouslySetInnerHTML={{ __html: content.rendered }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
