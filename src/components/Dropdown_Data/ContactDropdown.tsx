import React from "react";

interface CategoryProps {
  data: {
    category: string;
  };
}

function ContactDropdown(props: CategoryProps) {
  return (
    <>
      <div className="container">
        <h1>{props.data.category}</h1>
      </div>
    </>
  );
}

export default ContactDropdown;
