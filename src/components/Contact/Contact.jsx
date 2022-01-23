import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteContact } from "../../redux/actions";
import { useDeleteContactByIdMutation, useGetContactsQuery } from "../../services/api";
// import { saveToLocalStore } from "../../utils/localStorage";

// const getVisibleContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase().trim();

//   return contacts.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter) ||
//       contact.number.includes(filter)
//   );
// };
export const Contact = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  console.log(data, error, isLoading);
  const [deleteContact, results] = useDeleteContactByIdMutation();
  console.log(results)
  // const contacts = useSelector(({ contacts, filter }) =>
  //   getVisibleContacts(contacts, filter)
  // );
  // const dispatch = useDispatch();
  // saveToLocalStore("CONTACTS", contacts);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map(({ id, name, phone }) => (
            <li key={id}>
              {name} : {phone}
              <button type="button" onClick={()=>deleteContact(id)}>Delete</button>
            </li>
          ))}
        </>
      ) : null}
    </>
  );
};
