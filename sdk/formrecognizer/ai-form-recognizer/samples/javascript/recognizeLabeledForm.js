// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Recognize Labeled Form
 */

const { FormRecognizerClient, AzureKeyCredential } = require("../../dist");
const fs = require("fs");

// Load the .env file if it exists
require("dotenv").config();

async function main() {
  // You will need to set these environment variables or edit the following values
  const endpoint = process.env["COGNITIVE_SERVICE_ENDPOINT"] || "<cognitive services endpoint>";
  const apiKey = process.env["COGNITIVE_SERVICE_API_KEY"] || "<api key>";
  const modelId = "8f83f7c3-9666-496b-9335-e7ea5685b5e3"; // trained with labels
  const path = "c:/temp/Invoice_6.pdf";

  if (!fs.existsSync(path)) {
    throw new Error(`Expecting file ${path} exists`);
  }

  const readStream = fs.createReadStream(path);

  const client = new FormRecognizerClient(endpoint, new AzureKeyCredential(apiKey));
  const poller = await client.beginRecognizeLabeledForms(modelId, readStream, "application/pdf", {
    onProgress: (state) => { console.log(`status: ${state.status}`); }
  });
  await poller.pollUntilDone();
  const response = poller.getResult();

  if (!response) {
    throw new Error("Expecting valid response!");
  }

  console.log(response.status);
  console.log("### Document results:")
  for (const document of response.extractedForms || []) {
    console.log(`${document.docType}, pages ${document.pageRange}`);
    console.log("Fields");
  }

  console.log("### Page results:")
  for (const page of response.extractedPages || []) {
    console.log(`Page number: ${page.pageNumber}`);
    console.log(`Form type Id: ${page.formTypeId}`);
    console.log("key-value pairs");
    for (const field of page.fields || []) {
      console.log(`\tkey: ${field.fieldLabel}, value: ${field.valueText}`);
    }
    console.log("Tables");
    for (const table of page.tables || []) {
      for (const row of table.rows) {
        for (const cell of row.cells) {
          console.log(`cell (${cell.rowIndex},${cell.columnIndex}) ${cell.text}`);
        }
      }
    }
  }

  console.log(response.rawExtractedPages);
  console.log(response.errors);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
