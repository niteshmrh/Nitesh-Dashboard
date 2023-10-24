import {
  RiArrowDropRightLine,
  RiArrowRightSLine,
  RiMenu2Fill,
} from "react-icons/ri";
import {
  AiOutlineDashboard,
  AiOutlineCluster,
  AiOutlineFileSync,
  AiOutlinePlus,
  AiFillEye,
  AiOutlineDownload,
} from "react-icons/ai";

import { FaCaretDown, FaGreaterThan, FaUsers } from "react-icons/fa";
import { VscCircleFilled, VscCircle } from "react-icons/vsc";
import { RxPerson } from "react-icons/rx";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

import {
  BsCalendarCheck,
  BsCardList,
  BsCurrencyRupee,
  BsFiles,
  BsFillHouseDoorFill,
  BsPeopleFill,
  BsPlus,
} from "react-icons/bs";

export const Icons = {
  RiMenu2Fill: <RiMenu2Fill />,
  RxPerson: <RxPerson />,
  FaCaretDown: <FaCaretDown />,
  AiOutlineDashboard: <AiOutlineDashboard />,
  AiOutlineCluster: <AiOutlineCluster />,
  bullets: (
    <>
      <VscCircleFilled
        style={{ fontSize: "8px", margin: "-8px", padding: "0px" }}
      />

      <VscCircle style={{ fontSize: "8px", margin: "5px", padding: "0px" }} />
    </>
  ),
  arrow: <MdKeyboardDoubleArrowRight />,
  fileSync: <AiOutlineFileSync />,
  outlinePlus: <AiOutlinePlus />,
  BsCurrencyRupee: <BsCurrencyRupee />,
  BsFillHouseDoorFill: <BsFillHouseDoorFill />,
  BsCardList: <BsCardList />,
  BsPlus: <BsPlus />,
  AiFillEye: <AiFillEye />,
  AiOutlineDownload: <AiOutlineDownload />,
  BsPeopleFill: <BsPeopleFill />,

  MdKeyboardDoubleArrowRight: (
    <>
      <MdKeyboardDoubleArrowRight />
    </>
  ),
  BsCalendarCheck: <BsCalendarCheck />,
  BsFiles: <BsFiles />,
  RiArrowRightSLine: <RiArrowRightSLine />,
  GiReceiveMoney: <GiReceiveMoney />,
  FaUsers: <FaUsers />,
};
