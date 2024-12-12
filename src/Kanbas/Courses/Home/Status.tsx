import React from "react";
import { FaBell, FaBullhorn, FaChartLine, FaCheckCircle, FaHome } from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { MdBarChart } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
export default function CourseStatus() {
    return (
      <div id="wd-course-status" style={{ width: "300px" }}>
        <h2>Course Status</h2>
        <div className="d-flex">
          <div className="w-50 pe-1">
            <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
              <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
          </div>
          <div className="w-50">
            <button className="btn btn-lg btn-success w-100">
              <FaCheckCircle className="me-2 fs-5" /> Publish </button>
          </div>
        </div><br />
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons 
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <IoMdHome className="me-2 fs-5" /> Choose Home Page 
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <MdBarChart className="me-2 fs-5" /> View Course Stream 
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <GrAnnounce className="me-2 fs-5" /> New Announcement 
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <MdBarChart className="me-2 fs-5" /> New Analytics 
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <IoIosNotificationsOutline className="me-2 fs-5" /> View Course Notifications 
        </button>

        {/* Complete the rest of the buttons */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaHome className="me-2 fs-5" /> Choose Home Page{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBullhorn className="me-2 fs-5" /> New Announcement{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaChartLine className="me-2 fs-5" /> New Analytics{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBell className="me-2 fs-5" /> View Course Notifications{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaHome className="me-2 fs-5" /> View Course Stream{" "}
      </button>
      </div>
  );}
  