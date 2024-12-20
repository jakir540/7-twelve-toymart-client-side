import React, { useEffect, useState } from "react";
import Toy from "../Toy/Toy";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    fetch(
      `https://7-twelve-toymart-server.vercel.app/searceToyByName/${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [activeTab]);

  useEffect(() => {
    fetch("https://7-twelve-toymart-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-10">
      <div className="flex  flex-col justify-center items-center gap-3">
        <button
          onClick={() => handleTabClick("allToys")}
          className="btn text-center font-semibold"
        >
          {" "}
          All Category toys {toys.length}
        </button>

        <Tabs>
          <TabList>
            <Tab
              onClick={() => handleTabClick("bus")}
              className="btn text-center font-semibold mx-3 bg-orange-900 border-none "
            >
              {" "}
              Buses
            </Tab>
            <Tab
              onClick={() => handleTabClick("Bikes")}
              className="btn text-center font-semibold mx-3 bg-orange-900 border-none "
            >
              {" "}
              Bikes
            </Tab>
            <Tab
              onClick={() => handleTabClick("Trucks")}
              className="btn text-center font-semibold mx-3 bg-orange-900 border-none "
            >
              {" "}
              Trucks
            </Tab>
          </TabList>
        </Tabs>
      </div>

      <div className=" max-w-7xl grid lg:grid-cols-3 mx-auto gap-4 my-16">
        {toys.map((toy) => (
          <Toy key={toy._id} toy={toy}></Toy>
        ))}
      </div>
    </div>
  );
};

export default Category;
