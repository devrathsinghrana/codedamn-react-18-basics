import React, { useEffect, useState } from "react";

const AsyncFunctionInUseeffectHooks = () => {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    // This following approach is not recommended
    // By default async returns a promise so chant use this keyword for useEffect callback as it can only have one cleanup function being returned not another promise
    async function fetchData() {
      const data = await fetch("/data.json").then((reqData) => reqData.json());
      setMsg(data.name);
    }
    fetchData();
  }, []);
  return <div>AsyncFunctionInUseeffectHooks msg : {msg}</div>;
};

export default AsyncFunctionInUseeffectHooks;
