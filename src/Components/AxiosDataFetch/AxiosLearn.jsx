import { useState, useEffect } from "react";
import axios from "axios";
import { Audio, BallTriangle, Bars, DNA } from "react-loader-spinner";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AxiosLearn = () => {
  const [phoneData, setPhoneData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((response) => {
        const newPhoneData = response.data.data;
        const phonesWithFakeData = newPhoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhoneData(phonesWithFakeData);

        // Simulate loading for 2 seconds before setting loading to false
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => setError(error.message));
  }, []);
  console.log(error);

  return (
    <div style={{ width: "100%", height: 400 }}>
      {loading ? (
        <div className="flex ">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <ResponsiveContainer>
          <BarChart data={phoneData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AxiosLearn;
