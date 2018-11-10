# Vue projects

*```vue init webpack``` to create project*


## Template syntax

### v-if, v-show, v-else-if, v-else

- if value of v-if is falsey the element will not be outputted to the DOM
- v-show uses CSS to show hide elements.
- v-if has a performance cost.

### v-for

- ```v-for="dog in dogs"``` for arrays.
- ```v-for="(rent, city) in average rent"``` for objects.
- ```v-for="n in 10"``` for simple counter 0-9.

### binding

- bind value to HTML attribute.
- type: name of attribute we want to bind the given variable
- ```:type="buttonType"```
- ```:disabled="buttonDisabled"```
- ```v-model="input text"```works with inputs.


## Vue object

### reactivity

- reactivity works by modifying every object added to the data object, so that Vue is notified by its changes.
- updating multiple properties at same time, use Object.assign to create a new object and override the only object.
- alternatively for updated single values use Vue.set() or this.$set inside component.
- for arrays use splice or set

``` javascript
vm.formData = Object.assign({}, vm.formData, { changes });
Vue.set(vm.formData, 'name', 'Some User')

vm.data.splice(2, 1 'Bob')
Vue.set(vm.data, 2, 'Bob')
```

### methods and computed properties

- defined in the ```methods``` object.
- use ```this``` to refer to access data object and other methods.
- functions defined in the ```computed``` object live halfway between data object properties and methods, can refer to data without use of ```this```.
- computed functions will only be called once and thereafter the cached value will be used, it will only be updated when a dependency of the method changes, i.e the data it relies on is updated.
- computed properties can be changed into an object to make use of get and set keywords.
- if using arguments use methods.

### watchers

- although computed properties with setters are recommended in most cases, watchers can be used to watch a property for changes.
- define functions with the same name as the data to watch inside the ```watchers``` object or ```'data.propertyToWatch'```
- useful for performing asynchronous operations etc. delaying response to input.
- watchers are passed two arguments, new and old values.

### filters

- pure functions.
- way to manipulate data in a template. Chain filters together with pipes ```cost | round | formatCost('$')```
- define filters inside ```filters``` object, filters can also take arguments
- can also be defined in v-bind

### ref


