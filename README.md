jquery-ujs-link
=================

Rails 3/4 replicate the behaviour of the link_to tag with the parameter ::with:: and ::submit::

http://apidock.com/rails/ActionView/Helpers/PrototypeHelper/link_to_remote

It only works with jquery (it is the default javascript engine provide in rails 3/4 by using jquery-ujs)

## How to install

Only copy the javascript jquery.rails.js under RAILS_ROOT/vendor/assets/javascripts
And add the js in your layout or application.js if you are using the asset pipeline

## How to use

data-submit: serialize all the input field, specify by an 'id'

data-with: A JavaScript expression specifying the parameters for the XMLHttpRequest.

### data-submit

```html
<p id="category-add">
    <input id="category_name" name="category_name" type="text" size="30" />
    <select id="category_parent" name="category_parent">
        <option value="1">Parent 1</option>
        <option value="1">Parent 2</option>
    </select>

    <%= link_to 'Add', add_categories_path , 'data-submit' => "category-add", :method => :post, :remote => true %>
<p>
```

### data-with

```html
<select id="category_parent" name="category_parent" class="chosen">
        <option value="1">Parent 1</option>
        <option value="1">Parent 2</option>
    </select>

 <%= link_to '# Edit Place', edit_place_admin_events_path ,'data-with' => "'id='+$('.chosen').val() ", :method => :post, :remote => true %>
```

