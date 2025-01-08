import React, { useState } from "react";
import Paragraph from "../Components/before-onboarding/Paragraph";
import StepFlow from "../Components/before-onboarding/StepFlow";

function OnboardingPage1() {
  const [paraType, setParaType] = useState(1);

  const para1 = `Comments will be generated as a single, cohesive paragraph, like
            this one. Sleuther ensures each comment includes professional
            insights, such as implications of the issue, along with clear client
            recommendations. The goal is to provide a smooth, flowing narrative
            that is easy to understand.`;
  const para2 = `Paragraph 2: Comments will be generated as a single, cohesive paragraph, like
            this one. Sleuther ensures each comment includes professional
            insights, such as implications of the issue, along with clear client
            recommendations. The goal is to provide a smooth, flowing narrative
            that is easy to understand.`;
  const para3 = `Paragraph 3: Comments will be generated as a single, cohesive paragraph, like
            this one. Sleuther ensures each comment includes professional
            insights, such as implications of the issue, along with clear client
            recommendations. The goal is to provide a smooth, flowing narrative
            that is easy to understand.`;

  return (
    <section className="step-sec">
      <div className="container">
        <StepFlow />

        <div className="content">
          <h2>Choose comment format</h2>
          <div className="options">
            <div
              className={`option ${paraType === 1 && "selectedOption"}`}
              onClick={() => setParaType(1)}
            >
              <input
                type="radio"
                id="paragraph"
                name="format"
                checked={paraType === 1}
                readOnly
              />
              <label htmlFor="paragraph">Paragraph</label>
            </div>

            <div
              className={`option ${paraType === 2 && "selectedOption"}`}
              onClick={() => setParaType(2)}
            >
              <input
                type="radio"
                id="paragraph-titles"
                name="format"
                checked={paraType === 2}
                readOnly
              />
              <label htmlFor="paragraph-titles">Paragraph with titles</label>
            </div>

            <div
              className={`option ${paraType === 3 && "selectedOption"}`}
              onClick={() => setParaType(3)}
            >
              <input
                type="radio"
                id="line-by-line"
                name="format"
                checked={paraType === 3}
                readOnly
              />
              <label htmlFor="line-by-line">Titled line-by-line</label>
            </div>
          </div>

          <div className="description">
            {paraType === 1 && <Paragraph content={para1} />}
            {paraType === 2 && <Paragraph content={para2} />}
            {paraType === 3 && <Paragraph content={para3} />}
          </div>

          <div className="navigation">
            <button>Next →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnboardingPage1;
