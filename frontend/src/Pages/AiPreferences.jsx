import React, { useState } from "react";
import SideBar from "../Components/SideBar";

const AiPreferences = () => {
  const [format, setFormat] = useState("Paragraph");
  const [scope, setScope] = useState("HIABC Scope of Inspection");
  const [inspector, setInspector] = useState("We");
  const [generateTitle, setGenerateTitle] = useState(false);
  const [includeTimelines, setIncludeTimelines] = useState(false);
  const [conciseness, setConciseness] = useState("Concise");

  return (
    <section className="land-sec home-page-main">
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-0">
            <div className="d-flex">
              <SideBar />
              <div className="flex-grow-1 p-4">
                <div className="ai-preferences-container">
                  <h2 className="preferences-title mb-5">AI preferences</h2>

                  <div className="preferences-section mb-4">
                    <label className="preferences-label">
                      When referring to the standard or scope
                    </label>
                    <select
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      className="form-select preferences-select"
                    >
                      <option>HIABC Scope of Inspection</option>
                      <option>Other Standard</option>
                    </select>
                  </div>

                  <hr className="preferences-divider" />

                  <div className="preferences-section mb-4">
                    <label className="preferences-label">Change format</label>
                    <div className="format-options d-flex justify-content-around">
                      <button
                        className={`format-btn ${
                          format === "Paragraph" ? "active" : ""
                        }`}
                        onClick={() => setFormat("Paragraph")}
                      >
                        Paragraph
                      </button>
                      <button
                        className={`format-btn ${
                          format === "Paragraph with titles" ? "active" : ""
                        }`}
                        onClick={() => setFormat("Paragraph with titles")}
                      >
                        Paragraph with titles
                      </button>
                      <button
                        className={`format-btn ${
                          format === "Titled line-by-line" ? "active" : ""
                        }`}
                        onClick={() => setFormat("Titled line-by-line")}
                      >
                        Titled line-by-line
                      </button>
                    </div>
                  </div>

                  <div className="preferences-section mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="preferences-label mb-0">
                        Generate title for each comment
                      </label>
                      <div className="form-check form-switch preferences-switch">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={generateTitle}
                          onChange={(e) => setGenerateTitle(e.target.checked)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="preferences-section mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="preferences-label mb-0">
                        Include timelines to client actions
                      </label>
                      <div className="form-check form-switch preferences-switch">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={includeTimelines}
                          onChange={(e) =>
                            setIncludeTimelines(e.target.checked)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="preferences-divider" />

                  <div className="preferences-section mb-4">
                    <label className="preferences-label">
                      Refer to the inspector as
                    </label>
                    <select
                      value={inspector}
                      onChange={(e) => setInspector(e.target.value)}
                      className="form-select preferences-select"
                    >
                      <option>We</option>
                      <option>I</option>
                    </select>
                  </div>

                  <div className="preferences-section mb-4">
                    <label className="preferences-label">
                      Conciseness and detail level
                    </label>
                    <div className="conciseness-options d-flex justify-content-around">
                      <button
                        className={`conciseness-btn ${
                          conciseness === "Very concise" ? "active" : ""
                        }`}
                        onClick={() => setConciseness("Very concise")}
                      >
                        Very concise
                      </button>
                      <button
                        className={`conciseness-btn ${
                          conciseness === "Concise" ? "active" : ""
                        }`}
                        onClick={() => setConciseness("Concise")}
                      >
                        Concise
                      </button>
                      <button
                        className={`conciseness-btn ${
                          conciseness === "Concise but detailed" ? "active" : ""
                        }`}
                        onClick={() => setConciseness("Concise but detailed")}
                      >
                        Concise but detailed
                      </button>
                      <button
                        className={`conciseness-btn ${
                          conciseness === "Detailed" ? "active" : ""
                        }`}
                        onClick={() => setConciseness("Detailed")}
                      >
                        Detailed
                      </button>
                    </div>
                  </div>

                  <div className="text-end mt-5">
                    <button className="save-btn">SAVE CHANGES</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPreferences;
