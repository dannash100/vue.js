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

### ref

- access element directly in the DOM
- set ref attribute of element to string, then reference with ```this.$refs``` objects.

### inputs and events

- ```@type='method'``` to bind event listeners, event object is passed automatically as the first argument.
- can also use inline code ```@click='count++'```
- event modifications can be added ```@click.prevent``` ```@click.capture```
- specify keycodes ```@keyup.27='method'```

### custom directives

- possible to make custom directives when wanting to work directly with DOM in an action.
- pass to directives property or register it globally. pass name of directive then an object containing hook functions which fire during the life cycle of the element
- ```bind(), inserted(), update(), componentUpdated(), unbind()```

  ```javascript
  Vue.directive('name', {
    bind(el) {
   }
  })
  ```

- omit object and specify a function it will fire on bind and update, this is the most commonly used option
- arguments stored in second argument, binding object.

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

### life-cycle hooks

- functions called at various points in the life-cycle of the app.
- ```beforeCreate(), created(), beforeMount(), mount(), beforeUpdate(), updated(), beforeDestroy(), destroyed()```
- mounted doesn't guarantee elements have been added to the dom - use this.$nextTick() inside mounted to ensure.

## Transitions and Animations

### css

- transitioning one or more CSS property between values or toggling.

```html
<button @click="divVisible = !divVisible">Toggle visibility</button>
<div v-if="divVisible">This content is sometimes hidden</div>
```

```html
<transition name="fade">
  <div v-if="divVisible">This content is sometimes hidden</div>
</transition>
```

```html
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
```

- classes added at various points of the transition to refer to ```{name}-enter-active?, -leave-active?```


### js

```html
<transition
  v-on:before-enter="handleBeforeEnter"
  v-on:enter="handleEnter"
  v-on:leave="handleLeave">
  <div v-if="divVisible">...</div>
</transition>
```
