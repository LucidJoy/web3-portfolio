import React, { useState, useEffect } from "react";
import { FaDonate } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap";
import img from "../../assets/img1.png";
import "./Projects.css";

const Projects = ({ state }) => {
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState();

  let limit = 6;

  useEffect(() => {
    const { contract } = state;
    const projectDetails = async () => {
      const projects = await contract.methods.allProjects().call();
      setProjects(projects);
    };

    contract && projectDetails();
  }, [state]);

  const truncateText = (text) => {
    const words = text.split(" ");

    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else return text;
  };

  const donateEth = async (e) => {
    e.preventDefault();
    try {
      const { contract, web3 } = state;
      const eth = document.querySelector("#eth").value;
      const weiValue = web3.utils.toWei(eth, "ether");
      const accounts = await web3.eth.getAccounts();
      const transaction = await contract.methods
        .donate()
        .send({ from: accounts[0], value: weiValue, gas: 480000 });

      alert("Transaction successful");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <section className='project-section'>
      <h1 className='title'>Projects </h1>
      <div className='card-wrapper'>
        {projects &&
          projects.map((project) => {
            return (
              <a
                href={`https://github.com/LucidJoy/${project.githubLink}`}
                className='project-card'
                target='_blank'
                rel='noopener noreferrer'
                key={project.id}
              >
                <div className='card-img'>
                  <img
                    src={`https://jade-fundamental-hawk-687.mypinata.cloud/ipfs/${project.image}`}
                    alt='img'
                  />
                </div>
                <div className='card-text'>
                  <h3>{project.name}</h3>
                  <p>{truncateText(project.description)}</p>
                </div>
              </a>
            );
          })}
      </div>
      {/*  =========popup bootstrap==========  */}

      <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Enter the ETH you want to donate!
        </ModalHeader>
        <ModalBody>
          <form onSubmit={donateEth}>
            <Row>
              <input id='eth' type='text' />
              <Button className='mt-4'>Send</Button>
            </Row>
          </form>
        </ModalBody>
      </Modal>
      {/*  =========popup bootstrap end==========  */}
      <p className='donate' onClick={() => setModal(true)}>
        Liked the dummyValue's ? Consider donating Eth's{" "}
        <FaDonate className='icon' />
      </p>
    </section>
  );
};

export default Projects;
