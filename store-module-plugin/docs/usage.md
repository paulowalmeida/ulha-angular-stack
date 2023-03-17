To apply the Plugin in your projects, you need have the StackSpot CLI installed on your machine. [If not, follow this tutorial to install](https://docs.stackspot.com/docs/stk-cli/installation/).

### 1. Import the Stack on your machine

```sh
stk import stack https://github.com/paulowalmeida/ulha-angular-stack
```

### 2. Now check if the Stack was successfully imported

```sh
stk list stack | grep ulha-angular-stack
```

### 3. Apply the Plugin, in your project directory, execute

```sh
stk apply plugin ulha-angular-stack/store-module-plugin
```
### 4. Applying the plugin in your application
From that point on, you must enter some information.

? Entity to be managed by the store (use lowercase and if it is compound name use spaces between word)  (pet)
```
```sh
? What is the path where the component will be create?  (src/app/)
```
```sh
? Do you want download ngrx/store dependencies? (Y/n) (Yes)
```
```sh
 Do you want configure ngrx/store modules.forRoot in app.module.ts? (Y/n) (Yes)
```

### 5. After it, you see something like this on screen and your project is create with success
```sh
```

Feel free to ask for help or suggest improvements from our [Github Repository](https://github.com/paulowalmeida/ulha-angular-stack/issues).

I hope can help you in your development. ;)