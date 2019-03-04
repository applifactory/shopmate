import { PermalinkPipe } from './permalink.pipe';

const TEXT = 'A very long title, having MORE     than 10 words, some "@#$%special" chars etc...';
const PERMALINK = 'a-very-long-title-having-more-than-10-words-some-special-chars-etc';

describe('PermalinkPipe', () => {
  it('create an instance', () => {
    const pipe = new PermalinkPipe();
    expect(pipe).toBeTruthy();
  });

  it('convert title to permalink', () => {
    const pipe = new PermalinkPipe(),
          permalink = pipe.transform(TEXT);
    expect(permalink).toEqual(PERMALINK);
  });

});
