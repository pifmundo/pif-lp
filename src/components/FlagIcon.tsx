import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function FlagIcon({ countryCode }: { countryCode: string }) {
  return (
    <>
      <span className={`fi fi-${countryCode}`} />
    </>
  );
}

export default FlagIcon;
