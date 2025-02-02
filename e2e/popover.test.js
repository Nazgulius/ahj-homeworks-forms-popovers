import puppeteer from "puppeteer";

describe("Page start", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("Popover should render on page start", async () => {
    await page.goto("http://localhost:8080/");

    await page.waitForSelector(".popover");
  });

  test("click button should add ._hidden class", async () => {
    jest.setTimeout(20000);
    await page.goto("http://localhost:8080");

    await page.waitForSelector(".btn1");

    const button = await page.$(".btn1");
    await button.click();

    await page.waitForSelector(".popover");

    const popover = await page.$(".popover");
    const hasClassHidden = await page.evaluate((element) => {
      return element.classList.contains("_hidden");
    }, popover);

    expect(hasClassHidden).toBe(false);
  }, 20000);

  afterEach(async () => {
    await browser.close();
  });
});
