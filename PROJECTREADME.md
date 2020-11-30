<!-- # Creating A Campaign Ad Using Drag And Drop To Edit Elements

This Project implements dragging and dropping and editing of image and text elements.The functionality of this project was only based on the desktop version. The project was setup with Nuxtjs and TailwindCss. The steps carried out in building this project will be explained below.

# Step One

## Building The Layout With Html And Css

The layout of this project was built with HTML and Tailwind css. This layouts was divided into five components and three pages. The components includes:

1. Genaral: This component folder include all the Navbars used in this project for both Desktop And Mobile view.

2. Campaigns: This component folder is the layout of the home page with the root file being the index.vue

3. Edit: This component folder is the layout of the edit page with the root file being the index.vue. The components folder in this components are files for editing and previewing the text and image elements.

4. Inner-side-nav: This component folder is the layout of the navbar that includes all the element that caan be edited and the javascript interactions for dragging and dropping this elements is done in the button.vue, image.vue and input.vue file respectively.

5. Preview: This component folder is the layout of the preview page with the root file being the index.vue

The pages are meant to be displayed on the dom depending on when the route is being called and it includes the root page of Nuxt, Edit page(with route params of \_id) and Preview Page(with route params of \_preview).

# Step Two

## Javascript Interactions

### Creating The Todo List

A todo list was created and stored in the local storage in the main.vue file of the Campaigns component. This was done by creating a modal with an input field and assigning a v-model of "newCampaign" to the input field. The modal could be closed by clicking on the container holding the form in place. When a text is written in the input field, the submit button is enabled. Clicking on the submit button calls the function addCampaign(). This function stores the string(text written in the input field) in the v-model and pushes it into an empty array in the Local Storage. The function then takes the string as a route params and concatenates it with the edit page thus pushing it to the editing page for that particular todo.

All the newCampaigns that are created(and stored as keys) are assigned an empty array(which is stringified) as the value in the local storage are gotten with the allStorage() function. This function gets the keys in the local storage using the Object.keys() Javascript method. All the keys are then mounted ont the Dom by setting the data "Campaign" which is an empty array to be equal to the allStorage() function. A v-for loop is used to loop through the campaign array and it is displayed on the dom.

Each Item in the campaign data array can be removed from local storage by clicking on the delete button which calls the removeCampaign() function.

The Edit button leads to edit page for that particular campaign and the Preview button leads to preview page of that particular campaign.

### Dragging the Elements In The Edit Page

On the edit page, there is a side nav(DesktopNavTwo && MobileNavTwo) that displays the elements which can be edited. This component displaying the elements that can be edited is set to an empty string on the state of the vuex store(element.js) and called from the vuex store (using the computed property of vue) using CurrentComponent().

The image and the input component in the Inner-side-nav folder are imported as TextComponent and ImageComponeent in the DesktopNavTwo component and registered in the component property of vuejs.

The sidenav that displays elements that can be edited and the image and input component in the Inner-side-nav folder can be interswitced by calling the mutation(changeComponent) that sets currentComponent to whatever is passed as the payload. This mutation is called from the vuex store by using the selectComponent Method which uses switch case conditional in javascript to switch between components and sets the default currentComponent to an empty string which shows the side nav(DesktopNavTwo) that displays the elements which can be edited. This components are displayed using the dynamic component property in vue.

In the ImageComponent and the TextComponent vue-draggable plugin is implemented in each component and each draggable is assigned a v-model of images and allTexts respectively along with the same name "people" which is stored in the draggable props :group. Each v-model assigned to each draggable in the ImageComponent and TextComponent respectively is an array of objects and this array is being displayed on the dom within the draggable tags.

In the edit.vue file of the edit folder, vue-draggable is being implemented and a v-model called elements is assigned to it. This v-model elements is called from the Vuex Store(elements: an empty array) with the vue-draggable vuex syntax. The group of this vue draggable is set to "people" which is the name of the group that was passed down as props from TextComponent and the ImageComponent.

Using dynamic component property in vue inside the draggable tags in the edit.vue file, the type of component that is being dragged into the empty array is being displayed by looping through the elements in v-for and binding the type of each item in the array with the "is" binding property of vue.

Props of "props" and "index" are being passed from the dynamic component down to the image.vue and dragText.vue files in the component folder in the Edit folder. The "props" is used to display image or text that is being dragged while the "index" is used to delete dragged images or text.

### Updating the properties of the images being dragged and displayed

In the DestopNavTwo.vue where currentComponent is set to an empty string through the default value of the switch case method, the image-edit.vue file is imported as an imageFormater.

In the image.vue file in the component folder of the edit folder, the mutation(changeComponent) in the vuex store(element.js) is called and this mutation sets currentComponent to imageFormater that has already being registered in DesktoNavTwo.vue(where currentComponent is set to an empty string through the default value of the switch case method) and displayed using component binding.

This registered component imageFormatter displays the image-edit.vue file that allows editing of the clicked image. This clicked image had the currentindex set to null from the state(currentIndex) in the vuex store(element.js) initially through the computed property(changedIndex) of vue. When clicking on the image a mutation(editCurrentComponent) was called from the vuex store(element.js) and the Props "index" (that is passed down from the edit.vue file in the Edit folder to the image.vue file of the component folder in the Edit folder) is assigned to that image as the currentIndex.

In the image-edit.vue file of the component folder in the Edit folder, the $data was watched in the deeper form using the watch property of vue and the mutatation(EditElement) was called from the Vuex store(element.js) while the payload was set from the items in the data property of vue. The changeIndex computed method was also watched so as to know the current element being edited and set it to a new value of the payload being passed to the $data from the data property of vue(or set to a default value).

In the image.vue file in the component folder in the Edit folder, the store was watched in the deepest form using the watch property of vue and the properties that has being assigned to the index of that image was assigned to data property(properties) of vue. This data property(properties) was bounded as style properties to the image and section tags respectively.

### Updating the properties of the text being dragged and displayed

# Step Three

## Saving the Edited Properties To The Local Storage

In the edit page, the value(stringified empty array) of the key(newCampaign) in the local storage is gotten, the mutation(setElements) in the vuex store(element.js) is called and the value gotten from local storage is assigned as the payload and placed as properties of elements in the vuex store.

In the main.vue file of the Edit folder, when the "Save" button is clicked, a function save() is called. This function assigns "this.$route.params.id" to the constant "id" and it also assigns "this.$store.state.element.elements" to the constant "state". It the stores the item(replaces the empty array which was stored as value) in local storage, using the "id" as key and the "state" as value

# Step Four

## Viewing Saved Properties In The local storage In The Preview Page

In the preview page, the value(properties in the vuex store) of the key(newCampaign) in the local storage is gotten, the mutation(setElements) in the vuex store(element.js) is called and the value gotten from local storage is assigned as the payload and displayed as properties of elements before mounting through dynamic component binding property of vue. The elements being displayed were imported as ImageComponent and TextComponent from image-preview.vue file and text-preview.vue file of the components folder in the Edit folder. -->
