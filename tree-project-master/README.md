# Exercise: Build an Explorer

This exercise is to build a folder and file explorer (or a tree control).

Your implementation will be evaluated technically, but also by a designer, so CSS fidelity is important.

You can use any tools or libraries you'd like. Except an off-the-shelf tree control :)

## Requirements

### Application
* You will create a new file `index.html` that renders an interactive file explorer shown in `mockup.png`
* You will use the data from `data.json` to render the actual folders & files.
* You may make the data in `data.json` a global variable in your scripts (ie, so that you won't need to make an AJAX request to retrieve it)
* Provided code should be runnable by simply opening up `index.html`. No server should be needed.
* Lay good groundwork and infrastructure for adding more advanced features. See below for more details.

#### Appearance
* What you build should look like a modal but doesn't need to function like one. i.e. opening/closing and dragging it around are not necessary
* Visually has the same colors, alignment, sizing, and shading as `mockup.png`
* Make private folders have the red icon appearance.

### Minimum Features
* Folders should be able to expand or collapse by clicking anywhere on the row (not just the icon or label itself)
* Folders and files should have a basic selection and hover appearance (such as highlighting the row blue).
* Folders and files are selected/deselected by clicking anywhere on the row.
* Text should truncate with ellipsis if too wide

### Advanced Features (Not Required!)
Below are advanced features you do NOT need to implement, but **need to plan for**. In later interviews,
you will be asked exactly how you would implement all of these into your app. If you do have the time, try to implement some of these for bonus points!

* Change the "Done" button to "Upload". When the user clicks on it, they should be able to upload a new JSON file with the
 same structure as `data.json`. When it is uploaded, the file explorer should re-render with the same data (including potentially having
 some folders already open). Assume all uploaded JSON files are valid and have the structure you expect (meaning you don't need account for dealing with invalid structures).

* Add another button "Save". This should save the exact state & configuration of your app. In a real app this might
be done by saving the state to the server, a cookie, or local storage. In this app, you can simply export some file that would be
uploaded via the above feature.

* Change the "Link" button to "Add". When the user clicks on it, it should pop up with a modal where the user can add
either a new folder or file into the tree. If a folder was selected before clicking "Add", it's inserted into the end of that folder. If a file was selected,
it is inserted after the file. If nothing was selected, it is inserted at the highest level (i.e. same level as "Main Folder")

* Add the ability to move a file or folder by dragging it to another location. You'll want to use a dragging library for this.


## Evaluation Criteria (all equally important)
1. Minimum features met
2. DRY, reusable, well-thought-out code that lays good infrastructure for implementing all of the Advanced Features
3. Pixel-perfectness of CSS matching `mockup.png` in Chrome
