import puppeteer from 'puppeteer';

async function runAutomation() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto('https://rabata.io');
    await page.click('a[href="/register"]');
    await page.waitForSelector('input[name="email"]');
    await page.type('input[name="email"]', 'example@email.com');
    await page.type('input[name="password"]', 'your_password');
    await page.click('button[type="submit"]');

    await page.waitForSelector('button[data-target="#signup"]');
    await page.click('button[data-target="#signup"]');

    await page.waitForSelector('a[href="/privacy-policy"]');
    await page.click('a[href="/privacy-policy"]');
  

    await page.goto('https://rabata.io/pricing');
    await page.waitForSelector('input[name="dataStored"]');
    await page.type('input[name="dataStored"]', '100');
    await page.type('input[name="monthlyEvents"]', '500');
    await page.waitForSelector('div[data-testid="calculatedData"]');
    const calculatedData = await page.$eval('div[data-testid="calculatedData"]', el => el.textContent);
    console.log('Calculated Data:', calculatedData);

    await page.screenshot({ path: 'rabata_screenshot.png' });
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await browser.close();
  }
}

runAutomation();