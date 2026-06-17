/**
 * Google Apps Script — Contact Form Email Sender
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Go to https://script.google.com and create a new project
 *    - Name it something like "Testomniac Contact Form"
 *
 * 2. Delete any existing code and paste this entire file
 *    - Click Save (Ctrl+S)
 *
 * 3. Deploy as a Web App
 *    - Click Deploy > New deployment
 *    - Type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click Deploy, then authorize when prompted
 *      (You may need to click "Advanced" > "Go to [project name] (unsafe)"
 *       if Google shows a warning — this is expected for new scripts)
 *
 * 4. Copy the Web App URL
 *    - It will look like: https://script.google.com/macros/s/AKfycb.../exec
 *    - In each HTML file, find the line:
 *        const CONTACT_SCRIPT_URL = 'PASTE_YOUR_CONTACT_APPS_SCRIPT_URL_HERE';
 *    - Replace the placeholder with your URL
 *
 * That's it! Contact form submissions will now send an email to both founders.
 */

function doPost(e) {
  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: 'Invalid JSON' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var name      = (data.name      || '').toString().slice(0, 200);
  var email     = (data.email     || '').toString().slice(0, 200);
  var message   = (data.message   || '').toString().slice(0, 2000);
  var timestamp = (data.timestamp || new Date().toISOString()).toString().slice(0, 50);

  // Basic validation
  if (!email || email.indexOf('@') === -1) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: 'Invalid email' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var subject = 'Testomniac — New contact form message from ' + (name || email);
  var body = [
    'New contact form submission from testomniac.com',
    '',
    'Name:      ' + name,
    'Email:     ' + email,
    'Timestamp: ' + timestamp,
    '',
    'Message:',
    message || '(no message provided)',
  ].join('\n');

  var recipients = 'chebajandas@gmail.com, johnqh@yahoo.com';
  MailApp.sendEmail(recipients, subject, body);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
