'use strict';

describe('RecurringCharacter', () => {
  var character;
  beforeEach(() => {
    character = new RecurringCharacter();
  });

  describe('when single type element passed in', () => {
    it('should able to return {A:2} if AA passed in', () => {
      expect(character.findRecurring('AA')).toEqual({ A: 2 });
    });

    it('should be able to return {B:2} if BB passed in', () => {
      expect(character.findRecurring('BB')).toEqual({ B: 2 });
    });

    it('should be able to return {C:2} if CC passed in', () => {
      expect(character.findRecurring('CC')).toEqual({ C: 2 });
    });
  });

  describe('when different type elements passed in', () => {
    it('should be able to return {A:2, B:2} if AABB passed in', () => {
      expect(character.findRecurring('AABB')).toEqual({ A: 2, B: 2 });
    });

    it('should be able to return {A:3, B:2} if AABB passed in', () => {
      expect(character.findRecurring('AAABB')).toEqual({ A: 3, B: 2 });
    });

    it('should be able to return {A:3, B:2, C:2} if ACACABB passed in', () => {
      expect(character.findRecurring('ACACABB')).toEqual({ A: 3, B: 2, C: 2 });
    });

    it('should be able to return {A:3, B:2, C:2, Q:4} if QACQACQABQB passed in', () => {
      expect(character.findRecurring('QACQACQABQB')).toEqual({
        A: 3,
        B: 2,
        C: 2,
        Q: 4,
      });
    });
  });
});
