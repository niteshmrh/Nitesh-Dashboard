import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icons } from "../../../assets/icons";
import CurrentAddressModal from "./CurrentAddressModal";
import ProfessionalInfoModal from "./ProfessionalInfoModal";

function PersonalDetails(props) {
  return (
    <div id="personal-details" className="card border-0">
      <div className="card-header ">
        <div className="d-flex justify-content-between">
          <div>Current Address </div>
          <div>
            <button
              className="btn btn-outline"
              data-bs-toggle="modal"
              data-bs-target="#currentAddressModal"
            >
              {Icons.BsPlus} Add More
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#f3f3f482",
              color: "#5a5a5a",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #5a5a5a",
            }}
            iconStyle={{
              background: "#5a5a5a",
              color: "#fff",
            }}
            icon={Icons.BsFillHouseDoorFill}
          >
            <h5 className="vertical-timeline-element-title text-center">
              Registered Address
            </h5>
            <p className="title">
              Address: <b>Delhi</b>
            </p>

            <p>
              Pin Code: <b>3130001</b>
            </p>
            <p>
              Residence Type: <b>Rented</b>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="18th Nov, 2022"
            contentStyle={{
              background: "#f3f3f482",
              color: "#5a5a5a",
            }}
            iconStyle={{
              background: "#f3f3f4",
              color: "#5a5a5a",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #5a5a5a",
            }}
            icon={Icons.BsFillHouseDoorFill}
          >
            <h5 className="vertical-timeline-element-title text-center">
              Updated Address 2
            </h5>
            <p>
              Address: <b>Delhi</b>
            </p>

            <p>
              Pin Code: <b>3130001</b>
            </p>
            <p>
              Residence Type: <b>Rented</b>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div className="card-header ">
        <div className="d-flex justify-content-between">
          <div>Permanent Address </div>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-start mb-3">
          <div className="m-2 fs-14">
            <strong>Address :</strong> Haryana
          </div>
          <div className="m-2 fs-14">
            <strong>PinCode :</strong> 313223
          </div>
          <div className="m-2 fs-14">
            <strong>Resident type :</strong> Owned
          </div>
        </div>
      </div>

      <div className="card-header ">
        <div className="d-flex justify-content-between">
          <div>Professional Info </div>
          <div>
            <button
              className="btn btn-outline"
              data-bs-toggle="modal"
              data-bs-target="#professionalInfoModal"
            >
              {" "}
              {Icons.BsPlus} Add More
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#f3f3f482",
              color: "#5a5a5a",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #5a5a5a",
            }}
            iconStyle={{
              background: "#5a5a5a",
              color: "#fff",
            }}
            icon={Icons.BsCardList}
          >
            <h5 className="vertical-timeline-element-title text-center">
              Professional Details
            </h5>

            <div className="row">
              <div className="col-6">
                <p>
                  <strong>Company Name :</strong> ABC
                </p>
              </div>
              <div className="col-6">
                <p>
                  <strong>Salary :</strong>
                  ABC
                </p>
              </div>
              <div className="col-6">
                <p>
                  <strong>Company Address :</strong>
                  ABC
                </p>
              </div>
              <div className="col-6">
                <p>
                  <strong>Employment type :</strong>
                  ABC
                </p>
              </div>
              <div className="col-6">
                <p>
                  <strong>Designation :</strong>
                  ABC
                </p>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="18th Nov, 2022"
            contentStyle={{
              background: "#f3f3f482",
              color: "#5a5a5a",
            }}
            iconStyle={{
              background: "#f3f3f4",
              color: "#5a5a5a",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #5a5a5a",
            }}
            icon={Icons.BsCardList}
          >
            <h5 className="vertical-timeline-element-title text-center">
              Updated Professional Details
            </h5>

            <div className="row">
              <div className="col-6">
                <p>
                  <strong>Company Name :</strong> ABC
                </p>
              </div>
              <div className="col-6">
                <p>
                  <strong>Salary :</strong>
                  ABC
                </p>
              </div>
              <div className="col-6">
                <p>
                  <strong>Company Address :</strong>
                  ABC
                </p>
              </div>
              <div className="col-6">
                <p>
                  <strong>Employment type :</strong>
                  ABC
                </p>
              </div>
              <div className="col-6">
                <p>
                  <strong>Designation :</strong>
                  ABC
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <CurrentAddressModal />
      <ProfessionalInfoModal />
    </div>
  );
}

export default PersonalDetails;
