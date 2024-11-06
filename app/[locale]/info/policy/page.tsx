import React from "react";

import PolicyComponent from "@/components/Policy";

const Policy = () => {
  return (
    <section className="px-4 sm:px-10 md:px-20 lg:px-52 py-20 font-poppins bg-gray-100 dark:bg-black dark:text-gray-200">
      <div className="bg-white dark:bg-[#271739] shadow-md rounded-lg p-6 space-y-8">
        <PolicyComponent />
      </div>
    </section>
  );
};

export default Policy;
