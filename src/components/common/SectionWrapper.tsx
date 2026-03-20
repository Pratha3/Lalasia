import React from "react";

export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="mx-auto max-w-7xl md:my-30 my-10">
        <div className="container mt-10 mb-5 px-5">{children}</div>
      </section>
    </>
  );
}
