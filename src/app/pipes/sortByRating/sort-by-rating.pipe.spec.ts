import { SortByRatingPipe } from './sort-by-rating.pipe';

describe('SortByPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByRatingPipe();
    expect(pipe).toBeTruthy();
  });
});
