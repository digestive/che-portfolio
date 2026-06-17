/**
 * Google Apps Script — Waitlist to Google Sheets
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Create a new Google Sheet
 *    - Add headers in Row 1: "Timestamp" (A1), "Email" (B1)
 *
 * 2. Open Apps Script
 *    - In the Sheet, go to Extensions > Apps Script
 *    - Delete any existing code and paste this entire file
 *    - Click Save
 *
 * 3. Deploy as a Web App
 *    - Click Deploy > New deployment
 *    - Type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click Deploy, then authorize when prompted
 *
 * 4. Copy the Web App URL
 *    - Paste it into index.html, replacing PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE
 *
 * That's it! Form submissions will now appear in your Google Sheet.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: 'Invalid JSON' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var email = data.email || '';
  var timestamp = data.timestamp || new Date().toISOString();

  // Prevent duplicate emails
  var emails = sheet.getRange('B:B').getValues().flat();
  if (emails.indexOf(email) !== -1) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'duplicate', message: 'Already on the list' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([timestamp, email]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
