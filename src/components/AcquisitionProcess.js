// src/components/AcquisitionProcess.js
import React, { useState } from 'react';

function AcquisitionProcess() {
  const [stage, setStage] = useState(1);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      {stage === 1 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Step 1: Upload Financial & Legal Documents
          </h2>
          <input type="file" multiple className="mb-4" />
          <div className="space-x-2">
            <button
              onClick={() => alert('AI document analysis in progress...')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Analyze Documents (AI)
            </button>
            <button
              onClick={() => setStage(2)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Next
            </button>
          </div>
        </section>
      )}

      {stage === 2 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Step 2: Due Diligence Checklist
          </h2>
          <ul className="space-y-2 mb-4">
            <li><input type="checkbox" /> Financial statements reviewed</li>
            <li><input type="checkbox" /> Legal compliance confirmed</li>
            <li><input type="checkbox" /> Business assets verified</li>
          </ul>
          <button
            onClick={() => setStage(3)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Next
          </button>
        </section>
      )}

      {stage === 3 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Step 3: Communication & Negotiation
          </h2>
          <textarea
            rows={5}
            placeholder="Chat with your matched party..."
            className="w-full border p-2 mb-2 rounded"
          ></textarea>
          <div className="space-x-2">
            <button
              onClick={() => alert('AI chat summary generated')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Summarize Chat (AI)
            </button>
            <button
              onClick={() => setStage(4)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Next
            </button>
          </div>
        </section>
      )}

      {stage === 4 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Step 4: Finalize Deal
          </h2>
          <button
            onClick={() => alert('eSignature process started')}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Sign Agreement
          </button>
        </section>
      )}
    </div>
  );
}

export default AcquisitionProcess;
