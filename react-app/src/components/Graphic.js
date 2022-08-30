import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCovidDataDaily } from "../redux/covid/covidSlice";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

export default function Graphic() {

  const dispatch = useDispatch();
  const covidSliceContext = useSelector((state) => state.covidSliceContext);

  useEffect(() => {
    dispatch(getAllCovidDataDaily());
  },[dispatch]);

  return (
    <section className="graphic">
      <div className="wrapper">
        <LineChart className="item" width={1232} height={300} data={[
                            covidSliceContext.covidData.confirmed.value,
                            covidSliceContext.covidData.deaths.value,
                            covidSliceContext.covidData.confirmed.value - covidSliceContext.covidData.deaths.value]}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    </section>
  );
}


