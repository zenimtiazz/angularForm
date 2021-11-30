# Basic Angular Form
- Type of Challenge: `Learning`
- Duration: `3 days`

### Must-have features

All the fields you need to put the data of your friends in your friendlist. These are::heavy_check_mark:
- First name
- Last name
- Email
- Phone number
- Favourite language (html, css, js, php, ...), this will be a select with options

Error reporting, give some visual feedback to the user if they put something wrong in the inputs. :heavy_check_mark:

Form validation :heavy_check_mark:

A Friend list, do this by sending a GET request to your local node server. :heavy_check_mark:

A POST request to add a friend to your friend list. :x:

### Day 01

1. Installed
    - node: <code>node -v</code> or <code>node -version</code>
    - npm: <code>npm -v</code> or <code>npm -version</code>
2. Install angular cli.
3 Navigate to the root of your clone of this repository in the terminal and enter the command <code>ng new project-name</code>. You should now have 2 folders called "server", your node API, and "project-name", your angular app.

3.In the HTML file, add a form with the required inputs at least. Go take a look at the must haves to see which are required. Don't forget a submit button, make it a regular button, <strong>not an input type button</strong>

4.  usedthe ngFor loop to generate all the options,in option field

5. Then binding the data to form
    - In your app.module.ts, import the FormsModule from @angular/forms. Also add it to the imports array. :white_check_mark:
    - Add <code>#formName="ngForm"</code> to your form. This will make "formName" a variable which contains all the data of the form in realtime. :white_check_mark:
    - Also add <code>#inputName="ngModel"</code> to every input tag. :white_check_mark:
    - Make sure all your inputs have a name attribute and also put <code>ngModel</code> inside of each input. :white_check_mark:
    - Test if it works by adding <code>{{ formName.value | json }}</code> at the top of your html. If you take a look at your page and fill in some values, you'll see them update automatically. :white_check_mark:
  
 ### Day 02
    
6. The ngModel that's added to the inputs is not complete yet. It's supposed to be used to bind the data to a model.
    - First we need to add a new "friend" model to our project, in the root of angular app in the terminal, run the command <code>ng generate class Friend</code>. :white_check_mark:
    - Open the generated friend.ts file and add a constructor to the class. In there, depending on which inputs  used, add the corresponding properties. Don't forget to typehint them. Thanks typescript! :white_check_mark:
    - Instantiate the friendModel through the friend class with all the properties set to null. :white_check_mark:
    - Next, in HTML, change the ngModel of inputs to be like this: <code>[(ngModel)]="friendModel.propertyName"</code>. 
    - To test if this works, go back to the top of your HTML and change <code>{{ formName.value | json }}</code> to <code>{{ friendModel | json }}</code>. You'll see that at the top of your page in the browser, nothing really changed. Now your data is binded to the friend model.
7.Added a required validation using bootstap class and touched and ivalid property for validity.
   
8. Let's submit the data to a server now, but before we can do that we need to be able to do something on submit and get access to http requests. :heavy_check_mark:
    - If you add the ngSubmit property to your form, you can bind a function to it and use that function in your component class to trigger it on submit. This is how it looks like: <code>(ngSubmit)="yourFunction()"</code>.
    - In  component class, define the function and console log your friend model. Now when you submit you'll see the data appear in your console.
    - In newly generated addFriend.service.ts file, import the HttpClient. In your addFriend class, add a new private property called http to the constructor. Typehint it to be of type HttpClient.
    - You'll also have to import the HttpClientModule in your app.module.ts, also add it to the imports array below. :heavy_check_mark:
9.We now have our data on submit and we're in a position to start http requests. Now we want to post our data to a server.
    - In the service, make a method called addFriend and give it a parameter, typehint it to be of the Friend type. You'll also need to import Friend.
    - In this method, write a post request. It looks like this: <code>this.http.post<any>(url, data)</code>. Return it afterwards, what you'll get back in something called an observable. http is the property HttpClient, <any> is the type of data your post can contain and url is the url you're sending the data to.
    - We'll get back to the url later. For now, make a property called 'url' and leave it as an empty string.
    - In your app.component.ts also import your service and make a constructor in the component class. Add a private "addFriendService" property and typehint it.
    - Now we can use the service in the method that triggers when the form gets submitted. In the method, call the addFriend method of the addFriendService and pass the friend data to it.
    - The method we made returns something called an "observable". If you want, you can also work with promises, however in this case we used an observable and to get the data out of it, we need to subscribe to it.
    - The code to subscribe to an observable looks like this <code>observable.subscribe(data => it worked, error => it didn't work)</code>.
10. Everything is set up in order to send data to your local api. :heavy_check_mark:
    - First, in the server.js file in the server folder, change the port to whatever number you like that is not occupied. Port numbers 9000 - 9100 are always safe, just make sure no other application is running on those ports.
    - In the server folder in your terminal, run the command <code>node server</code>. You won't get any confirmation that the server is running, just a blank new line. Now navigate to <code>localhost:PORT</code>.
    - You should see "Hello from server". That is because the get function in the server file with the root "/" as it's path sent it as a response.
    - You'll find an array allFriends, this is where you'll push your new friend to. But first, let's take a look at your friends in the server.
    - Add a new get function with path "allFriends" and send the allFriends variable as a response. <strong>If you make changes to your server, make sure it's not running and then run it again with the <code>node server</code> command.</strong>If you now navigate to <code>localhost:PORT/allFriends</code> you'll get to see all your friends.
    - Remember the url that we left empty? It's time to configure a path to which we'll post our data. Start by changing the url to <code>'http://localhost:PORT/'</code>.
    - Next, make a new post function with path "addFriend". In here, push the request body to the allFriends array.
    - If you now go to your form and add a friend, submit the form, you'll see in your server, localhost:PORT/allFriends, that the friend has been added to the list.
