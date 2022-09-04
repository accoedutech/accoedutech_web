import React from "react";
import { UserOutlined } from "@ant-design/icons";

import alumniAvtar from "../../assets/alumni.png";
import { Avatar, Tooltip } from "antd";
import "./Alumni.scss";
import Title from "../Common/Title";
const alumniDATA = [
  {
    id: 1,
    name: "John Doe",
    image: <UserOutlined />,
    left: "45%",
    top: "50px",
  },
  {
    id: 2,
    name: "John Doe",
    image: <UserOutlined />,
    left: "30%",
    top: "300px",
  },
  {
    id: 3,
    name: "John Doe",
    image: <UserOutlined />,
    left: "22%",
    top: "150px",
  },
  {
    id: 4,
    name: "John Doe",
    image: <UserOutlined />,
    left: "38%",
    top: "500px",
  },
  {
    id: 5,
    name: "John Doe",
    image: <UserOutlined />,
    left: "8%",
    top: "200px",
  },
  {
    id: 6,
    name: "John Doe",
    image: <UserOutlined />,
    left: "15%",
    top: "450px",
  },
  {
    id: 7,
    name: "John Doe",
    image: <UserOutlined />,
    left: "60%",
    top: "150px",
  },
  {
    id: 8,
    name: "John Doe",
    image: <UserOutlined />,
    left: "75%",
    top: "80px",
  },
  {
    id: 9,
    name: "John Doe",
    image: <UserOutlined />,
    left: "62%",
    top: "350px",
  },
  {
    id: 10,
    name: "John Doe",
    image: <UserOutlined />,
    left: "85%",
    top: "220px",
  },
  {
    id: 11,
    name: "John Doe",
    image: <UserOutlined />,
    left: "90%",
    top: "450px",
  },
  {
    id: 12,
    name: "John Doe",
    image: <UserOutlined />,
    left: "72%",
    top: "450px",
  },
  {
    id: 13,
    left: "5%",
    top: "50px",
  },
  {
    id: 14,
    left: "18%",
    top: "280px",
  },
  {
    id: 15,
    left: "5%",
    top: "350px",
  },
  {
    id: 16,
    left: "27%",
    top: "450px",
  },
  {
    id: 17,
    left: "33%",
    top: "110px",
  },
  {
    id: 18,
    left: "17%",
    top: "20px",
  },
  {
    id: 19,
    left: "50%",
    top: "450px",
  },
  {
    id: 20,
    left: "70%",
    top: "200px",
  },
  {
    id: 21,
    left: "80%",
    top: "340px",
  },
  {
    id: 22,
    left: "88%",
    top: "50px",
  },
  {
    id: 23,
    left: "62%",
    top: "500px",
  },
  {
    id: 24,
    left: "60%",
    top: "10px",
  }
];

const Alumni = () => {
  const [show, setShow] = React.useState(false);
  const divRef = React.useRef(null);


  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(
        divRef.current.offsetTop,
        divRef.current.offsetHeight,
        window.scrollY
      );
      if (
        window.scrollY > divRef.current.offsetTop ||
        window.scrollY > divRef.current.offsetHeight
      ) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <>
    <div ref={divRef} className="alumni_parent"> 
      <Title fontSize="40px">Our Alumni </Title>
 
      <div className="alumni_container">

        <div className="alumni_image">
          <Avatar className="main_avatar" size={200} src={alumniAvtar} />
          {/* <h2>
            It's no easy task to gain acceptance in this rigorous and selective
            program. We're proud of our graduates - they represent the best and
            brightest of their generation.
          </h2> */}
        </div>
        {alumniDATA.map((alumni) => (
          <div
            style={{ left: alumni.left, top: alumni.top }}
            className={`randomAvatar ${!show && "fixed"}`}
          >
            <Tooltip title={alumni.name}>
              <Avatar style={{backgroundColor: '#ffb948'}} key={alumni.id} size={64} icon={alumni.image} />
            </Tooltip>
          </div>
        ))}
      </div>
 
    </div>
    </>
  );
};

export default Alumni;
