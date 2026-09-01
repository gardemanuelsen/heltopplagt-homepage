import intilityLogo from "../../images/logo/intility.png";
import allianceLogo from "../../images/logo/alliance.png";
import sporveienLogo from "../../images/logo/sporveien.png";
import xxlLogo from "../../images/logo/xxl.png";
import riksrevisjonenLogo from "../../images/logo/riksrevisjonen.png";
import { LIVERY_CONTAINER } from "./livery";

const customers = [
  { name: "Intility", logo: intilityLogo },
  { name: "Alliance Healthcare", logo: allianceLogo },
  { name: "Sporveien", logo: sporveienLogo },
  { name: "XXL", logo: xxlLogo },
  { name: "Riksrevisjonen", logo: riksrevisjonenLogo },
];

export function References() {
  return (
    <section className="bg-white text-ink">
      <div className={`${LIVERY_CONTAINER} py-14 lg:py-16`}>
        <p className="text-center font-jakarta text-[14px] text-ink/55">
          Noen av bedriftene vi leverer til
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:mt-10 lg:flex-nowrap lg:justify-between lg:gap-x-10">
          {customers.map((customer) => (
            <li key={customer.name} className="flex items-center justify-center">
              <img
                src={customer.logo}
                alt={customer.name}
                className="max-h-7 w-auto max-w-[8rem] object-contain opacity-75 lg:max-h-8"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
