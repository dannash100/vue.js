# Vue projects

*```vue init webpack``` to create project*


## template syntax

### conditions

#### v-if, v-show, v-else-if, v-else

- if value of v-if is falsey the element will not be outputted to the DOM
- v-show uses CSS to show hide elements.
- v-if has a performance cost.

### looping

#### v-for

- ```v-for="dog in dogs"``` for arrays.
- ```v-for="(rent, city) in average rent"``` for objects.
- ```v-for="n in 10"``` for simple counter 0-9.

### binding

- bind value to HTML attribute.
- type: name of attribute we want to bind the given variable
- ```:type="buttonType"```
- ```:disabled="buttonDisabled"```
- ```v-model="input text"```works with inputs.

## reactivity

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
