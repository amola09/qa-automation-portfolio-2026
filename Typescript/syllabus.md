1. Introduction to TypeScript
What is TypeScript?
History and Evolution
Why Use TypeScript?
Benefits over JavaScript
Type Safety & Static Typing
Readability & Maintainability
Improved Developer Experience
JavaScript vs TypeScript
Key Differences
Pros and Cons
Course Prerequisites
2. Setting Up TypeScript
Installing TypeScript
npm install -g typescript
Verifying: tsc --version
TypeScript Compiler Setup
tsconfig.json, compiler options
Running TS Files: tsc file.ts, tsc -w
Using with Node.js: ts-node, tsconfig-paths
Static vs Dynamic Typing
Code Execution Flow
Transpilation & Compilation
TypeScript + HTML
Using TypeScript with: Webpack, Vite, Parcel
3. TypeScript Basics
Type Inference & Annotation
Core Types:
string, number, boolean, object, any, unknown, never, undefined, null
Literal Types, Union (|), Intersection (&)
Arrays, Tuples (optional, readonly)
Type Aliases
Enums (enum, const enum)
Type Assertions: as, <Type>
Functions:
Return Types (void)
Optional, Default, and Rest Parameters
Arrow Functions
Function Overloading
4. Object-Oriented Programming
Classes & Constructors
static properties, methods
readonly property
instanceof Usage
Inheritance & Overriding
Readonly, Getters & Setters
Abstract Classes
Access modifiers: Public, Private, Protected
5. Interfaces & Type System
Interface(for object)
Optional & Readonly Props
Extending Interfaces (Extending multipal interfaces)
Interface Merging
Interface implements on the class
Function Types with Interfaces
Index Signatures (Interface for Array Type)
Structural/Duck Typing
Interfaces vs Type Aliases
Interfaces vs Abstract Classes
6. Advanced TypeScript
Generics:
Functions, Interfaces, Classes
Constraints and Defaults
Utility Types:
Partial, Required, Readonly
Template Literal Types
7. Decorators
What Are Decorators?
Enabling Decorators via tsconfig.json
Decorator Factories
Types of Decorators:
Class
Property
Method
Accessor
Parameter
Real-World Examples:
Angular
NestJS
Logging, Metadata, DI
8. Modules & Namespaces
ES Modules:
Named / Default Exports
Import Variants
Namespaces (legacy use)
Path Aliases
9. Error Handling & Debugging
try / catch / finally
Custom Errors
Debugging TS in VSCode
Source Maps