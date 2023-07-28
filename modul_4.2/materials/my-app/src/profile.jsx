import React from "react";

// function Avatar() {
//   return (
//     <img className="avatar" src="https://images.unsplash.com/photo-1505059152565-42971f574ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" alt="Generasi Gigih" width={100} height={100} />
//   );
// }

// function Avatar({ person, size }) {
//   console.log(person);
//   return (
//     <img
//       className="avatar"
//       src={`https://images.unsplash.com/photo-1505059152565-42971f574ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=${size}&q=80`}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function profile() {
//   return <Avatar person={{ name: "Gigih", imageId: "12ewadeawe" }} size={100} />;
// }

function Avatar({ person, size }) {
  return (
    <>
      <p>{person.imageId}</p>
      <img
        className="avatar"
        src={`https://images.unsplash.com/photo-1505059152565-42971f574ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=${size}&q=80`}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  );
}

export default function profile() {
  return <Avatar person={{ name: "Gigih", imageId: "12ewadeawe" }} size={100} />;
}
