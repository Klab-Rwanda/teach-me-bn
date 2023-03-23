// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../../../css2/support.css";

// function ContactPage() {

   
//   const [contac, setContacts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://teachmeapi.onrender.com/api/v1/getAllcontact")
//       .then((response) => {
//         setContacts(response.data.contac);
//         console.log(response.data.contac);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   const handleDelete = (id) => {
//     const confirmed = window.confirm("Are you sure you want to delete this contact?");
//     if (confirmed) {
//       axios
//         .delete(`https://teachmeapi.onrender.com/api/v1/contact1/${id}`)
//         .then((response) => {
//           if (response.data.success) {
//             setContacts(contac.filter((contac) => contac?._id !== id));
//             window.location.href = '/deleted'; // replace '/deleted' with the URL of the page you want to redirect to
//           } else {
//             console.error(response.data.error);
//           }
//         })
//         .catch((error) => console.error(error));
//     }
//   };
  
//   const handleReply = (id, email) => {
//     // TODO: implement code to reply to the contact via email
//     console.log(`Replying to contact ${id} at ${email}`);
//   };

//   return (
//     <div className="contact-page">
//       {/* <h1>Contact Us</h1> */}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Date and Time</th>
//             <th>Message</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contac.map((contac) => (
//             <tr key={contac.id}>
//               <td>{contac.name}</td>
//               <td>{contac.email}</td>
//               <td>{contac.createdAt}</td>
//               <td>{contac.message}</td>
//               <td>
//                 <div className="action">
//                   <button
//                     className="reply"
//                     onClick={() => handleReply(contac.id, contac.email)}
//                   >
//                     Reply
//                   </button>
//                   <button
//                     className="delete"
//                     onClick={() => handleDelete(contac?._id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default ContactPage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../css2/support.css";

function ContactPage() {

  const [contac, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const [replyEmail, setReplyEmail] = useState("");

  useEffect(() => {
    axios
      .get("https://teachmeapi.onrender.com/api/v1/getAllcontact")
      .then((response) => {
        setContacts(response.data.contac);
        console.log(response.data.contac);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this contact?");
    if (confirmed) {
      axios
        .delete(`https://teachmeapi.onrender.com/api/v1/contact1/${id}`)
        .then((response) => {
          if (response.data.success) {
            setContacts(contac.filter((contac) => contac?._id !== id));
            window.location.href = '/deleted'; // replace '/deleted' with the URL of the page you want to redirect to
          } else {
            console.error(response.data.error);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  const handleReply = (id, email) => {
    setShowModal(true);
    setReplyEmail(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: implement code to send the reply message via email
    console.log(`Sending reply message "${replyMessage}" to ${replyEmail}`);
    setShowModal(false);
  };

  const handleCancel = () => {
    setReplyMessage("");
    setShowModal(false);
  };


  return (
    <div className="contact-page">
      {/* <h1>Contact Us</h1> */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date and Time</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contac.map((contac) => (
            <tr key={contac.id}>
              <td>{contac.name}</td>
              <td>{contac.email}</td>
              <td>{contac.createdAt}</td>
              <td>{contac.message}</td>
              <td>
  <div className="action">
    <button
      className="reply"
      style={{ backgroundColor: "blue", color: "white" }}
      onClick={() => handleReply(contac.id, contac.email)}
    >
      Reply
    </button>
    <button
      className="delete"
      style={{ backgroundColor: "red", color: "white" }}
      onClick={() => handleDelete(contac?._id)}
    >
      Delete
    </button>
  </div>
</td>

            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={() => handleCancel()}>
        &times;
      </span>
      <h2>Reply to Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="replyEmail">To:</label>
          <input
            type="email"
            id="replyEmail"
            value={replyEmail}
            onChange={(e) => setReplyEmail(e.target.value)}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="replyMessage">Message:</label>
          <textarea
            id="replyMessage"
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Send</button>
          <button type="button" onClick={() => handleCancel()}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
}

export default ContactPage;
