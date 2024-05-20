"use client";

import Card from "@/components/card";

import OrganizationProxyService from "@/lib/organization/OrganizationProxyService";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const [data, setData] = useState([])
  const request = new OrganizationProxyService();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await request.getAll()
        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    };
    fetchData(); 
  },[])

  return (
      <div className="h-full flex flex-row justify-between items-center pt-20">
        {data.map((item: { nombre: String; nombreWS: String; }) =>
          <Card name={item.nombre} workspace={item.nombreWS}/>
        )}
      </div>
  );
}
