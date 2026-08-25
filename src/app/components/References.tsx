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
    <section className="py-16 bg-base-200">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] 3xl:max-w-[1680px] 4xl:max-w-[1800px] 5xl:max-w-[1920px] mx-auto px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-2">
            Våre kunder
          </p>
          <h2 className="text-3xl lg:text-[44px] font-bold text-base-content tracking-tight leading-[1.1]">
            Stolt partner for ledende bedrifter
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-6 lg:gap-12">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="flex-1 min-w-[120px] flex items-center justify-center p-1 sm:p-4"
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
