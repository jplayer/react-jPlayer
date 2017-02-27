// import expect from 'expect';
// import { By } from 'selenium-webdriver';
// import test from 'selenium-webdriver/testing';

// import setupDriver from '../../util/common.acceptance';

// test.describe('Play', () => {
//   let driver;
//   const testData = [
//     {
//       fn: () => driver.executeScript('document.querySelector("audio").pause();'),
//       expectedPause: false,
//     },
//     {
//       fn: () => driver.executeScript('document.querySelector("audio").play();'),
//       expectedPause: true,
//     },
//   ];

//   const getPlayIcon = fn => driver.findElement(By.className('jp-play')).then((x) => {
//     fn();
//     return x;
//   });
//   const playOrPause = fn => fn;
//   const clickPlay = (playIcon) => {
//     const p = playIcon;
//     playIcon.click();
//   };
//   const getPaused = (initalPaused) => {
//     driver.findElement(By.css('audio')).getAttribute('paused').then((paused) => {
//       const p = initalPaused;
//       const e = paused;
//       expect(paused).toBe(initalPaused ? null : 'true');
//     });
//   };

//   test.before(() => {
//     driver = setupDriver();
//   });

//   test.it('should toggle play when play icon clicked', () => {
//     testData.forEach((testDatum) => {
//      // playOrPause(testDatum.fn)
//       getPlayIcon(testDatum.fn)
//         .then(clickPlay)
//         .then(() => getPaused(testDatum.expected));
//     });
//   });

//   test.after(() => driver.quit());
// });
