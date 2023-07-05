import React from "react";

export default async function Profile({ users }: { users: any }) {
  const data = await getData();
  return <div> Users
    {data .map((user:any) => {
      return (
        <div> {user.name} </div>
      )
    })}
  </div>;
}

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return data
  
}
