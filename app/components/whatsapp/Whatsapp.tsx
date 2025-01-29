import { IoLogoWhatsapp } from "react-icons/io";

export default function Whatsapp() {
  return (
    <section>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <a href="https://api.whatsapp.com/send?phone=953678592">
        <div className="btn-wsp fixed w-[55px] h-[55px] bottom-[30px] right-8 bg-[#0df053] rounded-[50px] ">
          <IoLogoWhatsapp className="w-[55px] h-[55px]" />
        </div>
      </a>
    </section>
  );
}
