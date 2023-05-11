export default function EmptyCard() {
 const repeat = [1, 2, 3, 4, 5, 6, 7, 8];
 return (
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center'}}>
   {repeat.map((x) => {
    return (
     <div key={x}
      style={{
       width: "290px",
       height: "356px",
       display: "flex",
       flexDirection: "column",
       gap: "1.5rem",
      }}
     >
      <div
       style={{
        width: "290px",
        height: "150px",
        backgroundColor: "#CED4DA",
        borderRadius: "6px",
       }}
      ></div>
      <div
       style={{
        width: "290px",
        height: "20px",
        backgroundColor: "#CED4DA",
        borderRadius: "6px",
       }}
      ></div>
      <div
       style={{
        width: "290px",
        height: "20px",
        backgroundColor: "#CED4DA",
        borderRadius: "6px",
       }}
      ></div>
      <div
       style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
       }}
      >
       <div style={{ display: "flex", gap: "1.5rem" }}>
        <div
         style={{
          width: "50px",
          height: "32px",
          backgroundColor: "#CED4DA",
          borderRadius: "6px",
         }}
        ></div>
        <div
         style={{
          width: "50px",
          height: "32px",
          backgroundColor: "#CED4DA",
          borderRadius: "6px",
         }}
        ></div>
       </div>
       <div
        style={{
         width: "100px",
         height: "13px",
         backgroundColor: "#CED4DA",
         borderRadius: "6px",
        }}
       ></div>
      </div>
     </div>
    );
   })}
  </div>
 );
}
