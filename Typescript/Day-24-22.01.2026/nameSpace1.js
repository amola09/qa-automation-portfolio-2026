"use strict";
/*


namespace NameName {
export code

}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupExported = void 0;
var group;
(function (group) {
    group.flag = true;
})(group || (group = {}));
// can be access within the same file
console.log(group.flag); // true
// can be able to export to other files
var groupExported;
(function (groupExported) {
    groupExported.flag = "I am exported";
})(groupExported || (exports.groupExported = groupExported = {}));
