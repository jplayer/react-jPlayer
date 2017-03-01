// import expect from 'expect';
// import { By } from 'selenium-webdriver';
// import test from 'selenium-webdriver/testing';

// import setupDriver from '../../util/common.acceptance';

// test.describe('Repeat', () => {
//   let driver;

//   const getRepeatIcon = () => driver.findElement(By.className('jp-repeat'));
//   const clickRepeat = repeatIcon => repeatIcon.click();
//   const getRepeat = (initialRepeat) => {
//     driver.findElement(By.css('audio')).getAttribute('loop').then((loop) => {
//       expect(loop).toBe(initialRepeat ? 'true' : null);
//     });
//   };

//   test.before(() => {
//     driver = setupDriver();
//   });

//   test.it('should toggle loop when repeat icon clicked', () => {
//     [null, 'true'].forEach((initialRepeat) => {
//       getRepeatIcon().then(clickRepeat).then(() => getRepeat(initialRepeat));
//     });
//   });

//   test.after(() => driver.quit());
// });
