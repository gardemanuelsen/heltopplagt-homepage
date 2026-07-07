import intilityLogo from "../../images/logo/intility.png";
import allianceLogo from "../../images/logo/alliance.png";
import sporveienLogo from "../../images/logo/sporveien.png";
import xxlLogo from "../../images/logo/xxl.png";
import riksrevisjonenLogo from "../../images/logo/riksrevisjonen.png";

interface Customer {
  name: string;
  logo: string;
}

export function References() {
  const customers: Customer[] = [
    { name: "Intility", logo: intilityLogo },
    { name: "Alliance Healthcare", logo: allianceLogo },
    { name: "Sporveien", logo: sporveienLogo },
    { name: "XXL", logo: xxlLogo },
    { name: "Riksrevisjonen", logo: riksrevisjonenLogo },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-2">
            Våre kunder
          </p>
          <h2 className="text-3xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-[1.1]">
            Stolt partner for ledende bedrifter
          </h2>
        </div>
        <div className="flex items-center justify-between gap-3 sm:gap-6 lg:gap-12">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="flex-1 min-w-0 flex items-center justify-center p-1 sm:p-4 transition-all duration-300 group"
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className="w-full max-h-8 sm:max-h-12 lg:max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
