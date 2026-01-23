// /// <reference path="./nameSpace1.ts" />

// console.log(group.flag); // true

//  tsc .\nameSpace2.ts --outFile nameSpace2.js

import { groupExported } from "./nameSpace1";

console.log(groupExported.flag); // I am exported