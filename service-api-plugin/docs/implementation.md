### Get Resource List
```sh
get<resource>s(): Observable< <resource>[] >
```
This method, by default, does not expect to receive any arguments, but at the end it returns the resource list.

### Get Resource by Id
```sh
get<resource>ByID(id: number): Observable< <resource> >
```
This method, by default, expects to receive an id as an argument, and at the end returns the desired resource.

### Save New Resource
```sh
save<resource>ByID(<new_resouce>: any): Observable< <resource> >
```
By default, this method expects to receive a resource as an argument, and at the end it returns the saved resource.

### Edit Resource
```sh
edit<resource>ByID(<resouce>: any): Observable< <resource> >
```
By default, this method expects to receive a resource as an argument, and at the end it returns the changed resource.

### Remove Resource
```sh
remove<resource>(id: number): void
```
By default, this method expects to receive a resource id as an argument, and in the end it returns nothing.