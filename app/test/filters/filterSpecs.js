describe('Filter: hour', function() {
    beforeEach(module('SCWebApp'));

    it('should be able to convert number to hour format', inject(function(hourFilter) {
        expect(hourFilter(12)).toEqual('12:00 AM');
        expect(hourFilter(24)).toEqual('12:00 PM');
    }));
});
