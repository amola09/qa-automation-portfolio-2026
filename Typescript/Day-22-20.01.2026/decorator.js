/*
- What Are Decorators?
    Decorators is a special function which can modify :
    class, property, methods, arug

- Enabling Decorators via `tsconfig.json`
    "experimentalDecorators": true

- Types of Decorators:
  - Class
  - Property
  - Method
  - Parameter

Because you can:
✔ Store metadata about it
✔ Modify how it behaves later (getter/setter)
✔ Apply validation, transformation, logging

*/
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// 1. Class Decorator: applied on the class
function classDecorator(para1) {
    console.log(para1);
    //   console.log(para1.name);
}
/*
  Class decorator apply syntax:
      @functionName
      @decoratorName
*/
var classOne = function () {
    var _classDecorators = [classDecorator];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var classOne = _classThis = /** @class */ (function () {
        function classOne_1(para) {
            this.key1 = para;
        }
        classOne_1.prototype.methodOne = function () {
            console.log("Hi I am method");
        };
        return classOne_1;
    }());
    __setFunctionName(_classThis, "classOne");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        classOne = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return classOne = _classThis;
}();
// at time of class declaration decorators are called and passed the class constructor function as argument
// but class is not yet instantiated
// so we can modify the class behavior here
// class --> object --> use
// 2. Property Decorator:
function propertyDecorator(para1, para2) {
    console.log(para1);
    console.log(para2);
}
var classTwo = function () {
    var _a;
    var _key1_decorators;
    var _key1_initializers = [];
    var _key1_extraInitializers = [];
    return _a = /** @class */ (function () {
            function classTwo(para) {
                this.key1 = __runInitializers(this, _key1_initializers, void 0);
                __runInitializers(this, _key1_extraInitializers);
                this.key1 = para;
            }
            classTwo.prototype.methodOne = function () {
                console.log("Hi I am method");
            };
            return classTwo;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _key1_decorators = [propertyDecorator];
            __esDecorate(null, null, _key1_decorators, { kind: "field", name: "key1", static: false, private: false, access: { has: function (obj) { return "key1" in obj; }, get: function (obj) { return obj.key1; }, set: function (obj, value) { obj.key1 = value; } }, metadata: _metadata }, _key1_initializers, _key1_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// 3. Method Decorator:
function methodDecorator(para1, para2) {
    console.log(para1);
    console.log(para2);
}
//   /*
// [Function (anonymous)]
// {
//   kind: 'method',
//   name: 'methodOne',
//   static: false,
//   private: false,
//   access: { has: [Function: has], get: [Function: get] },
//   metadata: undefined,
//   addInitializer: [Function (anonymous)]
// }
// */
// }
var classThree = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _methodOne_decorators;
    return _a = /** @class */ (function () {
            function classThree(para) {
                this.key1 = __runInitializers(this, _instanceExtraInitializers);
                this.key1 = para;
            }
            classThree.prototype.methodOne = function () {
                console.log("Hi I am method");
            };
            return classThree;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _methodOne_decorators = [methodDecorator];
            __esDecorate(_a, null, _methodOne_decorators, { kind: "method", name: "methodOne", static: false, private: false, access: { has: function (obj) { return "methodOne" in obj; }, get: function (obj) { return obj.methodOne; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// 4. parameter Decorator:
// function parameterDecorator(para1: any, para2: string) {
//   console.log(para1);
//   console.log(para2);
// }
// class classFour {
//   key1: number;
//   constructor(@parameterDecorator para: number) {
//     this.key1 = para;
//   }
//   methodOne( para: boolean) {
//     console.log("Hi I am method");
//   }
// }
