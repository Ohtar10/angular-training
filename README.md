## Install NodeJS
For example, via conda or directly in the os.

NodeJS should be 6.9 or greater for Angular.

## Install Angular-CLI
```
npm install -g @angular/cli
```
After that, the cli should be available via `ng` command

## Create a project
```
ng new hello-world
```
### Create an empty project
```
ng new --createApplication=false  hello-world
```

## Run the project
```
cd <into project folder>
ng serve
```
The console should output the listening url , e.g.: http://localhost:4200/

## Building an existing project
In the repository, only the source code files will be submitted. It is necessary to build locally the project via:
```
ng build
```
It is common to face an issue the first time we do this as:
```
An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json'
```
This is basically because the dev kit is not present in the folder and this is normal because that should not be part of the committed files anyway.

To solve it, simply install the dependency with
```
npm install --save-dev @angular-devkit/build-angular
```
Then build again

## Angular Applications building blocks
* Angular follows a 'component' architectural approach. The idea is to try to divide everything as a component, e.g., a navbar, sidebar, etc. A component might be composed of several sub-components, so the best is to build the application under reusable components.
* It is also recommended to group several related pieces together under a 'module' umbrella. This is basically packaging several components and pieces of the application in modules to make easier to maintain the application.

### Creating an app
If you created an empty project, you can manually add an application like this (this needs to be executed inside the project's folder).
```
ng generate application app
```

### Creating components
The components are the main piece of Angular Apps. Their purpose is to hold front-end logic related to how certain parts of our web apps are presented to the user along with all the interaction logic with it.

Angular CLI allows us to create and register components automatically. It will automatically generate the basic files and register the component in app.module.ts:
```
ng generate component component_name
```

### Creating services
Components should be exclusive for presentation logic. However, it is normal that a presentation depends on some backend element that retrieves
the data or interacts with it. This responsibility should be delegated to
'Services'.

Angular CLI allows us to create and register services automatically via: 
```
ng generate service service_name
```

### Creating pipes
Pipes are usefult for transforming data before displaying in in the web page. Pipes are similar to components and services. We can generate them with Angular CLI.
```
ng generate pipe pipe_name
```

## Installing new dependencies
If we want to install an additional dependency, e.g., bootstrap, we first need to install it via `npm`:
```
npm install bootstrap --save
```
The flag `--save` automatically adds this dependency to the package.json file of our project.

## Examples
* [Fundamentals](./assignments/assignment1): General component, directive and services usage.
* [Displaying & Handling Events](./assignments/assignment2): Displaying data comming from component classes and handling events like click or value changes. It also includes installing bootstrap as a dependency and using it.
* [Building Pipes](./assignments/assignment3): It contains pipe example in which a user input is automatically title cased.
* [Building Components](./assignments/assignment4): Creating a new we component from scratch and binding properties to the html so they get automatically updated.
* [Directives](./assignments/assignments5): It has a more complex component example including input and output properties and how can be used from other html pages or components. There are several directive examples here depending of the situation.
* [Template-Driven Forms](./assignments/assignments6): Example of a form mostly managed from the html template using directives. It includes data validation and error message display.