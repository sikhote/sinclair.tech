import puppeteer from 'puppeteer';

export async function GET() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://sinclair.tech/resume';
  await page.goto(url, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
  });
  await browser.close();
  return new Response(pdf, { headers: { 'Content-Type': 'application/pdf' } });
}
