import React from "react";
import { useTable } from "../../Components/Models/useTable";

const SubscribedUsers = () => {
  const attributes = [

    { id: "email", label: "Email" },
    { id: "createdAt", label: "Created At" },
  ];

  
  const { tableUI } = useTable({  attributes, tableType: "SubscribedUsers" });

  return <>{tableUI}</>;
};

export default SubscribedUsers;
