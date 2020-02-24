import React, {useState} from "react";
function CheckInput() {
  const [selected, setSelected] = useState(0);

  return (
    <div className={"mx-2 check py-1 px-2 "+(selected?'selected':'')} onClick={()=>setSelected(!selected)}>
        Filter
    </div>
  );
}
export default CheckInput;
