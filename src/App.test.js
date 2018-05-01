import React from "react";
import puppeteer from "puppeteer";
import { shallow, mount, render } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
});

let page;
let browser;
const width = 1920;
const height = 1080;
const APP = "http://localhost:3000/";

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto(APP);
});

beforeEach(async () => {
  await page.reload();
});

afterAll(() => {
  browser.close();
});

describe("Top bar with Cart icon", () => {
  test(
    "Number reflects amount of Products in Cart",
    async () => {
      const btnCart = await page.waitForSelector(".btn--cart");
      let btnCartValue = await (await btnCart.getProperty(
        "innerText"
      )).jsonValue();
      expect(btnCartValue).toEqual("0");
      await page.click(".small-spot__btn");
      btnCartValue = await (await btnCart.getProperty("innerText")).jsonValue();
      expect(btnCartValue).toEqual("1");
    },
    16000
  );
});

describe("Cart dropdown", () => {
  it(
    "should be closed by default",
    async () => {
      const cart = await page.$(".cart");
      expect(cart).toBeNull();
    },
    16000
  );
  test(
    "'CLEAR CART' button removes all Products from Cart",
    async () => {
      const btns = await page.$$(".small-spot__btn");
      for (let i in btns) {
        await btns[i].click();
      }
      const btnCart = await page.waitForSelector(".btn--cart");
      let btnCartValue = await (await btnCart.getProperty(
        "innerText"
      )).jsonValue();
      expect(btnCartValue).toEqual("4");
      await page.click(".btn--cart");
      await page.click(".cart__info__btn--clear");
      btnCartValue = await (await btnCart.getProperty("innerText")).jsonValue();
      expect(btnCartValue).toEqual("0");
    },
    16000
  );
  test(
    "'Remove' button removes the product from Cart",
    async () => {
      const btns = await page.$$(".small-spot__btn");
      for (let i in btns) {
        await btns[i].click();
      }
      const btnCart = await page.waitForSelector(".btn--cart");
      await btnCart.click();
      let btnCartValue = await (await btnCart.getProperty(
        "innerText"
      )).jsonValue();
      expect(btnCartValue).toEqual("4");
      await page.hover(".cart__product");
      await page.click(".product__info__btn");
      btnCartValue = await (await btnCart.getProperty("innerText")).jsonValue();
      expect(btnCartValue).toEqual("3");
    },
    16000
  );
  test(
    "Hovering over Product reveals 'Remove' option",
    async () => {
      await page.click(".small-spot__btn");
      await page.click(".btn--cart");
      const btn = await page.waitForSelector(".product__info__btn", {
        hidden: true
      });
      const btnInnerText = await (await btn.getProperty(
        "innerText"
      )).jsonValue();
      let btnDisplayProperty = await (await btn.getProperty(
        "display"
      )).jsonValue();
      expect(btnInnerText).toEqual("Remove");
      await page.hover(".cart__product");
      try {
        const btnVisible = await page.waitForSelector(".product__info__btn", {
          visible: true,
          timeout: 100
        });
        expect(btnVisible).toBeTruthy();
      } catch (e) {
        expect(e).toBeFalsy();
      }
    },
    16000
  );
});
