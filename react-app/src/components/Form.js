import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, countrySelectors} from "../redux/country/countrySlice";
import { setCountryName } from "../redux/covid/covidSlice";

import ReactFlagsSelect from "react-flags-select";

export default function Form() {
  const dispatch = useDispatch();
  const countries = useSelector(countrySelectors.selectAll);
  const [selected, setSelected] = useState();
  
  let options = [];

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    for (let i = 0; i < countries.length; i++) {
      options.push({ value: countries[i].name, label: countries[i].name });
    }
  }, [countries]);

  const handleChange = (code) => {
    setSelected(code);
    dispatch(setCountryName(code));
  };

  return (
    <section className="form">
      <div className="wrapper">
        <div className="inner">
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => handleChange(code)}
            placeholder="Global"
            searchable={true}
            showSelectedLabel={true}
            showOptionLabel={true}
            className="w-72 mt-6"
          />
        </div>
      </div>
    </section>
  );
}
