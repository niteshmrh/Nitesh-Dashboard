import React from "react";
import { Icons } from "../../../assets/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ReferencesModal from "./ReferencesModal";

function References(props) {
  return (
    <div className="card border-0">
      <div className="card-header ">
        <div className="d-flex justify-content-end">
          <div>
            <button
              className="btn btn-outline"
              data-bs-toggle="modal"
              data-bs-target="#referencesModal"
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
            icon={Icons.BsPeopleFill}
          >
            <h5 className="vertical-timeline-element-title text-center">
              Reference No. 1
            </h5>
            <p>
              <strong>Name :</strong> Mohit
            </p>

            <p>
              <strong>Relation :</strong> ABC
            </p>
            <p>
              <strong>Phone Number :</strong>+91 9878987653
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
            icon={Icons.BsPeopleFill}
          >
            <h5 className="vertical-timeline-element-title text-center">
              Reference No. 2
            </h5>
            <p>
              <strong>Name :</strong> Mohit
            </p>

            <p>
              <strong>Relation :</strong> ABC
            </p>
            <p>
              <strong>Phone Number :</strong>+91 9878987653
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <ReferencesModal />
    </div>
  );
}

export default References;
