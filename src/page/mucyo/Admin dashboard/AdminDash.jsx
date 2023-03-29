import React, {useState}from "react";
import ME from '../../../aseets/isimbi.jpg';
import { AiFillLike } from 'react-icons/ai';
import "./admindash.css";
import "./Modal.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];


export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100})),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};


const AdminDash = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission logic
    setShowModal(false); // close modal after form submission
  };
  return (
    <div className="admin-dash">
      <div className="home_header">
        <h2>Welcome to the Admin Dashboard</h2>   
      </div>
      <div>created announcement</div>
      
      <div className="admin_dash_container">
        <div className="options">
          <h3>User Update</h3>
          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>User Type</th>
                <th>Pending Requests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>teacher</td>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>parents</td>
                <td>0/0</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bob Johnson</td>
                <td>student</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="chart">
          <h3>Whole over view of teach me </h3>
          <Line options={options} data={data} />
        </div>
      </div>
      <div className="admin_dash_container">
        <section>
          <h3>Analytics</h3>
          <div className="card">
            <ul>
              <li>Course completion rates</li>
              <li>Quiz scores</li>
              <li>User activity</li>
            </ul>
          </div>
        </section>

        <section>
          <h3>Announcement Management</h3>
          <div className="card">
            <ul>
  
          <li className="course" onClick={handleOpenModal}>
             create announcement to all users
          </li>
          <li>Send announcement to all users</li>
              <li>Send announcement to specific groups of users</li>

              </ul>
              {showModal && (
        <div
          className="modal"
          style={{ display: !showModal ? "none" : "flex" }}
        >
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Create new announcement</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
              <div className="add_course">
              <button type="submit">Create</button>
                <button type="button" onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

          </div>
        </section>

        <section>
          <h3>Settings</h3>
          <div className="card">
            <ul>
              <li>Configure site logo</li>
              <li>Configure color scheme</li>
              <li>Configure email templates</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDash;
