import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import ChatHistory from "../Components/ChatHistory";
import PromptBar from "../Components/PromptBar";
import ChatResponseIcons from "../Components/chats-components/ChatResponseIcons";
import PromptQuery from "../Components/chats-components/PromptQuery";
import ChatNavbar from "../Components/chats-components/ChatNavbar";
import PromptResponse from "../Components/chats-components/PromptResponse";
import { useOutletContext } from "react-router-dom";

const sampleData = [
  {
    prompt: "Describe a leaky faucet in the kitchen.",
    promptResponse:
      "The faucet in the kitchen drips water continuously, causing a small puddle to form over time. The leakage seems to come from the base of the faucet.There is a visible crack running through a ceramic tile on the shower wall. The crack appears to be the result of either a heavy impact or consistent pressure over time.There is a visible crack running through a ceramic tile on the shower wall. The crack appears to be the result of either a heavy impact or consistent pressure over time.There is a visible crack running through a ceramic tile on the shower wall. The crack appears to be the result of either a heavy impact or consistent pressure over time.tile on the shower wall. The crack appears to be the result of either a heavy impact or consistent pressure over time.There is a visible crack running through a ceramic tile on the shower wall. The crack appears to be the result of either a heavy impact or consistent pressure over time.tile on the shower wall. The crack appears to be the result of either a heavy impact or consistent pressure over time.There is a visible crack running through a ceramic tile on the shower wall. The crack appears to be the result of either a heavy impact or consistent pressure over time.",
  },
  // {
  //   prompt: "Explain a cracked tile in the bathroom.",
  //   promptResponse:
  //     "There is a visible crack running through a ceramic tile on the shower wall. The crack appears to be the result of either a heavy impact or consistent pressure over time.",
  // },
  // {
  //   prompt: "Detail the condition of the attic insulation.",
  //   promptResponse:
  //     "The attic insulation looks worn and uneven in some areas. Fiberglass batts are partially detached, reducing their ability to retain heat and energy.",
  // },
  // {
  //   prompt: "Describe the exterior paint condition of the house.",
  //   promptResponse:
  //     "The exterior paint is peeling and chipping, particularly around the window frames and doorways. This exposes the wood beneath, making it susceptible to water damage.",
  // },
  // {
  //   prompt: "Explain the functionality of the electrical panel.",
  //   promptResponse:
  //     "The electrical panel appears dated but functional. Some labels are missing or unclear, making it difficult to identify circuit breakers. No evident signs of burning or corrosion.",
  // },
  // {
  //   prompt: "Detail the state of the garage door opener.",
  //   promptResponse:
  //     "The garage door opener operates but emits a loud noise when in use. The chain drive might need lubrication, and the sensors should be tested for proper alignment and responsiveness.",
  // },
];

function ChatsPage() {
  const [inputBoxExpanded, setInputBoxExpaned] = useState(false);
  const { setPage, promptInput } = useOutletContext();
  useEffect(() => {
    setPage("dashboard-pages");
  }, []);
  return (
    <section className="land-sec home-page-main">
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-0">
            <div className="d-flex">
              <SideBar />
              <ChatHistory />
              {/* <!-- Main Content --> */}
              <div className="main-content flex-grow-1 p-4">
                <ChatNavbar />

                <div className=" m-auto relative">
                  <div
                    className={`${
                      inputBoxExpanded
                        ? "chat-container-height"
                        : "chat-container"
                    }`}
                  >
                    <div
                      className="position-fixed"
                      style={{ top: "14rem", left: "22rem" }}
                    >
                      <ChatResponseIcons />
                    </div>

                    {sampleData.map(({ prompt, promptResponse }) => (
                      <div
                        style={{ width: "900px", marginLeft: "9rem" }}
                        key={prompt}
                      >
                        <div className="response pt-1 d-flex flex-column flex-start gap-3 ">
                          <PromptQuery querydata={prompt} />
                          <PromptResponse queryResponseData={promptResponse} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center bottom-input">
                    <div className="w-90 m-auto">
                      <PromptBar
                        inputBoxExpanded={inputBoxExpanded}
                        setInputBoxExpaned={setInputBoxExpaned}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatsPage;
