import React from "react";
import { useEffect } from "react";
import {
  getAllCovidData,
  getAllCovidDataDaily,
} from "../redux/covid/covidSlice";
import { useDispatch, useSelector } from "react-redux";
import CountUp from "react-countup";

export default function Cards() {
  const dispatch = useDispatch();

  const covidSliceContext = useSelector((state) => state.covidSliceContext);

  useEffect(() => {
    dispatch(getAllCovidData(""));
    dispatch(getAllCovidDataDaily());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getAllCovidData(covidSliceContext.countryName));
    dispatch(getAllCovidDataDaily());
  }, [covidSliceContext.countryName]);

  return (
    <div>
      {covidSliceContext !== "" && (
        <section className="cards">
          <div className="wrapper">
            <div className="items">
              <div className="item">
                <div className="inner infected">
                  <h1>Infected</h1>
                  <CountUp
                    start={0}
                    end={covidSliceContext.covidData?.confirmed?.value}
                    duration={1}
                    separator=","
                  />
                  <p>Last Updated at :</p>
                  <p>
                    {new Date(
                      covidSliceContext.covidData?.lastUpdate
                    ).toLocaleString()}
                  </p>
                  <p>
                    Number of infect cases of <br /> COVID-19
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="inner recovered">
                  <h1>Recovered</h1>
                  <CountUp
                    start={0}
                    end={covidSliceContext.covidData?.recovered?.value}
                    duration={1}
                    separator=","
                  />
                  <p>Last Updated at :</p>
                  <p>
                  {new Date(
                      covidSliceContext.covidData?.lastUpdate
                    ).toLocaleString()}
                  </p>
                  <p>
                    Number of infect cases of <br /> COVID-19
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="inner deaths">
                  <h1>Deaths</h1>
                  <CountUp
                    start={0}
                    end={covidSliceContext.covidData?.deaths?.value}
                    duration={1}
                    separator=","
                    className="text-3xl ld:text-5xl"
                  />
                  <p>Last Updated at :</p>
                  <p>
                  {new Date(
                      covidSliceContext.covidData?.lastUpdate
                    ).toLocaleString()}
                  </p>
                  <p>
                    Number of infect cases of <br /> COVID-19
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="inner active">
                  <h1>Active</h1>
                  <CountUp
                    start={0}
                    end={covidSliceContext.dailyData[0]?.totalConfirmed}
                    duration={1}
                    separator=","
                  />
                  <p>Last Updated at :</p>
                  <p>
                  {new Date(
                      covidSliceContext.covidData?.lastUpdate
                    ).toLocaleString()}
                  </p>
                  <p>
                    Number of infect cases of <br /> COVID-19
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
