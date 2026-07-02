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
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Stolt partner for ledende bedrifter
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-lg transition-all duration-300 group"
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className="max-w-full h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
