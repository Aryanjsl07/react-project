import React, { usestate } from "react";

function Databinding() {
  const [data, setdata] = useState({
    name: "Mohan",
    age: 25
  })
  const handleChange=(event)=>{
    let value = event.target.value;
    setdata({
        ...data,name:value
    });
  }
  return (
    <div>
      <h2>Data Binding</h2>
      <h4> One Way Binding: {data.name}{data.age}
      </h4>
      <div>
        <input type='text' 
        value={data.name}
        onChange
         />
      </div>
    </div>
  );
}
export default Databinding;
