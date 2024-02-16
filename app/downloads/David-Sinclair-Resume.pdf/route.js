import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export async function GET() {
  const options =
    process.env.NODE_ENV === 'production'
      ? {
          args: chromium.args,
          defaultViewport: chromium.defaultViewport,
          executablePath: await chromium.executablePath(),
          headless: 'new',
          ignoreHTTPSErrors: true,
        }
      : {
          headless: 'new',
          executablePath:
            '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 600, height: 600 });
  const url = 'https://sinclair.tech/resume';
  await page.goto(url, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
  });
  await browser.close();
  return new Response(pdf, { headers: { 'Content-Type': 'application/pdf' } });
}
