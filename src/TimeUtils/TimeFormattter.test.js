
import {toMMSS} from './TimeFormattter'


describe("Convert seconds in time", () => {
    test("conversione secondi in time", () => {

            expect(toMMSS(60)).toEqual("01:00");
            expect(toMMSS(120)).toEqual("02:00");
            expect(toMMSS(59)).toEqual("00:59");
  
    });
  });