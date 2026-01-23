/* 


namespace NameName {
export code

}
*/

namespace group {
  export let flag = true;
}

// can be access within the same file
console.log(group.flag); // true

// can be able to export to other files

export namespace groupExported {
  export let flag = "I am exported";
}