import React from "react";
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web Application running on Netlify. 
          The landing page should include the following: Your full name and section  Links to each of the Lab assignments Link to 
          the Kanbas application links to all relevant source code repositories 
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br /><br />
        <table align="center">
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Points</label>
                </td>
                <td align="left" valign="top">
                    <input id="wd-points" value={100} />
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Assignment Group</label>
                </td>
                <td align="left" valign="top">
                    <select>
                        <option value="assignments">ASSIGNMENTS</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Display Grade as</label>
                </td>
                <td align="left" valign="top">
                    <select>
                        <option value="percentage">Percentage</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-display-grade">Display Grade as</label>
                </td>
                <td align="left" valign="top">
                    <select>
                        <option value="percentage">Percentage</option>
                    </select>
                </td>
            </tr>
               <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td align="left" valign="top">
                    <select>
                        <option value="online">Online</option>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="wd-entry-options">Online Entry Options </label> <br />
                    <input type="checkbox" id="text-entry" name="text-entry" value="Text Entry" />
                    <label htmlFor="vehicle1"> Text Entry</label><br />
                    <input type="checkbox" id="website-url" name="website-url" value="Website URL" />
                    <label htmlFor="vehicle2"> Website URL</label><br />
                    <input type="checkbox" id="media-recordings" name="media-recordings" value="Media Recordings" />
                    <label htmlFor="vehicle3"> Media Recordings</label><br />
                    <input type="checkbox" id="student-annotation" name="student-annotation" value="Student Annotation" />
                    <label htmlFor="vehicle3"> Student Annotation</label><br />
                    <input type="checkbox" id="file-uploads" name="file-uploads" value="File Uploads" />
                    <label htmlFor="vehicle3"> File Uploads</label><br />
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-assign">Assign</label>
                </td>
                <td align="left" valign="top">
                    <label htmlFor="wd-assign-to">Assign to</label><br />
                    <input id="wd-assign-to-input" value="Everyone" /><br /><br />
                    <label htmlFor="wd-due">Due</label><br />
                    <input type="date" id="wd-due-date" name="wd-due-date" value="2024-05-13"></input><br /><br />

                    <td>
                        <label htmlFor="wd-available">Available</label><br />
                        <input type="date" id="wd-available-date" name="wd-available-date" value="2024-05-06"></input><br /><br />
                    </td>
                    <td>
                        <label htmlFor="wd-until">Until</label><br />
                        <input type="date" id="wd-until-date" name="wd-until-date" value="2024-05-20"></input><br /><br />
                    </td>
                </td>
            </tr>
      </table>
      <hr />
      <div id="wd-submit-buttons" align="right">
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
);}

  