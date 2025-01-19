"use client";
import Image from "next/image";

const SubmitButton = () => {
  return (
    <button
      onClick={() =>
        alert(
          "You have successfully submitted your email, one of our team will contact you as soon as possible"
        )
      }
      type="submit"
      className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full"
    >
      <Image
        src={"/assets/newsletter/send.svg"}
        alt="send-icon"
        width={30}
        height={30}
      />
    </button>
  );
};

export default SubmitButton;
