import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FaSync, FaCheck, FaRobot, FaCode } from "react-icons/fa"; // Import icons
import "./Css/Home.css";

function Home() {
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function getResponseFromAI() {
    setLoading(true);
    setResponse(""); // Clear previous response
    try {
      const res = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBTk6YWZiQKeCg4_BlSa9Fvq7FzVS68q4w",
        method: "POST",
        data: {
          contents: [
            {
              parts: [
                {
                  text: `${question}  
                  Please analyze the code and respond with one of the following:  
                  - "Code is correct." if the code has no syntax or logical errors.  
                  - If the code is not correct, provide only the exact lines or logic that are incorrect, and explain briefly what is wrong.  
                  Do not include extra suggestions or best practices. Just identify correctness.  
                  Specify the programming language at the beginning of your response.`
                },
              ],
            },
          ],
        },
      });

      if (res.data.candidates && res.data.candidates.length > 0) {
        setResponse(res.data.candidates[0].content.parts[0].text);
      } else {
        setResponse("No response from AI.");
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResponse("An error occurred while fetching the response.");
    } finally {
      setLoading(false);
    }
  }

  const handleRefresh = () => {
    setQuestion("");
    setResponse("");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left">
          <h2>
            <FaCode /> Code
          </h2>{" "}
          {/* Added FaCode icon */}
          <textarea
            rows="40"
            cols="100"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Paste your code here..."
          />
          <div className="button-container">
            <button
              onClick={getResponseFromAI}
              id="review-btn"
              disabled={loading}
            >
              {loading ? (
                "Loading..."
              ) : (
                <>
                  <FaCheck /> Review Code
                </>
              )}
            </button>
            <button onClick={handleRefresh}>
              <FaSync /> Refresh
            </button>
          </div>
        </div>

        <div className="right">
          <h2>
            <FaRobot /> AI Response
          </h2>
          <textarea
            rows="45"
            cols="100"
            id="response-area"
            value={response}
            placeholder="AI response will be displayed here after submitting the code."
            readOnly
            style={{ marginBottom: "20px" }} // Adds space below
          />
        </div>
      </div>
    </>
  );
}

export default Home;
