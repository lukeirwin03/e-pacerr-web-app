import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions",
};

const FAQPage = () => {
  return (
    <div className="content">
      <div className="container">
        <div>
          <div className="section">
            <h2 className="sectionHeader">Frequently asked questions</h2>
            <h6 className="subheading">Jump to a question: </h6>

            <div className="faqLinks">
              <a href="/faq" className="link">
                What is a frequently asked question?
              </a>
              <a href="/faq" className="link">
                What is a frequently asked question?
              </a>
              <a href="/faq" className="link">
                What is a frequently asked question?
              </a>
              <a href="/faq" className="link">
                What is a frequently asked question?
              </a>
              <a href="/faq" className="link">
                What is a frequently asked question?
              </a>
            </div>

            <div className="question">
              <h6 className="subheading">
                What is a frequently asked question?
              </h6>
              <div className="text">
                Here is where you can write the answer to that question.
              </div>
            </div>
            <div className="question">
              <h6 className="subheading">
                What is a frequently asked question?
              </h6>
              <div className="text">
                Here is where you can write the answer to that question.
              </div>
            </div>
            <div className="question">
              <h6 className="subheading">
                What is a frequently asked question?
              </h6>
              <div className="text">
                Here is where you can write the answer to that question.
              </div>
            </div>
            <div className="question">
              <h6 className="subheading">
                What is a frequently asked question?
              </h6>
              <div className="text">
                Here is where you can write the answer to that question.
              </div>
            </div>
            <div className="question">
              <h6 className="subheading">
                What is a frequently asked question?
              </h6>
              <div className="text">
                Here is where you can write the answer to that question.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
